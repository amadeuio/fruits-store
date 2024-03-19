import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/reset.css";
import "./css/global.css";
import App from "./App.tsx";
import Home from "./components/Home/Home.tsx";
import Store from "./components/Store/Store.tsx";
import FruitView from "./components/FruitSection/FruitView/FruitView.tsx";
import Bag from "./components/Bag/Bag.tsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";

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
          path: "/store/:slug",
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
