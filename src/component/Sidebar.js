import React, { useState } from 'react'
const catItems = [
      "office",
      "living room",
      "kitchen",
      "bedroom",
      "dining",
      "kids",
  
];
const color = ["#ff7f7f", "#7fff7f", "#7f7fff", "#7f7f7f", "#ffdc7f"];
export default function 
({handleChange,handleInputChange, query,handleClear }) {
 const [maxPrice, setMaxPrice] = useState(0);

    return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
        value={query}
        className="bg-[#f1f5f8] p-1.5 rounded"
      />
      <div>
        <p className="text-[#cca390]">Category</p>
        <div className="flex flex-col text-[#a6a8ae]">
          <a className="underline cursor-pointer" onClick={handleChange}>
            All
          </a>
          {catItems.map((item) => (
            <a className="cursor-pointer" id={item} onClick={handleChange}>
              {item}
            </a>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[#cca390]">Company</p>
        <select name="company" id="company">
          <option value="all">all</option>
          <option value="marcos">marcos</option>
          <option value="liddy">liddy</option>
          <option value="living room">living room</option>
        </select>
      </div>
      <div>
        <p className="text-[#cca390]">Color</p>
        <div className="flex gap-1">
          <a className="underline cursor-pointer  text-[#a6a8ae]">All</a>

          <div className={`bg-[#ff7f7f] h-7 w-7 rounded-full cursor-pointer`}>
            {" "}
          </div>
          <div className={`bg-[#7fff7f] h-7 w-7 rounded-full cursor-pointer`}>
            {" "}
          </div>
          <div className={`bg-[#7f7fff] h-7 w-7 rounded-full cursor-pointer`}>
            {" "}
          </div>
          <div className={`bg-[#7f7f7f] h-7 w-7 rounded-full cursor-pointer`}>
            {" "}
          </div>
          <div className={`bg-[#ffdc7f] h-7 w-7 rounded-full cursor-pointer`}>
            {" "}
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#cca390]">Price</p>
        <p className="text-link">${maxPrice}</p>
        <input type="range" min={0} max={3000} onChange={(e)=>setMaxPrice(e.target.value)}/>
      </div>
      <div className="flex justify-between items-center">
        <label>Free Shipping</label>
        <input type="checkbox" />
      </div>
      <button className="bg-[#bb2525] text-[#fff] px-4 py-2 rounded mt-5" onClick={handleClear}>
        Clear filter
      </button>
    </div>
  );
}
