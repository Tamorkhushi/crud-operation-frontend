import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  useEffect(() => {
                  const auth = localStorage.getItem("user");
                  if (auth) {
                    navigate("/");
                  }
                }, []);

  const handlelogin = async () => {
    console.log(email, password);
    let data =await fetch("http://localhost:6565/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
     data = await data.json();
    console.log(data[0])
    if(data[0].email){
                    localStorage.setItem("user",JSON.stringify(data[0]))
                    navigate("/")

    }else{
                  alert("please enter correct details")
    }
  };
  return (
    <div className="m3">
      <h1>Login </h1>

      <input
        className="inputbox"
        value={email}
        type="text"
        placeholder="Enter E-mail.."
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        className="inputbox"
        value={password}
        type="password"
        placeholder="Enter Password.."
        onChange={(e) => setpassword(e.target.value)}
      />
      <input
        className="bttn"
        type="submit"
        value="sign Up"
        onClick={handlelogin}
      />
    </div>
  );
}