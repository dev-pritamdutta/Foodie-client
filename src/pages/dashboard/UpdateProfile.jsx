import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const{updateUserProfile}  = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const location = useLocation();
      const navigate = useNavigate();
      const from = location.state?.from?.pathname || "/";

      const onSubmit = (data) => {
        const name = data.name;
        const photoURL = data.photoURL;
        console.log(name, photoURL);

        updateUserProfile(name, photoURL).then(() => {
            alert("Profile updated successfully");
            navigate(from, { replace: true }); // Redirect to the from page
            // Profile updated!
            // ...
          }).catch((error) => {
            console.error("Error updating profile:", error);
        });
      }
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="font-bold text-center text-blue-600">Update Your Profile.</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Your name"
              className="input input-bordered"
              
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload PhotoURL</span>
            </label>
            <input
              type="text"
              {...register("photoURL")}
              placeholder="photo URL"
              className="input input-bordered"
              required
            />
            
          </div>
          <div className="form-control mt-6">
            {/* <input type="submit" value="UPDATE PROFILE" className="btn bg-green hover:bg-gray-800 px-6 text-white flex items-center gap-2" /> */}
            <button  className="btn bg-green hover:bg-gray-800 px-6 text-white flex items-center gap-2">UPDATE PROFILE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
