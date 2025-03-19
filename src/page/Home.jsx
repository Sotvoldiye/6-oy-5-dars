import React, { useState } from "react";
import { data, Link } from "react-router-dom";
import Product from "./Product";
import { useFetch } from "../hooks/useFetch";
function Home() {
  const [ limit, setLimit]= useState(30)
  const {
     data,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/product?limit="+ limit);
  console.log(data)
  const changeLimit = ()=>{
    const maxLimit = 194;
    const minLimit = 30

    if(limit < maxLimit){
     if(limit == 180){
      setLimit((prev)=>prev + 14)
     } else{
      setLimit((prev)=>prev + 30)
     }
    }
  }
  return <section>
    {data && (
     <>
      <ul className="flex flex-wrap gap-3 itmes-center justify-center mt-5">
        {data.products.map((product)=>{
          return(
            <li key={product.id} className="bg-gray-300 ">
              <Link to={`/product/${product.id}`}>
                  <img src={product.thumbnail} alt={product.thumbnail} />
                 <div className="p-4">
                 <b>{product.brand}</b>
                  <h2>{product.title}</h2>
                <div className="flex gap-2">
                <del className="p2 px-2  bg-red-400 text-white">${product.price}</del>
                <p className="p2 px-2  bg-blue-400 text-white">${product.price - ((product.price / 100) * product.discountPercentage ).toFixed()}</p>
                </div>
                 </div>
                  </Link>
            </li>
          )
        })}
      </ul>
      <div className="flex justify-end itmes-center mr-14 my-3">
      <button className="p-2 bg-green-200 px-6" onClick={()=> changeLimit()}>Load More</button>
      </div>
      </>
    )}
  </section>
}



export default Home;
