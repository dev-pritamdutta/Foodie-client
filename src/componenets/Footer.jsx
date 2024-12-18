import React from "react";
import logo from "/logo2.png";

const Footer = () => {
  return (
    <footer className="footer section-container xl:px-24 py-10 px-4 text-base-content">
      <aside>
        <a
          href="/"
          className=" flex justify-center items-center text-lime-400 text-4xl font-bold"
        >
          <img className="w-14 " src={logo} alt="" /> Organic
        </a>
        <p className="my-5">
          Savor the artistry every dish is a culinary masterpiece
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Useful links</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Main Menu</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Contact Us</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
