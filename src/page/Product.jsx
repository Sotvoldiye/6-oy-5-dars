import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { OrbitProgress } from 'react-loading-indicators'

function Product() {
    const {id} = useParams()
    const {data:product, isPending, error} =useFetch(
        "https://dummyjson.com/product/"+ id
    )
    
    const review = product?.reviews || [] 
 
    return <section>
        {isPending && <div className='flex items-center justify-center  h-[100vh]'><OrbitProgress color="#a4a4a4" size="medium" text="" textColor=""/>
       
</div>}
        <div>
  {product && (
 <div className="flex justify-around gap-0 w-full mb-6 mt-10">
 <div className="flex-1 pl-4 flex flex-col  justify-center ml-10">
   <h1 className="text-4xl font-bold">{product.title}</h1>
   <p className="max-w-[50%] text-gray-700">{product.description}</p>
   <img src={product.thumbnail} alt={product.title} className="rounded-lg shadow-md w-80" />
   
   <div className="flex gap-2 mt-4">
     <del className="py-1 px-2 bg-red-400 text-white rounded-md">${product.price}</del>
     <p className="py-1 px-2 bg-blue-400 text-white rounded-md">
       ${product.price - ((product.price / 100) * product.discountPercentage).toFixed()}
     </p>
   </div>
 </div>

 <div className="flex-1 flex flex-col gap-4 max-w-lg mr-10">
    <h1 className='text-2xl'>Comments</h1>
   {review?.map((element, index) => (
     <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md space-y-2">
       <h2 className="text-lg font-semibold">{element.reviewerName}</h2>
       <h3 className="text-sm text-gray-600">{element.date}</h3>
       <p className="text-gray-800">{element.comment}</p>
       <p className="text-yellow-500 font-bold">⭐ {element.rating}</p>
     </div>
   ))}
 </div>
</div>

  )}
</div>

    </section>
}

export default Product