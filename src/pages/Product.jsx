import React, { useEffect, useState } from 'react'
import Banner from '../component/banner'
import Sidebar from '../component/Sidebar'
import axios from "axios"
import Cards from '../component/Cards'
import Sort from '../component/Sort'
export default function Product() {
  const [data,setData]=useState([])
const [selectedCategory, setSelectedCategory] = useState("all");
const [query, setQuery] = useState("");
 const [sort ,setSort]=useState("asc")

  const [filterData, setFilterData] = useState([]);
const handleInputChange = (event) => {
  setQuery(event.target.value);
  
 
};
const handleClear=()=>{
  setFilterData(data)
  setSelectedCategory("All")
  setQuery("")

}
// const selected="all"
// const filteredItems = data.filter(
//   (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
// );
const filterFun = () => {
  console.log("object :>> ");
 
  console.log(data);
  let input = data.filter((item) => {
    // return item["name"].toLowerCase().indexOf(query.toLowerCase()) !== -1;
return item["name"].toLowerCase().includes(query);
  });
  console.log('object :>> ');
  console.log(input);

  if (input.length === 0) {
    input = data.filter((item) => {
      console.log(item.category, selectedCategory);
      if (selectedCategory == "all" || selectedCategory == false) {
        return item;
      } else {
        
        return selectedCategory === item.category;
      }
    });
  } else {
    input = input.filter((item) => {
      if (selectedCategory == "all" || selectedCategory == false) {
        return item;
      } else {
        if (selectedCategory!=null ||selectedCategory!=false){
         return selectedCategory === item.category;
        } 
      }
    });
  }

  if (input.length === 0) {
    if (sort == "asc") {
      input = data.sort((a, b) => a.price - b.price);
    } else {
      input = data.sort((a, b) => b.price - a.price);
    }
  } else {
    if (sort == "asc") {
      input = input.sort((a, b) => a.price - b.price);
    } else {
      input = input.sort((a, b) => b.price - a.price);
    }
  }

  setFilterData( input);
};
  console.log(filterData);
const handleChange = (e) => {
  
  setSelectedCategory(e.target.id);
   
 
  
};
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
    }


    fetchData();
    //  filterFun();
   
  }, [query,selectedCategory,sort]);
  
  const handleSort=(e)=>{setSort(e.target.value)
   }

   let filteredData = data
   if(query) filteredData = filteredData.filter((ele) =>
     ele?.name?.toLowerCase()?.includes(query) 
   );
   if(sort =="asc"){
    filteredData = filteredData.sort((a,b)=>a.price - b.price)
   }else{
    filteredData = filteredData.sort((b, a) => a.price - b.price);
   } 

   if(selectedCategory && selectedCategory != "all") filteredData = filteredData.filter((ele)=>ele.category == selectedCategory)

  return (
    <div>
      <Banner path={["Home", "Products"]} />
      <div className="flex justify-center mt-10 gap-5">
        <Sidebar
          handleChange={handleChange}
          query={query}
          handleInputChange={handleInputChange}
          handleClear={handleClear}
        />
        <div className="flex flex-col  gap-5">
          <Sort
            // data={filterData == false ? data : filterData}
            data={filteredData}
            handleSort={handleSort}
          />
          {/* <Cards data={filterData == false ? data : filterData} /> */}
          <Cards data={filteredData} />
        </div>
      </div>
    </div>
  );
}
