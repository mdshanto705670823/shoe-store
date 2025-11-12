import React from "react";
import { FaRegCommentDots, FaRegClock } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";


const blogs = [
  {
    id: 1,
    title: "Top 5 Running Shoes for Peak Performance",
    image: "https://i.ibb.co.com/RT7qjXrD/image1.jpg",
    content: `
Lightweight, durable, and stylish – these running shoes are designed for peak performance.
From beginners to pros, these shoes provide optimal cushioning, breathability, and support.
Learn which shoes will maximize your running efficiency and comfort.
    `,
    author: "Admin",
    date: "Nov 10, 2025",
    readTime: "4 min read",
    comments: 12,
  },
  {
    id: 2,
    title: "How to Choose the Right Sneaker for Your Lifestyle",
    image: "https://i.ibb.co.com/7TvGBz3/image2.webp",
    content: `
Choosing the right sneaker can elevate your daily routine. 
We explore the differences between running, training, casual, and lifestyle sneakers, 
so you can pick the perfect pair for your needs.
    `,
    author: "Admin",
    date: "Nov 8, 2025",
    readTime: "5 min read",
    comments: 8,
  },
  {
    id: 3,
    title: "Sustainable Footwear: The Future of Sneakers",
    image: "https://i.ibb.co.com/Z1HJMtYN/image3.jpg",
    content: `
Kick-Fussion focuses on sustainability, using eco-friendly materials and reducing waste.
Discover how the sneaker industry is going green and why choosing sustainable footwear matters.
    `,
    author: "Admin",
    date: "Nov 5, 2025",
    readTime: "6 min read",
    comments: 15,
  },
];

const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <p className="text-center text-red-500 mt-10">
        Blog not found.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-myfont2">
      <button
        onClick={() => navigate(-1)}
        className="btn btn-sm bg-gray-300 mb-6 hover:bg-gray-400"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      <div className="flex flex-col sm:flex-row gap-6 mb-6 items-center">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full sm:w-1/2 rounded-lg object-cover"
        />
        <div className="flex flex-col gap-2">
          <p className="text-gray-200">By {blog.author}</p>
          <p className="text-gray-300">{blog.date}</p>
          <div className="flex items-center gap-4 text-gray-400 mt-2">
            <span className="flex items-center gap-1">
              <FaRegClock /> {blog.readTime}
            </span>
            <span className="flex items-center gap-1">
              <FaRegCommentDots /> {blog.comments} Comments
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-400  leading-relaxed whitespace-pre-line">
        {blog.content}
      </p>
    </div>
  );
};

export default SingleBlog;
