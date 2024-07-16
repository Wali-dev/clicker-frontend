import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import AddLinksPage from "./Components/user/pages/addLinksPage/AddLinksPage";
import Layout from "./Components/user/layout/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/links",
        element: <AddLinksPage />
      },
      {
        path: "/appearance",
        element: <div>THis is the apperance</div>
      },
      {
        path: "/analytics",
        element: <div>THis is the Analytics</div>
      },
      {
        path: "/setting",
        element: <div>THis is the setting</div>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

