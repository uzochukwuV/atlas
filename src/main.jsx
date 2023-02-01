import * as React from "react";
import * as ReactDOM from "react-dom";
import createRoot from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home"
import Root from "./components/root"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    
    children: [
      {
        path: "",
        element: <Home />,
       
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);