import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
          <button className="btn text-xl  btn-circle hover:bg-blue-600 hover:text-white">
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