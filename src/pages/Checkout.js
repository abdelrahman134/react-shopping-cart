import React from 'react'
import Banner from '../component/banner';

import CheckItem from '../component/CheckItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetCart } from '../redux/storeslice';
export default function Checkout() {
   const { products } = useSelector((state) => state.orebiReducer);
const dispatch =useDispatch() 
const total = products.reduce((total,next)=>total+next.quantity*next.price,0)
const delivery =5.34
  return (
    <div className="h-screen  text-[#102a42]">
      <Banner path={["Home","Cart"]}/>
      <div className="flex flex-col justify-center px-20">
        <table class="table-auto">
          <thead className="px-5">
            <tr>
              <th className="py-5 px-20">Item</th>
              <th className="py-5 px-20">Price</th>
              <th className="py-5 px-20">Quantity</th>
              <th className="py-5 px-20">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((item) => (
              <CheckItem
                img={item.image}
                id={item._id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                color={item.color}
              />
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-7">
          <Link to="/">
            <button className="mb-5 text-[#fff] bg-[#ab7a5f] px-2 py-1 w-40">
              Continue Shopping
            </button>
          </Link>
          <button
            className="mb-5 text-[#fff] bg-[rgb(0,0,0)] px-2 py-1 w-40"
            onClick={() => dispatch(resetCart())}
          >
            Clear Shopping Cart
          </button>
        </div>
        <div className="flex flex-row-reverse">
          <div className="border p-4 w-64 font-bold text-center ">
            <div className="flex ">
              <p>Subtotal : </p>
              <p>
                $<span>{total}</span>
              </p>
            </div>
            <div className="flex">
              <p>Shipping fee : </p>
              <p>
                $<span>{delivery}</span>
              </p>
            </div>
            <span></span>
            <div className="flex items-center pt-4">
              <p className="text-2xl">Order Total : </p>
              <p>
                $<span>{delivery+total}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
