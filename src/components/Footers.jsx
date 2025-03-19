import React from 'react'
import { Link } from 'react-router-dom'
function Footers() {
  return (
    <div className=' bg-gray-300 mt-auto'>
<div className='flex justify-between px-4 items-center'>
      <div className="italic font-bold text-2xl text-red-300 pt-4">
       <Link to="./">OnlineMarket</Link>
      </div>
        <div className="text-red-400 flex itmes-center gap-2">
        <Link to="./">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
        </div>
      <h1 className='flex justify-end items-center pb-7 pr-3'>By <span className='underline'> Sotvoldiye</span></h1>
        </div>
  
  )
}

export default Footers