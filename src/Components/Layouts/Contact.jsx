import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className=" font-myfont2 max-w-3xl mx-auto p-6 bg-base-200 rounded-xl shadow-md my-10">
      <h2 className="text-3xl text-black font-bold mb-6 text-center font-myfont2">
        Contact Us
      </h2>

      {submitted && (
        <p className="text-green-600 font-semibold text-center mb-4">
          Thank you! Your message has been sent.
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input input-bordered w-full rounded-lg p-3 text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input input-bordered w-full rounded-lg p-3 text-black"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="input input-bordered w-full rounded-lg p-3 text-black"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="textarea textarea-bordered w-full rounded-lg p-3 text-black resize-none"
        />

        <button
          type="submit"
          className="btn bg-blue-600 hover:bg-blue-700 text-white font-myfont3 rounded-lg p-3 transition-transform hover:scale-105"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Or reach us at:</p>
        <p>Email: support@kickfusion.com</p>
        <p>Phone: +88017-7777-7777</p>
      </div>
    </div>
  );
};

export default Contact;
