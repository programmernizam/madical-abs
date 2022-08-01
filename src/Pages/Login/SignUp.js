import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

const SignUp = () => {
  return (
    <section className="h-screen grid grid-cols-1 justify-items-center content-center">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form class="card-body">
          <h2 className="text-center text-xl">Sign Up</h2>
          {/* Name Filed */}
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input type="text" class="input input-bordered" />
          </div>
          {/* Email Filed */}
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" class="input input-bordered" />
          </div>
          {/* Password Filed */}
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" class="input input-bordered" />
          </div>
          {/* Login Button */}
          <div class="form-control mt-6">
            <input type="submit" value="SIGNUP" class="btn btn-dark" />
          </div>
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="text-[#19D3AE]">
              Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <GoogleLogin />
        </form>
      </div>
    </section>
  );
};

export default SignUp;
