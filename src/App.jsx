import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Product from "./features/products/Product";
import Home from "./ui/Home";
// import { loader as itemsLoader } from "./features/products/Product";
import { loader as detailsLoader } from "./features/products/ProductDetails";
import Error from "./ui/Error";
import ProductDetails from "./features/products/ProductDetails";
import Cart from "./features/cart/Cart";
import Checkout, { loader as orderLoader } from "./features/checkout/checkout";
import CreateCheckout, {
  action as createOrderAction,
} from "./features/checkout/createCheckout";

const router = createBrowserRouter([
  {
  
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
        // loader: itemsLoader,
      },
      {
        path: `/products/:id`,
        element: <ProductDetails />,
        loader: detailsLoader,
      },
      {
        path: `/cart`,
        element: <Cart />,
      },
      {
        path: `/order/new`,
        element: <CreateCheckout />,
        action: createOrderAction,
      },
      {
        path: `/order/:orderId`,
        element: <Checkout />,
        loader: orderLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
