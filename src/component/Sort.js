import React from 'react'
import { LuCodesandbox } from "react-icons/lu";
import { HiBars4 } from "react-icons/hi2";

export default function Sort({data, handleSort}) {
  return (
    <div className="flex items-center gap-4 text-[#112a42]">
      <div className="text-2xl flex gap-1">
        <LuCodesandbox />
        <HiBars4 className="border p-0.5 rounded" />
      </div>
      <div className="m1-3">
        <p>
          <span>{data?.length}</span> Products
        </p>
        <p>Found</p>
      </div>
      <div className="ml-8 h-px w-1/2 bg-[rgb(0,0,0,0.2)]"></div>
      <div className="flex m1-7">
        <p className="font-bold">Sort By</p>
        <select name="company" onChange={handleSort} id="company">
          <option value="asc" >
            Price (Lowest)
          </option>
          <option value="dsc">
            Price (Highest)
          </option>
        </select>
      </div>
    </div>
  );
}
