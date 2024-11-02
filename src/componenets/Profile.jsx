import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const Profile = ({ user }) => {
  return (
    <div>
      <div className="drawer drawer-end z-20">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4">
            <div className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <img alt="Profile" src={user.photoURL} />
                ) : (
                  <FaCircleUser className="w-10 rounded-full h-auto" />
                )}
              </div>
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>Setting</a>
            </li>
            <li>
              <a>LogOut</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
