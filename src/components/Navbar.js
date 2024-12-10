import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800">
      <h1 className="text-2xl font-bold text-blue-500">My Portfolio</h1>
      <ul className="flex space-x-6">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
