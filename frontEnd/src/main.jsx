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
import PublicPage from "./Components/public/linkLandingPage/PublicPage";
import PublicLanding from "./Components/public/landingPage/PublicLanding";
import SignIn from "./Components/public/auth/SignIn";
import SignUp from "./Components/public/auth/signUp/SignUp";
import SignUserName from "./Components/public/auth/signUp/SignUserName";
import SignUserProfession from "./Components/public/auth/signUp/SignUserProfession";


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
  },
  {
    path: '/',
    element: <PublicLanding />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup/2',
    element: <SignUp />
  },
  {
    path: '/signup/1',
    element: <SignUserName />
  },
  {
    path: '/signup/3',
    element: <SignUserProfession />
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

