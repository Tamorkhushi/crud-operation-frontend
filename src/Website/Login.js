





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handlelogin = async () => {
    try {
      let data = await fetch("http://localhost:6565/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      data = await data.json();

      if (data[0]?.email) {
        localStorage.setItem("user", JSON.stringify(data[0]));
        navigate("/");
      } else {
        alert("Please enter correct details");
      }
    } catch (err) {
      alert("Server not responding");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      {/* Login Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-green-600 mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Log in to manage your CRUD operations.
        </p>

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
          onClick={handlelogin}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}

