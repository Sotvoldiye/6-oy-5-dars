import { useState } from "react";
import { Contact, Home, About, Product } from "./page";
import { Footers, Main, Navbar } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import { useFetch } from "./hooks/useFetch";
function App() {
  const routs = createBrowserRouter([
   {
    path: "/",
    element: <Layout/>,
    children:[
        { index: true, 
            element: <Home /> },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/product/:id",
            element: <Product />,
          },
    ]
   }
  ]);
  return <RouterProvider router={routs}/>
}

export default App;
