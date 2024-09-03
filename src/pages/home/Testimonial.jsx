import React from "react";
import img from "../../assets/home/testimonials/testimonials.png";

import avater1 from "../../assets/home/testimonials/testimonial1.png";
import avater2 from "../../assets/home/testimonials/testimonial2.png";
import avater3 from "../../assets/home/testimonials/testimonial3.png";
import { FaStar } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src={img} alt="testimonial banner img" />
        </div>
        <div className="text-left md:w-1/2">
          <p className="subtitle">---Testimonials---</p>
          <h2 className="title">What Our Customers Say About Us</h2>
          <blockquote className="my-5 text-secondary leading-[30px]">
            "I had the pleasure of dining at Foodi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable."
          </blockquote>
          {/* avater */}
          <div className="flex items-center flex-wrap gap-2">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src={avater1} />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src={avater2} />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src={avater3} />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <h5 className="font-semibold text-lg">Customer Feedback</h5>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-500 mr-1" />
                <span className="font-medium">4.9</span>{" "}
                <span className="text-[#807e7e]"> (18.3k Reviews)</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
