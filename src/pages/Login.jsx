import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-lg border-2 shrink-0 rounded-md md:py-10 py-5">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form className="card-body">
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
          <div className="form-control">
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
            <label className="label">
              <Link className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-sm">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold text-gray-500">
          Don’t Have An Account ?{" "}
          <Link
            to={"/auth/register"}
            className="hover:underline font-bold text-black"
          >
            Register
          </Link>
        </p>
        <div className="w-[86%] mx-auto">
          <button className="btn btn-outline border-2 btn-neutral w-full rounded-sm mt-4 mx-auto">
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

export default Login;
