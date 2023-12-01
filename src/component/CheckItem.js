import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteItem, drecreaseQuantity, increaseQuantity } from '../redux/storeslice';
export default function CheckItem({ color,img,name,quantity,price,id}) {
    const [counter ,setCounter]=useState(quantity)
    const dispatch =useDispatch()
    const subtotal=price*quantity

  return (
    <tr>
      <td className="py-3 px-20">
        <div className="flex gap-1 items-center">
          <img src={img} className="h-24 w-24" />
          <div>
            <p>{name}</p>
            <div>
              {" "}
              <p>Color: </p>
              <div className={`h-4 bg-[${color}] rounded-full`}></div>
            </div>
          </div>
        </div>
      </td>
      <td className="py-3 px-20">{price}</td>
      <td className="py-3 px-20">
        {" "}
        <div className="flex items-center gap-2 text-3xl">
          <FaPlus
            className="cursor-pointer"
            onClick={() => dispatch(increaseQuantity({ _id: id }))}
          />
          <p>{quantity}</p>
          <FaMinus
            className="cursor-pointer"
            onClick={() => dispatch(drecreaseQuantity({ _id: id }))}
          />
        </div>
      </td>
      <td className="py-3 px-20">
        {" "}
        <div className="flex items-center   justify-between">
          <p>${subtotal}</p>
          <div className="bg-[#bb2525] p-2 text-[#fff] cursor-pointer">
            <FaRegTrashAlt onClick={() => dispatch(deleteItem(id))} />
          </div>
        </div>
      </td>
    </tr>
  );
}
