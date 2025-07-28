import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
export default function Navbar() {
  const navigate=useNavigate()
  const { token, handleToken } = useContext(AuthContext);
  return (
    <nav className="bg-gradient-to-r from-gray-400 to-gray-700 shadow-lg p-4 px-15 flex justify-between items-center">
  <h1 
    onClick={() => navigate("/")} 
    className="cursor-pointer text-white text-2xl font-bold hover:text-gray-300 transition-colors">
    Mostafa
  </h1>
  <ul className="flex gap-6 items-center">
    <li>
      <Link 
        to="/" 
        className="text-white hover:text-gray-300 transition-colors">
        Home
      </Link>
    </li>
    <li>
      <Link 
        to="/product" 
        className="text-white hover:text-gray-300 transition-colors">
        Product
      </Link>
    </li>
    {token ? (
      <li>
        <button 
          onClick={() => handleToken(null)} 
          className="cursor-pointer bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors">
          Logout
        </button>
      </li>
    ) : (
      <li>
        <Link 
          to="/auth" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
          Login/Register
        </Link>
      </li>
    )}
  </ul>
</nav>
  );
}
