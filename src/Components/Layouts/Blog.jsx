import React from "react";
import { FaRegCommentDots, FaRegClock } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "Top 5 Running Shoes for Peak Performance",
      image: "https://i.ibb.co.com/RT7qjXrD/image1.jpg",
      summary:
        "Discover the top running shoes that combine comfort, style, and performance. Perfect for beginners and pros alike.",
      author: "Admin",
      date: "Nov 10, 2025",
      readTime: "4 min read",
      comments: 12,
    },
    {
      id: 2,
      title: "How to Choose the Right Sneaker for Your Lifestyle",
      image: "https://i.ibb.co.com/7TvGBz3/image2.webp",
      summary:
        "From gym workouts to casual outings, learn how to select sneakers that fit your everyday needs.",
      author: "Admin",
      date: "Nov 8, 2025",
      readTime: "5 min read",
      comments: 8,
    },
    {
      id: 3,
      title: "Sustainable Footwear: The Future of Sneakers",
      image: "https://i.ibb.co.com/Z1HJMtYN/image3.jpg",
      summary:
        "Kick-Fussion explores eco-friendly materials and practices in sneaker manufacturing to reduce environmental impact.",
      author: "Admin",
      date: "Nov 5, 2025",
      readTime: "6 min read",
      comments: 15,
    },
    {
      id: 4,
      title: "Styling Tips: Sneakers That Elevate Your Outfit",
      image: "https://i.ibb.co.com/SDBpBGv1/image4.webp",
      summary:
        "Learn how to pair sneakers with casual and semi-formal outfits for a modern, stylish look.",
      author: "Admin",
      date: "Nov 2, 2025",
      readTime: "3 min read",
      comments: 5,
    },
  ];

  return (
    <div className="font-myfont2 max-w-7xl mx-auto px-4 py-12 text-gray-400">
      <h2 className="text-4xl font-bold mb-10 text-center">Kick-Fussion Blog</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
           
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

           
            <div className="p-4 flex flex-col flex-1 gap-3">
              <h3 className="text-lg sm:text-xl font-semibold line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">{blog.summary}</p>

             
              <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                <span>{blog.author}</span>
                <span className="flex items-center gap-2">
                  <FaRegClock /> {blog.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <FaRegCommentDots /> {blog.comments}
                </span>
              </div>

              
              <button
                onClick={() => navigate(`/blog/${blog.id}`)}
                className="mt-3 btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600 w-full"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
