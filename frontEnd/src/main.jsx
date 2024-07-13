// import React from "react";
import ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import './index.css'
import App from "./App";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/user",
//     element: <div>Hello user!</div>,
//   },
//   {
//     path: "/auth",
//     element: <div>Hello auth!</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
