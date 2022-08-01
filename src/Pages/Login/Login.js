import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  return (
    <section className="h-screen grid grid-cols-1 justify-items-center content-center">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form class="card-body">
          <h2 className="text-center text-xl">Login</h2>
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
            {/* Reset Password */}
            <label class="label">
              <a href="#reset" class="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {/* Login Button */}
          <div class="form-control mt-6">
            <input type="submit" value="Login" class="btn btn-dark" />
          </div>
          <p>
            New to Doctor Portal?{" "}
            <Link to={"/signup"} className="text-[#19D3AE]">
              Create Account
            </Link>
          </p>
          <div className="divider">OR</div>
          <GoogleLogin />
        </form>
      </div>
    </section>
  );
};

export default Login;
