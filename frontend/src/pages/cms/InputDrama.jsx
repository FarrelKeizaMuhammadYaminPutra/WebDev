import React, { useState } from "react";

const InputDrama = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [actors, setActors] = useState(Array(9).fill(null)); // Up to 9 actors
  const genres = ["Action", "Adventures", "Romance", "Drama", "Slice of Life"];

  const handleGenreChange = (genre) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genre)
        ? prevGenres.filter((g) => g !== genre)
        : [...prevGenres, genre]
    );
  };

  const handleActorChange = (index, actor) => {
    const newActors = [...actors];
    newActors[index] = actor;
    setActors(newActors);
  };

  const removeActor = (index) => {
    const newActors = [...actors];
    newActors[index] = null;
    setActors(newActors);
  };

  return (
    <div className="px-4 flex flex-col justify-start items-center bg-gray-100 min-h-screen w-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-7xl mx-4 sm:mx-6 lg:mx-auto my-4">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 ">Page Input Drama</h2>
          <form>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Left Column: Submit Button and Image */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-300 rounded mb-4"></div>
                <button>
                  <a
                    className="inline-flex items-center justify-center rounded-xl bg-green-600 py-2 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-100/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                    href="#"
                  >
                    Submit
                  </a>
                </button>
              </div>

              {/* Right Column: Input Fields */}
              <div className="flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label>Title</label>
                    <input
                      type="text"
                      placeholder="Enter title"
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <label>Alternative Title</label>
                    <input
                      type="text"
                      placeholder="Enter alternative title"
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <label>Year</label>
                    <input
                      type="text"
                      placeholder="Enter year"
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <label>Country</label>
                    <input
                      type="text"
                      placeholder="Enter country"
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div className="col-span-2">
                    <label>Synopsis</label>
                    <textarea
                      placeholder="Enter synopsis"
                      className="w-full border border-gray-300 rounded-lg p-2"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="col-span-2">
                    <label>Availability</label>
                    <input
                      type="text"
                      placeholder="Enter availability"
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                </div>

                {/* Genres */}
                <div className="mt-4">
                  <label>Add Genres</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {genres.map((genre) => (
                      <div key={genre}>
                        <input
                          type="checkbox"
                          id={genre}
                          value={genre}
                          checked={selectedGenres.includes(genre)}
                          onChange={() => handleGenreChange(genre)}
                        />
                        <label htmlFor={genre} className="ml-2">
                          {genre}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actors */}
                <div className="mt-4">
                  <label>Add Actors (Up to 9)</label>
                  <input
                    type="text"
                    placeholder="Search Actor Names"
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                    {actors.map((actor, index) => (
                      <div key={index} className="relative">
                        <div className="w-16 h-16 bg-gray-300 rounded mb-2"></div>
                        <input
                          type="text"
                          placeholder={`Actor ${index + 1}`}
                          value={actor || ""}
                          onChange={(e) =>
                            handleActorChange(index, e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-lg p-2"
                        />
                        {actor && (
                          <button
                            type="button"
                            className="absolute top-0 right-0 text-red-500"
                            onClick={() => removeActor(index)}
                          >
                            x
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trailer Link */}
                <div className="mt-4">
                  <label>Link Trailer</label>
                  <input
                    type="text"
                    placeholder="Enter trailer link"
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputDrama;
