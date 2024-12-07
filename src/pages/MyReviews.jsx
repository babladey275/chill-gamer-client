import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEdit, FaTrash } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

const MyReviews = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const filterReviews = data.filter((item) => item.email === user.email);
    setReviews(filterReviews);
  }, [data, user]);

  //delete data
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setReviews(reviews.filter((review) => review._id !== id));
        fetch(`http://localhost:5000/all-reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-6xl mx-auto min-h-screen p-5">
        <h1 className="text-3xl font-bold text-center mb-5">Your Reviews</h1>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-xl">
                <th>Title</th>
                <th>Description</th>
                <th>Rating</th>
                <th>Genre</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <tr key={review._id}>
                    <td>{review.title}</td>
                    <td className="max-w-xl">{review.description}</td>
                    <td>{review.rating}</td>
                    <td>{review.genre}</td>
                    <td className="flex">
                      <button className="btn btn-neutral mr-2">
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(review._id)}
                        className="btn btn-error"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No reviews found. Add your first review!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MyReviews;
