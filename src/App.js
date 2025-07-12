// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Register from './Component/Register'
// import Login from './Component/Login';
// // import Product from './Component/Product';
// import Home from './Component/Home';
// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <nav className="bg-gray-500 p-6 h-20">
//           <ul className="flex justify-between">
//           <h1 className='text-green-300 text-2xl'>Logo</h1>
//           <div>
//           {/* <li>
//               <Link to="/product" className="text-white text-2xl">Product</Link>
//             </li> */}
//           </div>
//             <div className='flex space-x-6'>
            
//             <li>
//               <Link to="/register" className="text-white text-2xl">Register</Link>
//             </li>
//             <li>
//               <Link to="/login" className="text-white text-2xl">Login</Link>
//             </li>
//             </div>
//           </ul>
//         </nav>

//         <div className="flex-grow">
//           <Routes>
//             <Route path='/' element={<Home/>}/>
//             <Route path="/register" element={<Register/>} />
//             <Route path="/login" element={<Login/>} />
//             {/* <Route path="/product" element={<Product/>}/> */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privatecomponent from "./Website/Privatecomponent";
import Productlist from "./Website/Productlist";
import AddProduct from "./Website/Addproduct";
import Updateproduct from "./Website/Updateproduct";
import Signup from "./Website/Signup";
import Login from "./Website/Login";
import Nav  from "./Website/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Privatecomponent/>}>
          <Route path="/" element={<Productlist/>} />
          <Route path="/add" element={<AddProduct/>} />
          <Route path="/update/:id" element={<Updateproduct/>} />
          <Route path="/profile" element={<h1>profile routes</h1>} />
          <Route path="/logout" element={<h1>logout routes</h1>} />
          </Route>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />


        </Routes>
      </BrowserRouter>
      {/* <Foter/> */}
    </div>
  );
}

export default App;

