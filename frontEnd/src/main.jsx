// import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import AddLinksPage from "./Components/user/pages/addLinksPage/AddLinksPage";
import Layout from "./Components/user/layout/Layout";
import ArchivedLinks from "./Components/user/pages/archivedPage/ArchivedLinks";
import PublicPage from "./Components/public/PublicPage";


const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Layout />,
    _children: [
      {
        path: "links",
        element: <AddLinksPage />
      },
      {
        path: "appearance",
        element: <div>THis is the apperance</div>
      },
      {
        path: "analytics",
        element: <div>THis is the Analytics</div>
      },
      {
        path: "setting",
        element: <div>THis is the setting</div>
      },
      {
        path: "archived",
        element: <ArchivedLinks />
      },
    ],
    get children() {
      return this._children;
    },
    set children(value) {
      this._children = value;
    },
  },
  {
    path: '/:userName',
    element: <PublicPage />
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

