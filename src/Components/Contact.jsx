import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Use Vite's environment variables
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        
      )
      .then(
        (response) => {
          setStatus("Message sent successfully! ✅");
          setFormData({ from_name: "", message: "" });
          
        },
        (error) => {
          setStatus("Failed to send message. ❌");
          console.error("Error:", error);
        }
      );
   

  };

  return (
    <div id='contact' className="w-full min-h-screen flex flex-col items-center justify-center bg-primary text-white px-4">
      <h1 className="text-4xl font-playfair mb-6 border-b-4 pb-2 border-link">Contact Me</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
        <label className="block text-lg mb-2 font-roboto">Your Name</label>
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none mb-4 font-roboto"
        />

        <label className="block text-lg mb-2 font-roboto ">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none mb-4 h-32 font-roboto"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-secondary hover:bg-primary border text-white font-semibold py-3 rounded-lg transition duration-200 font-roboto"
        >
          Send Message
        </button>

        {status && <p className="mt-4 text-center text-sm font-roboto">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
