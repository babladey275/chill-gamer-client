import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GameWatchList = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext); // Access user from context
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const filterWatchList = data.filter(
      (item) => item.userEmail === user.email
    );
    setWatchList(filterWatchList);
  }, [data, user]);

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <main className="max-w-6xl mx-auto p-5 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-5">
          Your Game Watchlist
        </h1>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-xl">
                <th>Game Title</th>
                <th>Description</th>
                <th>Rating</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              {watchList.length > 0 ? (
                watchList.map((item) => (
                  <tr key={item._id} className="space-x-10">
                    <td>{item.title}</td>
                    <td className="max-w-xl">{item.description}</td>
                    <td>{item.rating}</td>
                    <td>{item.genre}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-2xl">
                    No games added to your watchlist yet.
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

export default GameWatchList;
