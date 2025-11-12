import React from "react";
import { motion } from "framer-motion";
import { FaShoppingBag, FaUsers, FaSmile, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <div className="font-myfont2 text-black">
      
      <section className="relative bg-linear-to-r from-green-100 via-white to-green-50 py-20 px-6 md:px-16 text-center overflow-hidden">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-green-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-green-500">Kick-Fussion</span>
        </motion.h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl">
          Your one-stop destination for trendy shoes and lifestyle essentials. We believe
          that every step you take should define your confidence and comfort.
        </p>
      </section>

      
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-8190.jpg"
          alt="About Kick-Fussion"
          className="rounded-2xl shadow-lg w-full object-cover"
          whileHover={{ scale: 1.05 }}
        />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Who We Are</h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Kick-Fussion is an innovative e-commerce platform dedicated to bringing you the
            best in footwear and fashion. Our journey started with a simple idea — to fuse
            comfort, style, and quality together at an affordable price.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We aim to deliver an effortless shopping experience through modern design,
            smart navigation, and reliable customer support. Every click, every order, and
            every product is handled with care.
          </p>
        </div>
      </section>

      
      <section className="bg-base-200 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-10">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { icon: <FaUsers />, count: "25K+", label: "Happy Customers" },
            { icon: <FaShoppingBag />, count: "5K+", label: "Products Sold" },
            { icon: <FaStar />, count: "4.9", label: "Average Rating" },
            { icon: <FaSmile />, count: "100%", label: "Customer Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl text-green-500 mb-3">{stat.icon}</div>
              <h3 className="text-2xl font-bold">{stat.count}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Quality First",
              desc: "We ensure top-notch quality in every product to make sure you always get the best.",
            },
            {
              title: "Customer-Centric",
              desc: "Our customers are our top priority. We listen, improve, and deliver accordingly.",
            },
            {
              title: "Innovation & Style",
              desc: "We bring you modern designs that combine comfort and elegance effortlessly.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              className="bg-base-200 rounded-xl p-8 shadow hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-bold text-xl mb-3 text-green-600">{value.title}</h3>
              <p className="text-gray-700">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    
      <section className="bg-green-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the <span className="text-yellow-300">Kick-Fussion</span> Family Today!
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Step into a world where comfort meets creativity. Be a part of our growing
          community and walk with confidence.
        </p>
        <button className="btn bg-white text-green-600 font-bold hover:bg-yellow-200 transition">
          Start Shopping
        </button>
      </section>
    </div>
  );
};

export default About;
