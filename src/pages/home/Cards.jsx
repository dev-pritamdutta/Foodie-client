import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const Cards = ({ item }) => {
  const [cart, refetch] = useCart();
  const { _id, name, image, recipe, category, price } = item;

  const [isHeartFillted, setIsHeartFillted] = useState(false);
  const { user } = useContext(AuthContext);
  // console.log(user);

  const navigate = useNavigate();
  const location = useLocation();

  // heart click
  const handleHeartClick = () => {
    setIsHeartFillted(!isHeartFillted);
  };

  //add to cart
  const handleAddToCart = (item) => {
    // console.log('btn is clicked', item);

    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id, // Ensure this is correct
        name,
        quantity: 1,
        image,
        price,
        email: user.email,
      };
      console.log(cartItem); // Log the data to ensure it is correct

      fetch("http://localhost:6001/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => {
          if (!res.ok) {
            return res.json().then((data) => {
              throw new Error(data.message || "Something went wrong");
            });
          }
          return res.json(); // If response is OK, return the response data
        })
        .then((data) => {
          if (data._id) {
            // Check if the cart item was created based on the response structure
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item added to cart",
              showConfirmButton: false,
              timer: 1500,
            });

            refetch();
          }
        })
        .catch((error) => {
          // Error: Display error message
          Swal.fire({
            text: error.message,
            icon: "warning",
          });
        });
    } else {
      Swal.fire({
        title: "Please Login",
        text: "You need to log in to add products to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Signup Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signup", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      to={`/menu/${item._id}`}
      className="card bg-base-100 w-96 shadow-xl relative md:my-10"
    >
      <div
        className={`rating gap-1 absolute right-0 top-2 p-4 heartStar bg-green ${
          isHeartFillted ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${item._id}`}>
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
          <button
            className="btn bg-green text-white"
            onClick={() => handleAddToCart(item)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
