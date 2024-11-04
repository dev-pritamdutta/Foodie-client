import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";
import { handleGoogleSignIn } from "./UtilityFun/authUtils";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, login, signInWithGmail } = useContext(AuthContext);

  // redirecting to homepage-----------
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // user created
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        alert("User created successfully");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
      });
  };

  // google login with utility functions

  const onGoogleSignUpSuccess = (user) => {
    alert("User  created successfully with Google");
    navigate(from, { replace: true });
  };

  const handleGoogleSignUp = () => {
    handleGoogleSignIn(signInWithGmail, onGoogleSignUpSuccess);
  };

  return (
    <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20 relative">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="dialog"
          className="card-body"
        >
          <h3 className="font-bold text-2xl text-center">Create an Account</h3>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password")}
            />
            <label className="label mt-1">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {/* error text */}

          {/* login btn */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="SignUp"
              className="btn text-white bg-green hover:bg-gray-800"
            />
          </div>
          <p className="text-cente my-2">
            Already have an account?
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="text-blue-500 underline ml-1"
            >
              Login now
            </button>
          </p>
          <Link
            to="/"
            className="btn btn-circle btn-md btn-ghost absolute right-0 top-0"
          >
            X
          </Link>
        </form>

        {/* modal */}
        <Modal />
        {/* social sign btn */}
        <div className="text-center space-x-3 mb-5">
          <button
            onClick={handleGoogleSignUp}
            className="btn text-xl btn-circle hover:bg-blue-600 hover:text-white"
          >
            <FaGoogle />
          </button>
          <button className="btn text-xl btn-circle hover:bg-blue-600 hover:text-white">
            <FaFacebook />
          </button>
          <button className="btn text-xl btn-circle hover:bg-blue-600 hover:text-white">
            <FaTwitter />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
