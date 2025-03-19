import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex justify-between mx-4 border-b border-b-gray-300 items-center'>
      <div className="italic font-bold text-2xl text-red-300">
        <Link to="./">OnlineMarket</Link>
      </div>
        <div className="text-red-300 flex itmes-center gap-2">
        <Link to="./">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        </div>
    </div>
  )
}

export default Navbar