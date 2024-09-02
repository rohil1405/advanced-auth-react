import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserList from "./components/user-listing/UserList";
import UserDetails from "./components/user-details/UserDetails";
import Login from "./components/Layout/Login";
import NotFound from "./components/NotFound/NotFound";
import AdminPage from "./components/AdminPage/AdminPage";
import Register from "./components/Layout/Register";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "users/:id",
    element: <UserDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
