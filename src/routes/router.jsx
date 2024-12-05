import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AddReview from "../pages/addReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "add-review",
    element: <AddReview></AddReview>,
  },
]);

export default router;
