import React, { useContext } from "react";
import useCart from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";

const CartPage = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);

  // Calculate price
  const calculatePrice = (item) => item.price * item.quantity;

  // Handle increase function
  const handleIncrease = (item) => {
    // console.log(item); // Check item data
    fetch(`http://localhost:6001/carts/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: item.quantity + 1 }),
    })
      .then((res) => res.json())
      .then(() => {
        refetch(); // Refresh cart after successful update
      })
      .catch((error) => console.error("Error increasing quantity:", error));
  };
  

  // Handle decrease function
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      fetch(`http://localhost:6001/carts/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      })
        .then((res) => res.json())
        .then(() => {
          refetch(); // Refresh cart after successful update
        })
        .catch((error) => console.error("Error decreasing quantity:", error));
    } else {
      alert("Quantity cannot be less than 1");
    }
  };

  // Handle delete button
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
        fetch(`http://localhost:6001/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch(); // Refresh cart after successful deletion
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          })
          .catch((error) => console.error("Error deleting item:", error));
      }
    });
  };

  // Calculate total price
  const cartSubTotal = cart.reduce(
    (total, item) => total + calculatePrice(item),
    0
  );
  const orderTotal = cartSubTotal;

  return (
    <div className="section-container bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100% ">
      {/* Header */}
      <div className="py-36 flex justify-center items-center">
        <div className="px-4">
          <h2 className="md:text-5xl text-4xl font-bold leading-snug md:leading-snug">
            Items added to the <span className="text-green mr-2">Cart</span>
          </h2>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
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
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.name} />
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
                    readOnly
                    className="w-10 mx-2 text-center"
                  />
                  <button
                    className="btn btn-xs px-4 bg-slate-300"
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                </td>
                <td>${calculatePrice(item).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-ghost btn-xs text-red"
                    onClick={() => handleDelete(item)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Customer and Shopping Details */}
      <div className="my-12 flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/3 space-y-3">
          <h3 className="font-medium bg-green text-center py-2">
            Customer Details
          </h3>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>User ID: {user.uid}</p>
        </div>
        <div className="md:w-1/3 space-y-3">
          <h3 className="font-medium bg-green text-center py-2">
            Shopping Details
          </h3>
          <p>Total Items: {cart.length}</p>
          <p>Total Price: ${orderTotal.toFixed(2)}</p>
          <button className="btn bg-green text-white">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
