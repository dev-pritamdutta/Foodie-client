import React, { useEffect, useState } from "react";
import Cards from "../home/Cards";
import { FaFilter } from "react-icons/fa";
import menuBanner1 from "/random/menu2.jpg";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // loading data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        // console.log(data);
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
    setCurrentPage(1);
  };
  // show all data
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };
  // sorting based on A-z, Z-A, low-high pricing
  const handleSortChange = (option) => {
    setSortOption(option);
    console.log(option);

    let sortedItems = [...filteredItems];

    //logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
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
    setCurrentPage(1);
  };
  // function to count items in each category
  const countItemsInCategory = (category) => {
    return menu.filter((item) => item.category === category).length;
  };
  // pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="">
      <div className="section-container ">
        {/* menu text */}
        <div
          className="hero min-h-[650px] mt-20"
          style={{
            backgroundImage:
              `url(${menuBanner1})`,
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="space-y-2">
            <h2 className="md:text-5xl text-5xl font-bold leading-snug md:leading-snug">
              For the Love of Delicious
              <span className="text-green ml-2">Food</span>
            </h2>
            <p className="text-xl text-white">
              A vegetarian delight, our falafel wrap features crispy chickpea
              falafel balls, creamy hummus, <br /> and fresh veggies, all
              drizzled with smooth tahini sauce.
            </p>
            <button className="btn bg-green hover:bg-gray-800  px-8 py-3 font-semibold text-white rounded-full">
              Order Now
            </button>
            </div>
          </div>
        </div>

      </div>
      {/* loding data */}
      <div className="section-container py-10">
        {/* All Category button and sort option */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center mb-8">
          {/*category button */}
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

          {/* sort option */}
          <div className="flex justify-end rounded-sm bg-black mt-1 ">
            <div className="bg-black p-3">
              <FaFilter className="h-4 w-4  text-white" />
            </div>
            <select
              name="sort"
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
          </div>
        </div>

        {/* product */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 py-10">
          {currentItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>
      {/* pagination section */}
      <div className="flex justify-center my-8">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-green text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
