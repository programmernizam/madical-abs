import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../components/Loading";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let singInError;
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    singInError = <p className="text-error">{error?.message}</p>;
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
                <a href="#reset" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {singInError}
            {/* Login Button */}
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-dark" />
            </div>
            <p>
              New to Doctor Portal?{" "}
              <Link to={"/signup"} className="text-[#19D3AE]">
                Create Account
              </Link>
            </p>
            <div className="divider">OR</div>
          </form>
          <GoogleLogin />
        </div>
      </div>
    </section>
  );
};

export default Login;
