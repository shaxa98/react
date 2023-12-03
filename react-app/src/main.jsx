import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CarsPage from "./pages/Cars";
import AnimalPage from "./pages/Animal";
import SkyPage from "./pages/sky";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/car",
    element: <CarsPage />,
  },
  {
    path: "/sky",
    element: <SkyPage />,
  },
  {
    path: "/animal",
    element: <AnimalPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerConfig} />
  </React.StrictMode>
);
