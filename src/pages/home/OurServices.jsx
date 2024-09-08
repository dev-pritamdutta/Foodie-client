import React from "react";
import img1 from "../../assets/home/services/icon1.png";
import img2 from "../../assets/home/services/icon2.png";
import img3 from "../../assets/home/services/icon3.png";
import img4 from "../../assets/home/services/icon4.png";

const serviceLists = [
  {
    id: 1,
    title: "Catering",
    des: "delight your guest with our flavour and presentation",
    image: img1,
  },
  {
    id: 2,
    title: "Catering",
    des: "delight your guest with our flavour and presentation",
    image: img2,
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "delight your guest with our flavour and presentation",
    image: img3,
  },
  {
    id: 4,
    title: "Gift Cards",
    des: "delight your guest with our flavour and presentation",
    image: img4,
  },
];

const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* text */}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">---Our Story & Services---</p>
            <h2 className="title">Or Culinary Journey And Services</h2>
            <p className="my-5 text-secondary leading-[30px]">
              "I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable."
            </p>
            <button className="btn bg-green text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>
        {/* imgaes */}
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceLists.map((item) => (
              <div
                key={item.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer border-2 hover:border-indigo-400 transition-all duration-200 "
              >
                <img className="mx-auto" src={item.image} alt={item.title} />
                <h5 className="pt-3 font-semibold">{item.title}</h5>
                <p className="text-[#90bd95]">{item.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
