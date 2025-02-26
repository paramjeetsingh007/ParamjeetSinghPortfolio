import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Logo & Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-semibold font-playfair">Paramjeet Singh</h1>
          <p className="text-sm text-gray-400 font-roboto">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>

       

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4">
          <Link to='https://www.linkedin.com/in/paramjeetsingh007' className="text-gray-400 hover:text-white transition">
          <FaLinkedin className="text-2xl" />
          </Link>
          <Link to='https://github.com/paramjeetsingh007' className="text-gray-400 hover:text-white transition">
          <FaGithub className="text-2xl"/>
          </Link>
        
        </div>
      </div>
    </footer>
  );
}

export default Footer;
