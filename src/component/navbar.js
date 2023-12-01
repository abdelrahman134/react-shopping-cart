import React from 'react'
import logo from '../assets/logo-black.svg';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const {products}=useSelector(state=>state.orebiReducer)
  const total= products.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <div className="text-link flex w-full justify-around items-center p-3">
      <div className="w-20">
        <img src={logo} />
      </div>
      <div className="flex justify-center items-center gap-3">
        <p>Home</p>
        <p>About</p>
        <p>Product</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div className="flex justify-center items-center gap-1">
          <p>Cart</p>

          <Link to="checkout">
            <div className="relative">
              <FaShoppingCart />
              <span className="absolute bottom-2.5 left-3 bg-[#ab7a5f] rounded-full px-1 text-[#fff]">
                {total}
              </span>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-1">
          <p>Login</p>
          <FaUserPlus />
        </div>
      </div>
    </div>
  );
}
