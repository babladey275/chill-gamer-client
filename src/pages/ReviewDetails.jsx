import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import Footer from "../components/Footer";

const ReviewDetails = () => {
  const review = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, description, rating, genre, name, email } = review;

  const handleAddToWatchList = () => {
    const userName = user.displayName;
    const userEmail = user.email;
    const newWatchList = {
      userName,
      userEmail,
      title,
      description,
      rating,
      genre,
      name,
      email,
    };

    //send data to the server
    fetch("https://chill-gamer-server-pi.vercel.app/watch-list", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newWatchList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "WatchList added successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex justify-center mt-5">
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
            <button
              onClick={handleAddToWatchList}
              className="btn btn-neutral mt-4"
            >
              Add to WatchList
            </button>
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ReviewDetails;
