import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import { AuthContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../componenets/LoadingSpinner";

const Main = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div className="bg-primaryBg">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Navbar />
          <div className="min-h-screen">
            <Outlet />
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default Main;
