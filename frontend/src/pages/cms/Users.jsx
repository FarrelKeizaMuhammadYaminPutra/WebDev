import React from "react";

const Users = () => {
  return (
    <div className="px-4 flex flex-col justify-start items-center bg-gray-100 min-h-screen w-full ">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full mx-4 sm:mx-6 lg:mx-auto my-4">
        <div className="p-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 ">Page Users</h2>
          </div>
          <div>
            <h1 className="text-gray-500 font-semibold text-lg mt-4">
              Insert Users
            </h1>
            <div className="flex space-x-4 items-center">
              <input
                type="text"
                placeholder="Enter username"
                className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-gray-300"
              ></input>
              <input
                type="text"
                placeholder="Enter email"
                className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-gray-300"
              ></input>
              <button>
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-green-600 py-2 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-100/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                  href="#"
                >
                  Submit
                </a>
              </button>
            </div>
          </div>

          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b border-gray-300 text-left">
                      #
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">
                      Username
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">
                      Email
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-red-50">
                    <td className="py-2 px-4 border-b border-gray-300">1</td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      Farrel
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      farrel.keiza@gmail.com
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      <a href="#" className="text-red-600 hover:underline mr-2">
                        Send first email
                      </a>
                      <span className="text-gray-500">|</span>
                      <a href="#" className="text-red-600 hover:underline mx-2">
                        Edit
                      </a>
                      <span className="text-gray-500">|</span>
                      <a href="#" className="text-red-600 hover:underline ml-2">
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">2</td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      Naila
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      naila@gmail.com
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      <a href="#" className="text-red-600 hover:underline mr-2">
                        Send first email
                      </a>
                      <span className="text-gray-500">|</span>
                      <a href="#" className="text-red-600 hover:underline mx-2">
                        Edit
                      </a>
                      <span className="text-gray-500">|</span>
                      <a href="#" className="text-red-600 hover:underline ml-2">
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
