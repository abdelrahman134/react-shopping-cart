import React from 'react'

export default function Banner({path}) {
const last = path[path?.length - 1];
const newArray = path.slice(0, path.length - 1);
const str=newArray.join("/")
  return (
    <div className="bg-banner h-36 relative w-full">
      <h2 className="text-bannerText absolute top-12 left-64 text-2xl font-bold">
        <span className="text-bannerHead ">{str}</span>/{last}
      </h2>
    </div>
  );
}
