import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/all-reviews"}>All Reviews</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to={"/add-review"}>Add Review</Link>
          </li>
          <li>
            <Link to={"/my-reviews"}>My Reviews</Link>
          </li>
          <li>
            <Link to={"/watch-list"}>Game WatchList</Link>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="bg-orange-50">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
            >
              {links}
            </ul>
          </div>
          <a className="flex items-center text-xl">
            <img className="w-14 h-14 ml-4 rounded-full" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user && user?.email ? (
            <div className="flex items-center gap-6">
              <div className="relative flex flex-col items-center">
                <img
                  src={user.photoURL}
                  className="w-8 h-8 rounded-full"
                  alt="User Avatar"
                  title={user.displayName || "User"}
                />
              </div>
              <Link onClick={handleLogOut} className="btn btn-neutral">
                Log Out
              </Link>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Link to={"/auth/login"} className="btn btn-neutral">
                Login
              </Link>
              <Link to={"/auth/register"} className="btn btn-neutral">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
