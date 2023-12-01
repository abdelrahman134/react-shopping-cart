import React, { useEffect, useState } from 'react'
import Banner from '../component/banner'
import { FaPlus } from "react-icons/fa";

import { FaMinus } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

import { FaStarHalf } from "react-icons/fa";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/storeslice';

export default function ProductDetail() {
   const {id}=useParams()
   const dispatch=useDispatch()
   const [data,setData]=useState([])
const [counter,setCounter]=useState(1)
const [color, setColor] = useState("#000000");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://course-api.com/react-store-products"
        );
        const data = response.data;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  
  },[] );
const item=data.find(cat=>cat.id==id)
   const number = parseInt(item?.price);
   const formattedNumber = (number / 100).toFixed(2);
const handleChange=()=>{
  dispatch(
    addToCart({
      _id: item.id,
      name: item.name,
      quantity: counter,
      image: item.image,
      
      price: formattedNumber,
      colors: color,
    })
  );
  setCounter(1)
}
const handleColor=(e)=>{
setColor(e.target.value)
}
  return (
    <div>
      <Banner path={["Home","Products",item?.name]}/>
      <div className="px-32 py-10 flex  justify-center gap-5">
        <div className="flex-1">
          <Link to="/">
            <button className="mb-5 text-[#fff] bg-[#ab7a5f] px-2 py-1 ">
              BACK TO PRODUCTS
            </button>
          </Link>
          <img src={item?.image} />
          <div className="grid grid-cols-5 gap-2">
            <img src={item?.image} /> <img src={item?.image} />{" "}
            <img src={item?.image} /> <img src={item?.image} />
            <img src={item?.image} />
          </div>
        </div>
        <div className="flex-1 mt-4">
          <p className="text-3xl text-[#102a42] font-bold">{item?.name}</p>
          <div className="flex items-center text-[#ffbd10]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
            <span className="text-[#72869a]">(33 customer reviews)</span>
          </div>
          <p className="text-[#cfa482]">${formattedNumber}</p>

          <div className="flex flex-col gap-5  text-[#102a42]">
            <p className="mt-5 text-[#102a42]">{item?.description}</p>
            <div className="flex">
              <p className="font-bold">Avaioable :</p>
              <p className="ml-6">In Stock</p>
            </div>
            <div className="flex">
              <p className="font-bold">SKU :</p>
              <p className="ml-16">Recd1jiVIEChmiwhe</p>
            </div>
            <div className="flex">
              <p className="font-bold">Brand :</p>
              <p className="ml-14">{item?.company}</p>
            </div>
            <div className="flex items-center gap-4">
              <p>Colors :</p>
              <div className="flex gap-2">
                <div
                  className="rounded-full h-8 w-8 bg-[#92a5c7] cursor-pointer"
                  id="#92a5c7"
                  onClick={handleColor}
                ></div>
                <div
                  className="rounded-full h-8 w-8 bg-[#b7ebff] cursor-pointer"
                  id="#b7ebff"
                  onClick={handleColor}
                ></div>
                <div
                  className="rounded-full h-8 w-8 bg-[#000000] cursor-pointer"
                  id="#000000"
                  onClick={handleColor}
                ></div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-3xl">
              <FaPlus
                className="cursor-pointer"
                onClick={() => setCounter((prev) => prev + 1)}
              />
              <p>{counter}</p>
              <FaMinus
                className="cursor-pointer"
                onClick={() => setCounter((prev) => (prev == 1 ? 1 : prev - 1))}
              />
            </div>
            <button
              className="mb-5 text-[#fff] bg-[#ab7a5f] px-2 py-1 w-40"
              onClick={() => handleChange()}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
