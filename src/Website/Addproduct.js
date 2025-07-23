// import React, { useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";

// export default function AddProduct() {
//   const [name, setname] = useState("");
//   const [price, setprice] = useState("");
//   const [category, setcategory] = useState("");
//   const [company, setcompany] = useState("");
//   const [error, seterror] = useState(false);

//   const navigate = useNavigate();

//   const addproduct = async () => {
//     console.warn(!name);
//     if (!name || !price || !category || !company) {
//       seterror(true);
//       return false;
//     }

//     console.log(name, price, category, company);
//     const user_id = JSON.parse(localStorage.getItem("user"))._id;
//     console.log(user_id);
//     let data = await fetch("http://localhost:6565/add-product", {
//       method: "post",
//       body: JSON.stringify({ name, price, category, company, user_id }).toLowerCase(),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     let result = await data.json();
//     console.warn(result);
//     //  alert("new record created")
//     navigate("/");
//   };

//   return (
//     <div className="outer">
//     <h1 className="text-[30px] ml-[10rem] mt-[2rem]">Add product</h1>
//     <div className="ml">
//       <input
//         className="inputbox"
//         type="text"
//         placeholder="Enter product Name..."
//         onChange={(e) => {
//           setname(e.target.value);
//         }}
//       />
//       {error && !name && (
//         <span className="invalid-input">Enter valid name **</span>
//       )}
//       <input
//         className="inputbox"
//         type="text"
//         placeholder="Enter product Price..."
//         onChange={(e) => {
//           setprice(e.target.value);
//         }}
//       />
//       {error && !price && (
//         <span className="invalid-input">Enter valid price **</span>
//       )}

//       <input
//         className="inputbox"
//         type="text"
//         placeholder="Enter product Category..."
//         onChange={(e) => {
//           setcategory(e.target.value);
//         }}
//       />
//       {error && !category && (
//         <span className="invalid-input">Enter valid name **</span>
//       )}

//       <input
//         className="inputbox"
//         type="text"
//         placeholder="Enter product Company..."
//         onChange={(e) => {
//           setcompany(e.target.value);
//         }}
//       />
//       {error && !company && (
//         <span className="invalid-input">Enter valid name **</span>
//       )}

//       <button className="addbtn" onClick={addproduct}>
//         Add Product
//       </button>
//     </div>
//     </div>
//   );
// }





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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Add Product</h1>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter Product Name..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setname(e.target.value)}
            />
            {error && !name && (
              <p className="text-red-500 text-sm mt-1">* Enter valid name</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter Product Price..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setprice(e.target.value)}
            />
            {error && !price && (
              <p className="text-red-500 text-sm mt-1">* Enter valid price</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter Product Category..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setcategory(e.target.value)}
            />
            {error && !category && (
              <p className="text-red-500 text-sm mt-1">* Enter valid category</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter Product Company..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setcompany(e.target.value)}
            />
            {error && !company && (
              <p className="text-red-500 text-sm mt-1">* Enter valid company</p>
            )}
          </div>

          <button
            onClick={addproduct}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
