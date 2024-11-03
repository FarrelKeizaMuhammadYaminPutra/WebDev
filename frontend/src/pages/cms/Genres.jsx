import React, { useState, useEffect } from "react";
import axios from "axios";

const Genres = () => {
  const [genreName, setGenreName] = useState("");
  const [editGenreId, setEditGenreId] = useState(null); // Track genre being edited
  const [allGenres, setAllGenres] = useState([]); // Full genre list for filtering
  const [filteredGenres, setFilteredGenres] = useState([]); // Filtered results for current search term
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  // Fetch all genres once
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/genres", {
          params: { limit: 1000 },
        });
        setAllGenres(response.data.genres || []);
        setFilteredGenres(response.data.genres || []); // Initialize filtered list
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  // Update filtered genres when the search term changes
  useEffect(() => {
    const results = searchTerm
      ? allGenres.filter((genre) =>
          genre.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : allGenres;

    setFilteredGenres(results);
    setCurrentPage(1); // Reset to first page on search
  }, [searchTerm, allGenres]);

  // Handler to submit the form and save a genre
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/genres", {
        name: genreName,
      });
      setAllGenres([...allGenres, response.data.genre]);
      setGenreName("");
      alert("Genre added successfully!");
    } catch (error) {
      console.error("Error adding genre:", error);
      alert("Failed to add genre.");
    }
  };

  // Handler to start editing a genre
  const handleEdit = (genre) => {
    setEditGenreId(genre.id);
    setGenreName(genre.name); // Populate input with current name
  };

  // Handler to submit the edit
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/genres/${editGenreId}`, {
        name: genreName,
      });
      setAllGenres(
        allGenres.map((genre) =>
          genre.id === editGenreId ? { ...genre, name: genreName } : genre
        )
      );
      setGenreName("");
      setEditGenreId(null);
      alert("Genre updated successfully!");
    } catch (error) {
      console.error("Error updating genre:", error);
      alert("Failed to update genre.");
    }
  };

  // Handler to delete a genre
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/genres/${id}`);
      setAllGenres(allGenres.filter((genre) => genre.id !== id));
      alert("Genre deleted successfully!");
    } catch (error) {
      console.error("Error deleting genre:", error);
      alert("Failed to delete genre.");
    }
  };

  // Pagination
  const indexOfLastGenre = currentPage * itemsPerPage;
  const indexOfFirstGenre = indexOfLastGenre - itemsPerPage;
  const currentGenres = filteredGenres.slice(indexOfFirstGenre, indexOfLastGenre);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredGenres.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="px-4 flex flex-col justify-start items-center bg-gray-100 min-h-screen w-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full mx-4 sm:mx-6 lg:mx-auto my-4">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">Page Genres</h2>
          <h1 className="text-gray-500 font-semibold text-lg mt-4">
            {editGenreId ? "Edit Genre" : "Insert Genre"}
          </h1>
          <form onSubmit={editGenreId ? handleUpdate : handleSubmit}>
            <div className="flex space-x-4 items-center">
              <input
                type="text"
                placeholder="Enter genre name"
                value={genreName}
                onChange={(e) => setGenreName(e.target.value)}
                className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-gray-300"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-green-600 py-2 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-100/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
              >
                {editGenreId ? "Update" : "Submit"}
              </button>
            </div>
          </form>
          
          {/* Search Input */}
          <div className="mt-2 flex justify-end">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-400 focus:outline-0 focus:ring-1 focus:ring-gray-300 rounded-full px-4 py-1 w-full sm:w-auto"
            />
          </div>

          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">#</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Genres</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentGenres.length > 0 ? (
                    currentGenres.map((genre, index) => (
                      <tr key={genre.id} className="bg-red-50">
                        <td className="py-2 px-4 border-b border-gray-300">{indexOfFirstGenre + index + 1}</td>
                        <td className="py-2 px-4 border-b border-gray-300">{genre.name}</td>
                        <td className="py-2 px-4 border-b border-gray-300">
                          <a
                            onClick={() => handleEdit(genre)}
                            className="text-blue-600 hover:underline cursor-pointer"
                          >
                            Rename
                          </a>
                          <span className="text-gray-500 px-2">|</span>
                          <a
                            onClick={() => handleDelete(genre.id)}
                            className="text-red-600 hover:underline cursor-pointer"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-300" colSpan="3">
                        No genres found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span>Page {currentPage}</span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === Math.ceil(filteredGenres.length / itemsPerPage)}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;


