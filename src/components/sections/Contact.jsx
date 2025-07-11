import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import "@fortawesome/fontawesome-free/css/all.min.css";

const VITE_SERVICE_ID = import.meta.env.VITE_SERVICE_ID; 
const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const VITE_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        VITE_SERVICE_ID,
        VITE_TEMPLATE_ID,
        e.target,
        VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
        <div id="social_icons">
          <div className="button">
            <a
              href="https://www.linkedin.com/in/atul-yadav23710/"
              className="icon linkedin"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <span id="linkedin">
              <a href="https://www.linkedin.com/in/atul-yadav23710/">
                {" "}
                Linkedin
              </a>
            </span>
          </div>
          <div className="button">
            <a
              href="https://github.com/atul23710"
              className="icon github dark:text-black text-white"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <span id="github">
              <a href="https://github.com/atul23710">Github</a>
            </span>
          </div>
          <div className="button">
            <a
              href="https://www.instagram.com/atul_23710/profilecard/?igsh=enc3MDg5MmFjY2d4"
              className="icon instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <span id="instagram">
              <a href="https://www.instagram.com/atul_23710/profilecard/?igsh=enc3MDg5MmFjY2d4">
                Instagram
              </a>
            </span>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
