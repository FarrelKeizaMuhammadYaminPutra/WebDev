const fs = require('fs');
const connection = require('./config/db');

// Fungsi untuk menjalankan query dengan Promise
const queryPromise = (sql, values) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// Fungsi untuk membaca file JSON dan menginsert data ke database
const insertMoviesWithDetails = () => {
  // Baca file JSON
  fs.readFile('./movies.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Parse data JSON
    const movies = JSON.parse(data);

    // SQL untuk insert data ke tabel movies
    const movieSql = 'INSERT INTO movies (title, synopsis, year, rating, poster, trailer) VALUES (?, ?, ?, ?, ?, ?)';
    const genreSql = 'INSERT INTO genres (name) VALUES (?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)';
    const movieGenreSql = 'INSERT INTO movie_genres (movie_id, genre_id) VALUES (?, ?)';
    const actorSql = 'INSERT INTO actors (name, character_name, profile_path) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)';
    const countrySql = 'INSERT INTO countries (name) VALUES (?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)';
    const movieActorSql = 'INSERT INTO movie_actors (movie_id, actor_id) VALUES (?, ?)';
    const movieCountrySql = 'INSERT INTO movie_countries (movie_id, country_id) VALUES (?, ?)';
    const reviewSql = 'INSERT INTO reviews (movie_id, author, content, rating) VALUES (?, ?, ?, ?)'; // Baris baru untuk review

    const allMoviePromises = movies.map(async (movie) => {
      try {
        // Insert movie ke tabel movies
        const movieResult = await queryPromise(movieSql, [movie.title, movie.synopsis, movie.year, movie.rating, movie.poster, movie.trailer]);
        const movieId = movieResult.insertId;

        // Insert genres ke tabel genres
        const genrePromises = movie.genre.map(async (genre) => {
          const genreResult = await queryPromise(genreSql, [genre]);
          const genreId = genreResult.insertId;
          await queryPromise(movieGenreSql, [movieId, genreId]);
        });

        // Insert actors ke tabel actors
        const actorPromises = movie.actors.map(async (actor) => {
          const actorResult = await queryPromise(actorSql, [actor.name, actor.character, actor.profile_path]);
          const actorId = actorResult.insertId;
          await queryPromise(movieActorSql, [movieId, actorId]);
        });

        // Insert countries ke tabel countries
        const countryPromises = movie.country.map(async (country) => {
          const countryResult = await queryPromise(countrySql, [country]);
          const countryId = countryResult.insertId;
          await queryPromise(movieCountrySql, [movieId, countryId]);
        });

        // Insert reviews
        const reviewPromises = movie.reviews.map(async (review) => {
          await queryPromise(reviewSql, [movieId, review.author, review.content, review.rating]);
        });

        // Tunggu semua promises selesai (genres, actors, countries, reviews)
        await Promise.all([...genrePromises, ...actorPromises, ...countryPromises, ...reviewPromises]);

        console.log(`Movie '${movie.title}' and its details have been inserted successfully.`);

      } catch (err) {
        console.error(`Error processing movie '${movie.title}':`, err);
      }
    });

    // Tunggu sampai semua movie dan detailnya selesai diinsert
    Promise.all(allMoviePromises).then(() => {
      console.log("All movies have been inserted successfully.");
    }).catch(err => {
      console.error("Error inserting all movies:", err);
    });
  });
};

// Jalankan fungsi insert
insertMoviesWithDetails();
