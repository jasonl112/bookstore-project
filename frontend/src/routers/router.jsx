import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Cart from "../pages/books/CartPage";
import Orders from "../pages/books/OrderPage";
import Home from "../pages/home/Home";
import SearchPage from "../pages/books/SearchPage";
import BookPage from "../pages/books/BookPage";
import PrivateRoute from "./PrivateRoute";
import CheckoutPage from "../pages/books/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <div>About Page</div> },
      { path: "/orders", element: <div>Order Page</div> },
      { path: "/login", element: <Login /> },
      { path: "/profile", element: <Profile /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      { path: "/search", element: <SearchPage /> },
      {
        path: "/books/:id",
        element: <BookPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
