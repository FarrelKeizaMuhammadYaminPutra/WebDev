import React from "react";

const Comments = () => {
  return (
    <div className="px-4 flex flex-col justify-start items-center bg-gray-100 min-h-screen w-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full mx-4 sm:mx-6 lg:max-w-6xl lg:mx-auto my-4">
        <div className="overflow-x-auto p-4">
        <div className="mb-2">
            <h2 className="text-2xl font-bold text-gray-800 ">Page Comments</h2>
          </div>
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

          <table className="min-w-full bg-white border border-gray-300 text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border-b border-gray-300 text-left">
                  Username
                </th>
                <th className="px-4 py-2 border-b border-gray-300 text-left">
                  Rate
                </th>
                <th className="px-4 py-2 border-b border-gray-300 text-left">
                  Drama
                </th>
                <th className="px-4 py-2 border-b border-gray-300 text-left">
                  Comments
                </th>
                <th className="px-4 py-2 border-b border-gray-300 text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-red-50">
                <td className="px-4 py-2 border-b border-gray-300">
                  <input type="checkbox" /> Nara
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <span className="text-red-600">★★★★★</span>
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  [2024] Japan - Eye Love You
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  I love this drama. It taught me a lot about money and finance.
                  Love is not everything. We need to face the reality too. Being
                  stoic is the best.
                  <br />
                  <br />
                  What the most thing that I love is about the kindness. Having
                  money is perfect.
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-red-600">
                  Unapproved
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300">
                  <input type="checkbox" /> Luffy
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <span className="text-red-600">★★</span>
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  [2024] Japan - Eye Love You
                </td>
                <td className="px-4 py-2 border-b border-gray-300">Meh</td>
                <td className="px-4 py-2 border-b border-gray-300 text-green-600">
                  Approved
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
            <div>
              <a href="#" className="text-red-600 hover:underline">
                Select All
              </a>
            </div>
            <div className="flex space-x-2">
              <button>
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-green-600 py-2 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-100/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                  href="#"
                >
                  Approved
                </a>
              </button>
              <button>
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 py-2 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-100/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                  href="#"
                >
                  Submit
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
