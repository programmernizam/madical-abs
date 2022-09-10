import React from "react";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const UpdateProfile = () => {
  const { register, handleSubmit } = useForm();
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  let updateError;
  if (updating) {
    return <Loading />;
  }
  if (error) {
    updateError = <p className="text-error">{error?.message}</p>;
  }
  const onSubmit = async (data) => {
    await updateProfile({ displayName: data.name, photoURL: data.img });
    toast("Profile Successfully Update");
  };
  return (
    <div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center text-xl">Update Profile</h2>
            {/* Name Filed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input className="input input-bordered" {...register("name")} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Image</span>
              </label>
              <input className="input input-bordered" {...register("img")} />
            </div>
            {updateError}
            {/* Update Button */}
            <div className="form-control mt-6">
              <input type="submit" value="Update" className="btn btn-dark" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
