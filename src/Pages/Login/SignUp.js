import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../../components/Loading";
import { useEffect } from "react";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  let signUpError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    navigate(from, { replace: true });
  }, [user, from, navigate]);
  if (error || updateError) {
    signUpError = (
      <p className="text-error">{error?.message || updateError?.updateError}</p>
    );
  }
  if (loading || updating) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <section className="h-screen grid grid-cols-1 justify-items-center content-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center text-xl">Sign Up</h2>
            {/* Name Filed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              <p className="text-error">
                {errors.name?.type === "required" && "Name is required"}
              </p>
            </div>
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
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                    message:
                      "Minimum 6 character include special character, letter or number",
                  },
                })}
              />
              {errors.password?.type === "required" && (
                <span className="text-error">{errors.password.message}</span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-error">{errors.password.message}</span>
              )}
            </div>
            {signUpError}
            {/* Login Button */}
            <div className="form-control mt-6">
              <input type="submit" value="SIGNUP" className="btn btn-dark" />
            </div>
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className="text-[#19D3AE]">
                Login
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

export default SignUp;
