import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import {
  Home,
  LikedImages,
  Savat,
  Foods,
  Sunglasses,
  Beauty,
  Furnature,
  Clothe,
  WClothe,
  Sport,
  Chicken,
  Smartphones,
  Product,
} from "./pages";

import { loader as HomeLoader } from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/likedImages",
          element: <LikedImages />,
        },
        {
          path: "/savat",
          element: <Savat />,
        },
        {
          path: "/foods",
          element: <Foods />,
        },
        {
          path: "/sunglasses",
          element: <Sunglasses />,
        },
        {
          path: "/beauty",
          element: <Beauty />,
        },
        {
          path: "/furniture",
          element: <Furnature />,
        },
        {
          path: "/clothe",
          element: <Clothe />,
        },
        {
          path: "/wclothe",
          element: <WClothe />,
        },
        {
          path: "/sport",
          element: <Sport />,
        },
        {
          path: "/chicken",
          element: <Chicken />,
        },
        {
          path: "/smartphones",
          element: <Smartphones />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
