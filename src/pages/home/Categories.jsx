import React from "react";
import img1 from "../../assets/home/category/img1.png";
import img2 from "../../assets/home/category/img2.png";
import img3 from "../../assets/home/category/img3.png";
import img4 from "../../assets/home/category/img4.png";

const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    des: "(86 dishes)",
    image: img1,
  },
  {
    id: 2,
    title: "Break Fast",
    des: "(12 dishes)",
    image: img2,
  },
  {
    id: 3,
    title: "Dessert",
    des: "(20 dishes)",
    image: img3,
  },
  {
    id: 4,
    title: "Browse All",
    des: "(250 dishes)",
    image: img4,
  },
];

const Categories = () => {
  return (
    <div className="section-container py-16">
      <div className="text-center">
        <p className="subtitle">---Customer Favourite---</p>
        <h2 className="title">Popular Categories</h2>
      </div>
      {/* category cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md w-80 md:w-64  bg-white py-6 px-5  mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                className="bg-[#c1f1c6] p-5 rounded-full w-28 h-28"
                src={item.image}
                alt={item.title}
              />
            </div>

            <div className="mt-5 space-y-1">
              <h5>{item.title}</h5>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
