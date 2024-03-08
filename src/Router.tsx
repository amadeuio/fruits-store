import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Store from "./components/Store/Store.tsx";
import Home from "./components/Home/Home.tsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import Bag from "./components/Bag/Bag.tsx";
import FruitView from "./components/FruitSection/FruitView/FruitView.tsx";

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
        {
          path: "/store/:name",
          element: <FruitView />,
        },
        {
          path: "/bag",
          element: <Bag />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
