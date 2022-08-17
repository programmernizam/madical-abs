import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { useForm } from "react-hook-form";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../components/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, forgotError] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let singInError;
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  if (loading || sending) {
    return <Loading />;
  }
  if (error || forgotError) {
    singInError = (
      <p className="text-error">{error?.message || forgotError?.message}</p>
    );
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <section className="h-screen grid grid-cols-1 justify-items-center content-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center text-xl">Login</h2>
            {/* Email Filed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              <p className="text-error">
                {errors.email?.type === "required" && "Email is required"}
              </p>
            </div>
            {/* Password Filed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              <p className="text-error">
                {errors.password?.type === "required" && "Password is required"}
              </p>
              {/* Reset Password */}
              <label className="label">
                <label
                  htmlFor="forgot-password"
                  className=" link link-hover modal-button"
                >
                  Forgot password?
                </label>
              </label>
            </div>
            {singInError}
            {/* Login Button */}
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-dark" />
            </div>
            <p>
              New to Doctor Portal?{" "}
              <Link to="/signup" className="text-[#19D3AE]">
                Create Account
              </Link>
            </p>
            <div className="divider">OR</div>
          </form>
          <GoogleLogin />
        </div>
      </div>
      <div>
        <input type="checkbox" id="forgot-password" className="modal-toggle" />
        <div className="modal modal-middle sm:modal-middle">
          <div className="modal-box text-center">
            <label
              htmlFor="forgot-password"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-2xl font-bold my-5">Forgot Password</h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              className="btn w-full max-w-xs my-5"
              onClick={async () => {
                await sendPasswordResetEmail(email);
                alert("Sent email");
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
