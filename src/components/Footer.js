import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="container mx-auto">
      <footer className="footer p-10 bg-base-100 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <NavLink to={"/"} className="link link-hover">
            Branding
          </NavLink>
          <NavLink to={"/"} className="link link-hover">
            Design
          </NavLink>
          <NavLink to={"/"} className="link link-hover">
            Marketing
          </NavLink>
          <NavLink to={"/"} className="link link-hover">
            Advertisement
          </NavLink>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <NavLink to={"/"} className="link link-hover">
            About us
          </NavLink>
          <NavLink to={"/"} className="link link-hover">
            Contact
          </NavLink>
          <NavLink to={"/"} className="link link-hover">
            Jobs
          </NavLink>
          <NavLink to={"/"} className="link link-hover">
            Press kit
          </NavLink>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <NavLink to={"/"} className="link link-hover">
            Terms of use
          </NavLink>
          <NavLink to={"/"} className="link link-hover">
            Privacy policy
          </NavLink>
          <NavLink to={"/"} className="link link-hover">
            Cookie policy
          </NavLink>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-100 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <p>
            Copyright © 2022 - All right reserved by Doctor Portal. Designed By
            MD. Nizam Uddin
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
