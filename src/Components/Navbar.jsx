import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
    if (!open) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is enabled when component unmounts
    };
  }, []);

  const menuItems = [
    { label: "Home", path: "#home" },
    { label: "About Me", path: "#about" },
    { label: "Projects", path: "#projects" },
    { label: "Experience", path: "#experience" },
    { label: "Skills", path: "#skills" },
    { label: "Contact Me", path: "#contact" },
  ];

  return (
    <>
      {/* Navbar Container */}
      <div className="bg-primary h-[70px] w-full flex justify-end sm:justify-between items-center px-4 z-50 sticky top-0">
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex sm:justify-around sm:items-center h-full w-full">
          {menuItems.map((item, index) => (
            <ul key={index}>
              <li className="text-link relative group">
                <HashLink smooth to={item.path} className="font-playfair sm:text-xl">
                  {item.label}
                </HashLink>
                <span className="absolute h-0.5 w-0 bg-white bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="sm:hidden" onClick={openMenu}>
          {open ? <IoMdClose className="text-3xl text-link" /> : <IoMenu className="text-3xl text-link" />}
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {open && (
        <div className="fixed top-10 right-0 w-[250px] h-screen bg-primary text-link flex flex-col items-center space-y-10 py-10 transition-all duration-300 z-40">
          {menuItems.map((item, index) => (
            <ul key={index}>
              <li className="text-link relative group mt-5">
                <HashLink smooth to={item.path} className="font-playfair sm:text-xl" onClick={openMenu}>
                  {item.label}
                </HashLink>
                <span className="absolute h-0.5 w-0 bg-white bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
