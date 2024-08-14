import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { id: 1, title: "Home", url: "/profile" },
  { id: 2, title: "Contact", url: "/contact" },
  { id: 3, title: "About", url: "/about" },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Quantori</div>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div
          className={`lg:flex lg:items-center lg:space-x-4 ${
            isOpen
              ? "fixed inset-0 bg-gray-800 flex flex-col items-center justify-center"
              : "hidden"
          }`}
        >
          {links.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="block py-2 px-4 text-center text-white hover:bg-gray-700 rounded"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
