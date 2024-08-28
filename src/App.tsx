import React from "react";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import UserList from "./components/user-listing/UserList";
import UserDetailsPage from "./components/user-details/UserDetails";

const routes = [
  {
    path: "/user",
    element: <UserList/>,
  },
  {
    path: "/user/:id",
    element: <UserDetailsPage/>,
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
