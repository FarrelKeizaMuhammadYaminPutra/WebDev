import React, { useState } from "react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDrama, setSelectedDrama] = useState(null); // This will store the data of the drama to be edited

  // Open the modal and set the selected drama
  const handleEditClick = (drama) => {
    setSelectedDrama(drama);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDrama(null);
  };

  return (
    <div className="px-4 flex flex-col justify-start items-center bg-gray-100 min-h-screen w-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full mx-4 sm:mx-6 lg:max-w-6xl lg:mx-auto my-4">
        <div className="overflow-x-auto p-4">
          <div className="mb-2">
            <h2 className="text-2xl font-bold text-gray-800 ">Page Validate</h2>
          </div>

          {/* Filter and search section */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              <div>
                <label className="mr-2">Filtered by:</label>
                <select className="border border-gray-300 rounded px-2 py-1">
                  <option>None</option>
                  <option>Approved</option>
                  <option>Unapproved</option>
                </select>
              </div>
              <div>
                <label className="mr-2">Shows:</label>
                <select className="border border-gray-300 rounded px-2 py-1">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-400 focus:outline-0 focus:ring-1 focus:ring-gray-300 rounded-full px-4 py-1 w-full sm:w-auto"
              />
            </div>
          </div>

          {/* Table */}
          <table className="min-w-full bg-white border border-gray-300 text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border-b border-gray-300 text-left">#</th>
                <th className="px-4 py-2 border-b border-gray-300 text-left">Drama</th>
                <th className="px-4 py-2 border-b border-gray-300 text-left">Actors</th>
                <th className="px-4 py-2 border-b border-gray-300 text-left">Genres</th>
                <th className="px-4 py-2 border-b border-gray-300 text-left">Synopsis</th>
                <th className="px-4 py-2 border-b border-gray-300 text-left">Status</th>
                <th className="px-4 py-2 border-b border-gray-300 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-red-50">
                <td className="px-4 py-2 border-b border-gray-300">1</td>
                <td className="px-4 py-2 border-b border-gray-300">[2024] Japan - Eye Love You</td>
                <td className="px-4 py-2 border-b border-gray-300">Takuya Kimura, Takeuchi Yuko, Neinen Reina</td>
                <td className="px-4 py-2 border-b border-gray-300">Romance, Adventures, Comedy</td>
                <td className="px-4 py-2 border-b border-gray-300">
                  I love this drama. It taught me a lot about money and finance. Love is not everything. We need to face the reality too. Being stoic is the best.
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-red-600">Unapproved</td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <a href="#" className="text-red-600 hover:underline" onClick={() => handleEditClick('Eye Love You')}>Edit</a>
                  <span className="text-gray-500 px-2">|</span>
                  <a href="#" className="text-red-600 hover:underline">Delete</a>
                </td>
              </tr>
              {/* Other rows */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-full w-full md:max-w-4xl lg:max-w-5xl relative overflow-y-auto max-h-screen">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-lg text-lg hover:bg-red-700 focus:outline-none"
              onClick={handleCloseModal}
            >
              X
            </button>

            {/* Approve and Delete Buttons in the Center */}
            <div className="flex justify-center space-x-4 mb-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Approve
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Delete
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              {/* Image Section */}
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
              </div>

              {/* Text Information Section */}
              <div className="flex-grow">
                <h2 className="text-2xl font-bold">
                  Title of the drama that makes two lines
                </h2>
                <p className="text-gray-500">Other title: Title 2, Title 3, Title 4</p>
                <p className="text-gray-500">Year: Spring 2024</p>
                <p className="mt-4">
                  Synopsis sometimes unhelpful. I don't need it thoroughly. But what
                  helps me is the genres. I need to see genres and actors. That is
                  what I want.
                </p>
                <p className="mt-4">Genre 1, Genre 2, Genre 3</p>
                <p className="mt-2">Rating: 3.95/5</p>
                <p className="mt-2">
                  Availability: Fansub @subscl on X
                </p>
              </div>
            </div>

            {/* Actor Images Section */}
            <div className="mt-4 flex space-x-4 overflow-x-auto">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gray-300 rounded mb-2"></div>
                  <p>Actor {index + 1}</p>
                </div>
              ))}
            </div>

            {/* Trailer Section */}
            <div className="mt-4">
              <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-500 triangle"></div> {/* Triangle as play button */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

