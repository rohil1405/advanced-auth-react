import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import UserList from "./components/user-listing/UserList";
import UserDetails from "./components/user-details/UserDetails";

const routes = [
  {
    path: "/",
    element: <UserList/>,
  },
  {
    path: "/user/:id",
    element: <UserDetails />,
  },
];

const router = createBrowserRouter(routes);

const App: React.FC = () => {
    
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};

export default App;
