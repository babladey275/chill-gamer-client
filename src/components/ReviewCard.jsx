import { Link, useLoaderData } from "react-router-dom";

const ReviewCard = () => {
  const reviews = useLoaderData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {reviews.map((review) => (
        <div className="card w-full bg-base-100 shadow-xl" key={review._id}>
          <div className="card-body p-5">
            <img src={review.image} alt="" className="h-64 w-full rounded-md" />
            <h3 className="card-title text-lg font-semibold">{review.title}</h3>
            <p className="text-sm text-gray-700">Rating: {review.rating}</p>
            <div className="card-actions justify-end">
              <Link to={`/review-details/${review.id}`}>
                <button className="btn btn-outline">Explore Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
