import { createBrowserRouter, RouterProvider,Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import HomePage from "../pages/HomePage";
import SignUp from "../features/auth/SignUp";
import Login from "../features/auth/Login";

const Public = () => {
  const appRouter = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <HomePage />,
    },
    {
      path: ROUTES.SIGNUP,
      element: <SignUp />,
    },
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
    {
      path: "*",
      element: <Navigate to={ROUTES.SIGNUP} replace />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Public;
