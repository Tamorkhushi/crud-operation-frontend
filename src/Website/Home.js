import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center ">
      {/* Title and Subtitle */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">CRUD Operation </h1>
      <p className="text-lg text-gray-600 mb-6">Manage your data efficiently with Create, Read, Update, and Delete actions.</p>

      {/* Image */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
        alt="CRUD Icon"
        className="w-32 h-32 mb-8"
      />

      {/* Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {/* Create Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Create</h2>
          <p className="text-gray-600">Add new records to your database.</p>
        </div>

        {/* Read Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:bg-green-50 transition">
          <h2 className="text-xl font-semibold text-green-600 mb-2">Read</h2>
          <p className="text-gray-600">Browse and view existing records.</p>
        </div>

        {/* Update Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:bg-yellow-50 transition">
          <h2 className="text-xl font-semibold text-yellow-600 mb-2">Update</h2>
          <p className="text-gray-600">Modify existing records as needed.</p>
        </div>

        {/* Delete Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:bg-red-50 transition">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Delete</h2>
          <p className="text-gray-600">Remove records permanently.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
