


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const [error, seterror] = useState(false);

  const navigate = useNavigate();

  const addproduct = async () => {
    if (!name || !price || !category || !company) {
      seterror(true);
      return;
    }

    const user_id = JSON.parse(localStorage.getItem("user"))._id;

    const response = await fetch("http://localhost:6565/add-product", {
      method: "POST",
      body: JSON.stringify({ name, price, category, company, user_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.warn(result);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex items-center justify-center px-4 py-10">
      {/* Card */}
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        {/* Title */}
        <h1 className="text-3xl font-bold text-[#1E293B] mb-6 text-center">
          Add New Product
        </h1>

        {/* Form Fields */}
        <div className="space-y-5">
          {/* Product Name */}
          <div>
            <input
              type="text"
              placeholder="Product Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition"
              onChange={(e) => setname(e.target.value)}
            />
            {error && !name && (
              <p className="text-red-500 text-sm mt-1">* Enter valid name</p>
            )}
          </div>

          {/* Product Price */}
          <div>
            <input
              type="text"
              placeholder="Product Price"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition"
              onChange={(e) => setprice(e.target.value)}
            />
            {error && !price && (
              <p className="text-red-500 text-sm mt-1">* Enter valid price</p>
            )}
          </div>

          {/* Product Category */}
          <div>
            <input
              type="text"
              placeholder="Product Category"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition"
              onChange={(e) => setcategory(e.target.value)}
            />
            {error && !category && (
              <p className="text-red-500 text-sm mt-1">* Enter valid category</p>
            )}
          </div>

          {/* Product Company */}
          <div>
            <input
              type="text"
              placeholder="Product Company"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition"
              onChange={(e) => setcompany(e.target.value)}
            />
            {error && !company && (
              <p className="text-red-500 text-sm mt-1">* Enter valid company</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={addproduct}
            className="w-full bg-[#0D9488] text-white py-3 rounded-lg font-semibold hover:bg-[#0F766E] transition duration-200 shadow-md"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
