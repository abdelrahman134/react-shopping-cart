import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({img,id,name,price,}) {
// console.log(img);
const number = parseInt(price);
const formattedNumber = (number / 100).toFixed(2);
    return (
      <div id={id} className="flex flex-col gap-2">
        <Link to={`product/${id}`}>
          <img src={img}  className="w-64 h-56" />
        </Link>
        <div className="flex justify-between">
          <p className="text-[#122c43]">{name}</p>
          <p className="text-[#e8cfac]">${formattedNumber}</p>
        </div>
      </div>
    );
}
