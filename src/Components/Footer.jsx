import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

   const links = (
   <>
    <Link to="/about">About us</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/blog">Blogs</Link>
    <Link to="/myaccount">My Account</Link>
    <Link to="/help">Help</Link>
    <Link to="/faq">FAQ</Link></>
  )
 const categories = (
  <>
  <li>Men</li>
  <li>Women</li>
  <li>Kid</li>
  </>
 )

 

  const socialIcons = [
    <>
    
    </>
  ];

  return (
    <footer className="bg-black/70 text-white  px-6 md:px-12 py-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
       
        <div>
          <h3 className="font-myfont2 font-bold text-lg mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {links}
          </ul>
        </div>

       
        <div>
          <h3 className="font-myfont2 font-bold text-lg mb-3">Categories</h3>
          <ul className="flex flex-col gap-2">
           {categories}
          </ul>
        </div>

       
        <div>
          <h3 className="font-myfont2 font-bold text-lg mb-3">Contacts</h3>
          <p>Dhaka,Bangladesh</p>
          
          <p>+88017-7777-7777</p>
          <p>support@kickfusion.com</p>
        </div>

       
        <div>
          <h3 className="font-myfont2 font-bold text-lg mb-3">Keep in Touch</h3>
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full rounded-lg mb-4 text-black"
          />
          <div className="flex gap-4 text-2xl">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-300 font-myfont2">
        Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
        <span className="text-green-500 uppercase">Kick-Fussion</span>
      </div>
    </footer>
  );
};

export default Footer;

