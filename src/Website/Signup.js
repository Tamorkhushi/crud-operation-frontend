// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// export default function Signup() {
//   const [name, setname] = useState();
//   const [email, setemail] = useState();
//   const [password, setpassword] = useState();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const auth = localStorage.getItem("user");
//     if (auth) {
//       navigate("/");
//     }
//   }, []);

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
//     <div className="m3">
//       <h1>sign up</h1>
//       <input
//         className="inputbox"
//         value={name}
//         type="text"
//         placeholder="Enter Name.."
//         onChange={(e) => setname(e.target.value)}
//       />
//       <input
//         className="inputbox"
//         value={email}
//         type="text"
//         placeholder="Enter E-mail.."
//         onChange={(e) => setemail(e.target.value)}
//       />
//       <input
//         className="inputbox"
//         value={password}
//         type="password"
//         placeholder="Enter Password.."
//         onChange={(e) => setpassword(e.target.value)}
//       />
//       <input className="bttn" type="submit" value="sign Up" onClick={collect} />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const collect = async () => {
    console.log(name, email, password);
    const result = await fetch("http://localhost:6565/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await result.json();
    console.warn(data);
    localStorage.setItem("user", JSON.stringify(data));
    if (data) {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-300 ">
      <div className="bg-white p-8 rounded-lg h-[30rem] w-full max-w-sm ">
        <h1 className="text-2xl font-semibold mb-6 text-center">Sign Up</h1>
        <input
          className="w-full p-3  border-b  border-gray-500 outline-none rounded mb-4 "
          value={name}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setname(e.target.value)}
        />
        <input
          className="w-full p-3  border-b  border-gray-500 outline-none rounded mb-4 "
          value={email}
          type="text"
          placeholder="Enter E-mail"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          className="w-full p-3  border-b  border-gray-500 outline-none rounded mb-4 "
          value={password}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
          className="mt-5 w-full py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          onClick={collect}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
