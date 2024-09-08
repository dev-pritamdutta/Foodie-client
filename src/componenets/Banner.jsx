import React from "react";
import banner from "../assets/home/banner.png";
import bannerDesignImg1 from "../assets/home/b-food1.png";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100% ">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* right-img */}
        <div className="md:w-1/2">
          <img src={banner} alt="banner" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 ml-10">
            {/* banner img-2 */}
            <div className="flex bg-white rounded-2xl items-center gap-3 shadow-md">
              <div className="space-y-1 px-5">
                <h5>Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                </div>
                <p className="text-red font-semibold">$20.00</p>
              </div>
              <img
                src={bannerDesignImg1}
                alt="banner design img"
                className="rouned-2xl"
              />
            </div>
            {/* banner img-3 */}
            <div className="sm:flex hidden bg-white rounded-2xl items-center gap-3 shadow-md">
              <img
                src={bannerDesignImg1}
                alt="banner design img"
                className="rouned-2xl"
              />
              <div className="space-y-1 px-5">
                <h5>Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                </div>
                <p className="text-red font-semibold">$20.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* left-text */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold leading-snug md:leading-snug">
            Discover a world of <span className="text-green mr-2">flavors</span>
            right at your fingertips!
          </h2>
          <p className="text-xl text-[#4a4a4a]">
            We bring you the finest recipes, expert cooking tips, and delicious
            inspiration from around the globe.
          </p>
          <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
