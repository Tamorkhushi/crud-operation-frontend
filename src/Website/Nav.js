// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Nav = () => {
//   const auth = localStorage.getItem("user");
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.clear();
//     navigate("/signup");
//   };

//   return (
//     <div>
//       {/* <img className="logopic" alt="logo" src="https://ishubham21.github.io/myblog/wp-content/uploads/2019/03/sticky-logo-3.png"/> */}
//       {auth?<ul className="nav-ul">
//     <li>
//       <Link to="/">HOME</Link>
//     </li>
//     <li>
//       <Link to="/add">ADD PRODUCTS</Link>
//     </li>
//     <li>
//       <Link to="/update">UPDATE</Link>
//     </li>

//     {/* <li>
//       <Link to="/profile">PROFILE</Link>
//     </li> */}
//     <li >
//     <Link to="/signup" onClick={logout} >LOGOUT 
//      {auth?<span style={{color:"white" }} className="welcome">
//       Welcome [{(JSON.parse(auth).name)}]</span> :null}</Link>
//     </li>
//     </ul>:
//     <ul className="nav-ul right"><li><Link to="/signup">SIGN UP</Link></li>
//     <li className="mar"><Link to="/login">LOGIN</Link></li></ul>
//       }
      
//     </div>
//   );
// };
// export default Nav;










import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <nav className="bg-green-900 text-white shadow-md w-full h-16">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or App Title */}
        <div className="text-2xl font-bold">
          <Link to="/">CRUD App</Link>
        </div>

        {/* Navigation Links */}
        {auth ? (
          <ul className="flex gap-6 items-center">
            <li>
              <Link to="/" className="hover:text-gray-200 transition">HOME</Link>
            </li>
            <li>
              <Link to="/add" className="hover:text-gray-200 transition">ADD PRODUCTS</Link>
            </li>
            <li>
              <Link to="/update" className="hover:text-gray-200 transition">UPDATE</Link>
            </li>
            <li>
              <button 
                onClick={logout} 
                className="hover:text-red-300 transition"
              >
                LOGOUT
              </button>
              {auth && (
                <span className="ml-2 text-sm text-white italic">
                  Welcome [{JSON.parse(auth).name}]
                </span>
              )}
            </li>
          </ul>
        ) : (
          <ul className="flex gap-4 items-center">
            <li>
              <Link to="/signup" className="hover:text-gray-200 transition">SIGN UP</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-200 transition">LOGIN</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
