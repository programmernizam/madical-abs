import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);
  if (loading) {
    return (
      <button className="btn btn-accent text-white loading">Loading...</button>
    );
  }
  let gSignInError;
  if (error) {
    gSignInError = <p className="text-error">{error?.message}</p>;
  }
  return (
    <div className="form-control">
      {gSignInError}
      <button
        onClick={() => signInWithGoogle()}
        className="uppercase btn btn-outline btn-dark"
      >
        Continue With Google
      </button>
    </div>
  );
};

export default GoogleLogin;
