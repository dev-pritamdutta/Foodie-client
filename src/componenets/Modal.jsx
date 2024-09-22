import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const { signInWithGmail, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState();



  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    login(email, password)
    .then(result =>{
      const user = result.user;
      alert("login successfully");
    })
    .catch(error =>{
      const errorMessage  = error.message;
      setErrorMessage("Provide a correct email and password!");
    })
  };

  //google login
  const handleGoogleLogin = () => {
    signInWithGmail()
      .then((result) => {
        const user = result.user;
        alert("login successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="card-body"
          >
            <h3 className="font-bold text-2xl text-center">Please Login!</h3>
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
            {
              errorMessage ? <p className="text-red text-xs italic my-1">{errorMessage}</p> : ""
            }

            {/* login btn */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn text-white bg-green hover:bg-gray-800"
              />
            </div>
            <p className="text-cente my-2">
              Do not have an account?{" "}
              <Link to="/signup" className="text-blue-500 underline ml-1">
                Signup Now.
              </Link>{" "}
            </p>
            <button
              htmlFor="my_modal_5"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn btn-md btn-circle btn-ghost absolute right-3 top-2"
            >
              X
            </button>
          </form>
          {/* social sign btn */}
          <div className="text-center space-x-3 mb-5">
            <button
              onClick={handleGoogleLogin}
              className="btn text-xl  btn-circle hover:bg-blue-600 hover:text-white"
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
    </dialog>
  );
};

export default Modal;
