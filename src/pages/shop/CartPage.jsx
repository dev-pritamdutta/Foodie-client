import React, { useContext, useState } from "react";
import useCart from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";

const CartPage = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  //calculate price
  const calculatePrice = (item) => {
    return item.price * item.quantity;
  };

  //handle increase function
  const handleIncrease = (item) => {
    // console.log(item._id);
    fetch(`http://localhost:3000/carts/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: item.quantity + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedCart = cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
        refetch();
        setCartItems(updatedCart);
      });
    refetch();
  };

  //hanlde decrease function
  const handleDecrease = (item) => {
    // console.log(item._id);
    if (item.quantity > 1) {
      fetch(`http://localhost:3000/carts/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      })
        .then((res) => res.json())
        .then((data) => {
          const updatedCart = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
          });
          refetch();
          setCartItems(updatedCart);
        });
      refetch();
    } else {
      alert("item can't be 0");
    }
  };

  //calculate total price
  const cartSubTotal = cart.reduce((total, item) => {
    return total + calculatePrice(item);
  }, 0);
  const orderTotal = cartSubTotal;

  //handle delete btn
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="section-container bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100% ">
      {/* content */}
      <div className="py-36 flex justify-center items-center ">
        <div className=" px-4">
          <h2 className="md:text-5xl text-4xl font-bold leading-snug md:leading-snug">
            Items added to the<span className="text-green mr-2"> Carts</span>
          </h2>
        </div>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-green text-white rounded-sm">
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-medium">{item.name}</td>
                <td>
                  <button
                    className="btn btn-xs px-4 bg-slate-300"
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={() => console.log(item.quantity)}
                    className="w-10 mx-2 text-center overflow-hidden appearance-none"
                  />
                  <button
                    className="btn btn-xs px-4 bg-slate-300"
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                </td>
                <td>${calculatePrice(item).toFixed(2)}</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs text-red"
                    onClick={() => handleDelete(item)}
                  >
                    {" "}
                    <FaTrash />{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* customer details */}
      <div className="my-12 flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/3 space-y-3">
          <h3 className="font-medium bg-green text-center py-2">Customer Details</h3>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>User_id: {user.uid}</p>
        </div>
        <div className="md:w-1/3 space-y-3">
          <h3 className="font-medium  bg-green text-center py-2">Shopping Details</h3>
          <p>Total Items: {cart.length}</p>
          <p>Total Price: ${orderTotal.toFixed(2)}</p>

          <button className="btn bg-green text-white">Procceed Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
