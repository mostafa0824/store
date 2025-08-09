import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/slices/Auth";
import { BsCart } from "react-icons/bs";
export default function Navbar() {
  const navigate=useNavigate()
  const { token } = useSelector(store=>store.auth);
  const cartQuantity=useSelector(state=>state.cart.items)?.length
  const dispatch=useDispatch()
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
          onClick={() => dispatch(logout())} 
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
    <li className="relative">
      <BsCart onClick={()=>navigate('/cart')} className=" text-white text-[32px] cursor-pointer"/>
      {cartQuantity>0 &&(
       <span className="absolute flex items-center justify-center w-4 h-4 top-1 left-2.5 text-white bg-red-400 rounded-full">{cartQuantity}</span>
      )}
      
    </li>
  </ul>
</nav>
  );
}
