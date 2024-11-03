import React, { useState } from "react";

const Actors = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form and file submission here
    console.log("Selected file: ", selectedFile);
  };

  return (
    <div className="px-4 flex flex-col justify-start items-center bg-gray-100 min-h-screen w-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full mx-4 sm:mx-6 lg:mx-auto lg:max-w-7xl my-4">
        <div className="p-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Page Actors</h2>
          </div>
          <div>
            <h1 className="text-gray-500 font-semibold text-lg mt-4">
              Insert Actors
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 items-center">
                <input
                  type="text"
                  placeholder="Enter country"
                  className="w-full sm:w-auto bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-gray-300"
                />
                <input
                  type="text"
                  placeholder="Enter actor name"
                  className="w-full sm:w-auto bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-gray-300"
                />                
              </div>
              <div className="mt-2 flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-green-600 py-2 px-6 font-medium text-white shadow-xl transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                >
                  Submit
                </button>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*" // Accepts only image file types
                />
              </div>
            </form>
          </div>

          <div className="mt-2 flex justify-end">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-400 focus:outline-0 focus:ring-1 focus:ring-gray-300 rounded-full px-4 py-1 w-full sm:w-auto"
            />
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b border-gray-300 text-left">
                    #
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left">
                    Countries
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left">
                    Actor Name
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left">
                    Photos
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-red-50">
                  <td className="py-2 px-4 border-b border-gray-300">1</td>
                  <td className="py-2 px-4 border-b border-gray-300">Japan</td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    Takuya Kimura
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <div className="w-16 h-16 bg-gray-300 rounded"></div> {/* Placeholder for photo */}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <a href="#" className="text-red-600 hover:underline">
                      Edit
                    </a>
                    <span className="text-gray-500 px-2">|</span>
                    <a href="#" className="text-red-600 hover:underline">
                      Delete
                    </a>
                  </td>
                </tr>
                {/* You can add more rows here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actors;

