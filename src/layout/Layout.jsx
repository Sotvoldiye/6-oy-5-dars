import React from 'react'
import { Footers, Navbar } from '../components'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
   <>
   <Navbar/>
   <main>
    <Outlet/>
   </main>
   <Footers/>
   </>
  )
}

export default Layout