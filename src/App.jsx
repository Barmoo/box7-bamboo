import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import AboutProduct from "./pages/home/sections/AboutProduct";
import AboutInnovator from "./pages/home/sections/AboutInnovator";
import Showcase from "./pages/home/sections/Showcase";
import Contact from "./pages/home/sections/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <Home /> },
      {path: "/product",
      element: <AboutProduct/>,},
      {path: "/innovator",
      element: <AboutInnovator/>,},
      {path: "/products",
      element: <Showcase/>,},
      {path: "/contact",
      element: <Contact/>,},
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
