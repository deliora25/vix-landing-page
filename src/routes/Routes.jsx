import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/landingPage/LandingPage";
import { useMemo } from "react";

const Routes = () => {
  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: "/",
        element: <LandingPage />,
      },
    ]);
  }, []);

  return <RouterProvider router={router} />;
};

export default Routes;
