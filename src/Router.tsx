import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Store from "./components/Store/Store.tsx";
import Home from "./components/Home/Home.tsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";

import "./css/reset.css";
import "./css/global.css";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/store",
          element: <Store />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
