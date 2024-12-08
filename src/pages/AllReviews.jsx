import { Link, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

const AllReviews = () => {
  const reviews = useLoaderData();
  const [sortedReviews, setSortedReviews] = useState(reviews);

  const handleSortByRating = () => {
    const sorted = [...reviews].sort((a, b) => b.rating - a.rating);
    setSortedReviews(sorted);
  };

  const handleSortByYear = () => {
    const sorted = [...reviews].sort(
      (a, b) => a.publishingYear - b.publishingYear
    );
    setSortedReviews(sorted);
  };

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-6xl mx-auto">
        <div>
          <div className="dropdown dropdown-bottom ml-5 mt-4">
            <div tabIndex={0} role="button" className="btn btn-warning m-1">
              Sort
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a onClick={handleSortByRating}>Sort by Rating</a>
              </li>
              <li>
                <a onClick={handleSortByYear}>Sort by Year</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {sortedReviews.map((review) => (
            <div className="card w-full bg-base-100 shadow-xl" key={review._id}>
              <div className="card-body p-5">
                <img
                  src={review.image}
                  alt=""
                  className="h-64 w-full rounded-md"
                />
                <h3 className="card-title text-lg font-semibold">
                  {review.title}
                </h3>
                <p className="text-sm text-gray-700">Rating: {review.rating}</p>
                <div className="card-actions justify-end">
                  <Link to={`/review-details/${review._id}`}>
                    <button className="btn btn-outline">Explore Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AllReviews;
