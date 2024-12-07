import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { setUser, createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ name, photo, email, password });
    setError({});

    const hasUpperCase = /[A-Z]/;
    if (!hasUpperCase.test(password)) {
      setError({
        ...error,
        password: "Password must contain at least one uppercase letter.",
      });
      return;
    }

    const hasLowerCase = /[a-z]/;
    if (!hasLowerCase.test(password)) {
      setError({
        ...error,
        password: "Password must contain at least one lowercase letter.",
      });
      return;
    }

    if (password.length < 6) {
      setError({
        ...error,
        password: "Password must be at least 6 characters long",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Registration Successful!",
              text: "You have successfully registered!",
              confirmButtonText: "OK",
            }).then(() => {
              navigate("/");
            });
          })
          .catch((error) => {
            setError({ register: error.message });
          });
      })
      .catch((error) => {
        setError({ register: error.message });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        setError({ register: error?.message || "Something went wrong" });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen my-6">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 border-2 rounded-md md:py-10 py-5">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your name"
              className="input input-bordered rounded-sm"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered rounded-sm"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered rounded-sm"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered rounded-sm"
              required
            />
          </div>
          {error?.password && (
            <label className="label text-sm text-red-600">
              {error.password}
            </label>
          )}
          {error?.register && (
            <label className="label text-red-600">{error.register}</label>
          )}
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-sm">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold text-gray-500">
          Already Have An Account ?{" "}
          <Link
            to={"/auth/login"}
            className="hover:underline font-bold text-black"
          >
            Login
          </Link>
        </p>
        <div className="w-[86%] mx-auto">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline border-2 btn-neutral w-full rounded-sm mt-4 mx-auto"
          >
            <span>
              <FaGoogle></FaGoogle>
            </span>
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
