import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const ReviewDetails = () => {
  const review = useLoaderData();
  const { title, description, rating, genre, name, email } = review;

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <div className="flex justify-center">
          <div className="p-4 bg-base-100 border-2 rounded-3xl w-4/5 mx-auto flex gap-8">
            <div className="">
              <img
                className="rounded-xl w-[410px] h-full"
                src={review.image}
                alt=""
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <p className="text-gray-500">{description}</p>
              <p className="font-bold">Rating: {rating}</p>
              <p className="font-semibold">Genre: {genre}</p>
              <p className="font-semibold">Reviewer: {name || "Anonymous"}</p>
              <p className="font-semibold">Email: {email || "Not Provided"}</p>
              <button className="btn btn-neutral mt-4">Add to WatchList</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReviewDetails;
