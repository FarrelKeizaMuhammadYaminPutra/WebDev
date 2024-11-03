import React, { useState, useEffect } from "react";
import axios from "axios";

const Countries = () => {
  const [countryName, setCountryName] = useState("");
  const [editCountryId, setEditCountryId] = useState(null); // Track country being edited
  const [allCountries, setAllCountries] = useState([]); // Full country list for filtering
  const [filteredCountries, setFilteredCountries] = useState([]); // Filtered results for current search term
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  // Fetch all countries once
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/countries", {
          params: { limit: 1000 }, // Adjust limit as necessary to fetch all data
        });
        setAllCountries(response.data.countries || []);
        setFilteredCountries(response.data.countries || []); // Initialize filtered list
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Update filtered countries when the search term changes
  useEffect(() => {
    const results = searchTerm
      ? allCountries.filter((country) =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : allCountries;

    setFilteredCountries(results);
    setCurrentPage(1); // Reset to first page on search
  }, [searchTerm, allCountries]);

  // Handler to submit the form and save a country
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/countries", {
        name: countryName,
      });
      setAllCountries([...allCountries, response.data.country]);
      setCountryName("");
      alert("Country added successfully!");
    } catch (error) {
      console.error("Error adding country:", error);
      alert("Failed to add country.");
    }
  };

  // Handler to start editing a country
  const handleEdit = (country) => {
    setEditCountryId(country.id);
    setCountryName(country.name); // Populate input with current name
  };

  // Handler to submit the edit
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/countries/${editCountryId}`, {
        name: countryName,
      });
      setAllCountries(
        allCountries.map((country) =>
          country.id === editCountryId ? { ...country, name: countryName } : country
        )
      );
      setCountryName("");
      setEditCountryId(null);
      alert("Country updated successfully!");
    } catch (error) {
      console.error("Error updating country:", error);
      alert("Failed to update country.");
    }
  };

  // Handler to delete a country
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/countries/${id}`);
      setAllCountries(allCountries.filter((country) => country.id !== id));
      alert("Country deleted successfully!");
    } catch (error) {
      console.error("Error deleting country:", error);
      alert("Failed to delete country.");
    }
  };

  // Pagination
  const indexOfLastCountry = currentPage * itemsPerPage;
  const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredCountries.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="px-4 flex flex-col justify-start items-center bg-gray-100 min-h-screen w-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full mx-4 sm:mx-6 lg:mx-auto my-4">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">Page Countries</h2>
          <h1 className="text-gray-500 font-semibold text-lg mt-4">
            {editCountryId ? "Edit Country" : "Insert Country"}
          </h1>
          <form onSubmit={editCountryId ? handleUpdate : handleSubmit}>
            <div className="flex space-x-4 items-center">
              <input
                type="text"
                placeholder="Enter country name"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-gray-300"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-green-600 py-2 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-100/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
              >
                {editCountryId ? "Update" : "Submit"}
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
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Countries</th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentCountries.length > 0 ? (
                    currentCountries.map((country, index) => (
                      <tr key={country.id} className="bg-red-50">
                        <td className="py-2 px-4 border-b border-gray-300">{indexOfFirstCountry + index + 1}</td>
                        <td className="py-2 px-4 border-b border-gray-300">{country.name}</td>
                        <td className="py-2 px-4 border-b border-gray-300">
                          <a
                            onClick={() => handleEdit(country)}
                            className="text-blue-600 hover:underline cursor-pointer"
                          >
                            Rename
                          </a>
                          <span className="text-gray-500 px-2">|</span>
                          <a
                            onClick={() => handleDelete(country.id)}
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
                        No countries found
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
                disabled={currentPage === Math.ceil(filteredCountries.length / itemsPerPage)}
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

export default Countries;






