import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddReview from "../pages/AddReview";
import ReviewDetails from "../pages/ReviewDetails";
import AllReviews from "../pages/AllReviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader: () => fetch("http://localhost:5000/reviews"),
  },
  {
    path: "all-reviews",
    element: <AllReviews></AllReviews>,
    loader: () => fetch("http://localhost:5000/all-reviews"),
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "add-review",
    element: (
      <PrivateRoute>
        <AddReview></AddReview>
      </PrivateRoute>
    ),
  },
  {
    path: "review-details/:id",
    element: (
      <PrivateRoute>
        <ReviewDetails></ReviewDetails>
      </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`),
  },
  {
    path: "*",
    element: (
      <h1 className="text-center text-red-600 text-4xl font-bold mt-20">
        Oops! Page not found.
      </h1>
    ),
  },
]);

export default router;
