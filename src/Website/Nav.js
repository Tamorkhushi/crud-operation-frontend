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
    <div>
      {/* <img className="logopic" alt="logo" src="https://ishubham21.github.io/myblog/wp-content/uploads/2019/03/sticky-logo-3.png"/> */}
      {auth?<ul className="nav-ul">
    <li>
      <Link to="/">HOME</Link>
    </li>
    <li>
      <Link to="/add">ADD PRODUCTS</Link>
    </li>
    <li>
      <Link to="/update">UPDATE</Link>
    </li>

    {/* <li>
      <Link to="/profile">PROFILE</Link>
    </li> */}
    <li >
    <Link to="/signup" onClick={logout} >LOGOUT 
     {auth?<span style={{color:"white" }} className="welcome">
      Welcome [{(JSON.parse(auth).name)}]</span> :null}</Link>
    </li>
    </ul>:
    <ul className="nav-ul right"><li><Link to="/signup">SIGN UP</Link></li>
    <li className="mar"><Link to="/login">LOGIN</Link></li></ul>
      }
      
    </div>
  );
};
export default Nav;