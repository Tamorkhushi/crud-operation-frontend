



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const auth = localStorage.getItem("user");
//     if (auth) {
//       navigate("/");
//     }
//   }, [navigate]);

//   const collect = async () => {
//     console.log(name, email, password);
//     const result = await fetch("http://localhost:6565/register", {
//       method: "post",
//       body: JSON.stringify({ name, email, password }),
//       headers: {
//         "content-type": "application/json",
//       },
//     });
//     const data = await result.json();
//     console.warn(data);
//     localStorage.setItem("user", JSON.stringify(data));
//     if (data) {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
//       <div className="backdrop-blur-xl bg-white/20 shadow-2xl p-8 rounded-2xl w-full max-w-sm border border-white/30">
//         <h1 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-lg">
//           Create Account
//         </h1>

//         {/* Name Input */}
//         <input
//           className="w-full p-3 bg-white/20 text-white placeholder-white border-b-2 border-white/50 outline-none rounded mb-5 focus:border-white focus:bg-white/30 transition-all"
//           value={name}
//           type="text"
//           placeholder="Enter Name"
//           onChange={(e) => setname(e.target.value)}
//         />

//         {/* Email Input */}
//         <input
//           className="w-full p-3 bg-white/20 text-white placeholder-white border-b-2 border-white/50 outline-none rounded mb-5 focus:border-white focus:bg-white/30 transition-all"
//           value={email}
//           type="text"
//           placeholder="Enter E-mail"
//           onChange={(e) => setemail(e.target.value)}
//         />

//         {/* Password Input */}
//         <input
//           className="w-full p-3 bg-white/20 text-white placeholder-white border-b-2 border-white/50 outline-none rounded mb-5 focus:border-white focus:bg-white/30 transition-all"
//           value={password}
//           type="password"
//           placeholder="Enter Password"
//           onChange={(e) => setpassword(e.target.value)}
//         />

//         {/* Button */}
//         <button
//           className="mt-5 w-full py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white shadow-xl transition-all duration-300"
//           onClick={collect}
//         >
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const collect = async () => {
    try {
      const result = await fetch("http://localhost:6565/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await result.json();
      localStorage.setItem("user", JSON.stringify(data));
      if (data) {
        navigate("/");
      }
    } catch (err) {
      alert("Failed to connect to server");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      {/* Signup Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-green-600 mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Sign up to manage your CRUD operations easily.
        </p>

        {/* Name Input */}
        <input
          className="w-full p-3 mb-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-200"
          value={name}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setname(e.target.value)}
        />

        {/* Email Input */}
        <input
          className="w-full p-3 mb-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200"
          value={email}
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setemail(e.target.value)}
        />

        {/* Password Input */}
        <input
          className="w-full p-3 mb-6 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-200"
          value={password}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setpassword(e.target.value)}
        />

        {/* Submit Button */}
        <button
          onClick={collect}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

