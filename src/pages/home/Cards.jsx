import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  const [isHeartFillted, setIsHeartFillted] = useState(false);
  const handleHeartClick = () => {
    setIsHeartFillted(!isHeartFillted);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl relative">
      <div
        className={`rating gap-1 absolute right-0 top-2 p-4 heartStar bg-green ${
          isHeartFillted ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${item.id}`}>
        <figure>
          <img
            src={item.image}
            alt="menu img"
            className="hover:scale-105 transition-all duration-200 md:h-72"
          />
        </figure>
      </Link>

      <div className="card-body">
        <Link to={`/menu/${item.id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            {" "}
            <span className="textt-sm text-red">$</span> {item.price}
          </h5>
          <button className="btn bg-green text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;