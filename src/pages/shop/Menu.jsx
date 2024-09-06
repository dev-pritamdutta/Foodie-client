import React, { useEffect, useState } from "react";
import Cards from "../home/Cards";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  // loading data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        console.log(data);
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // filtering data based on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
  };
  // show all data
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
  };
  // sorting based on A-z, Z-A, low-high pricing
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    //logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localCompare(a.name));
        break;
      case "low-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }
    setFilteredItems(sortedItems);
    f;
  };
  // function to count items in each category
  const countItemsInCategory = (category) => {
    return menu.filter((item) => item.category === category).length;
  };

  return (
    <div className="">
      <div className="section-container bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100% ">
        {/* menu text */}
        <div className="py-48 flex flex-col justify-center items-center gap-8">
          <div className="text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-5xl font-bold leading-snug md:leading-snug">
              For the Love of Delicious
              <span className="text-green ml-2">Food</span>{" "}
            </h2>
            <p className="text-xl text-[#4a4a4a]">
              A vegetarian delight, our falafel wrap features crispy chickpea
              falafel balls, creamy hummus, <br /> and fresh veggies, all
              drizzled with smooth tahini sauce.
            </p>
            <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>
      {/* loding data */}
      <div className="section-container py-10">
        {/* All Category button */}
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap category">
          <button
            onClick={showAll}
            className={selectedCategory === "all" ? "active" : ""}
          >
            ALL ({menu.length})
          </button>
          <button
            onClick={() => filterItems("salad")}
            className={selectedCategory === "salad" ? "active" : ""}
          >
            SALAD ({countItemsInCategory("salad")})
          </button>
          <button
            onClick={() => filterItems("pizza")}
            className={selectedCategory === "pizza" ? "active" : ""}
          >
            PIZZA ({countItemsInCategory("pizza")})
          </button>
          <button
            onClick={() => filterItems("soup")}
            className={selectedCategory === "soup" ? "active" : ""}
          >
            SOUP ({countItemsInCategory("soup")})
          </button>
          <button
            onClick={() => filterItems("dessert")}
            className={selectedCategory === "dessert" ? "active" : ""}
          >
            DESSERT ({countItemsInCategory("dessert")})
          </button>
          <button
            onClick={() => filterItems("drinks")}
            className={selectedCategory === "drinks" ? "active" : ""}
          >
            DRINKS ({countItemsInCategory("drinks")})
          </button>
        </div>
        {/* sorting base filtering */}
        <div>
          <div></div>
        </div>
        {/* product */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 py-10">
          {filteredItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
