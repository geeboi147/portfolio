import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the menu after clicking
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        isScrolled ? "bg-gray-800/60 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        <h1 className="text-2xl font-bold text-blue-500 relative">
          My Portfolio
          <span className="absolute top-0 right-[-20px] text-3xl">🎅</span> {/* Santa hat emoji */}
        </h1>
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#home"
              className="hover:text-blue-500"
              onClick={(e) => handleSmoothScroll(e, "#home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-500"
              onClick={(e) => handleSmoothScroll(e, "#about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-blue-500"
              onClick={(e) => handleSmoothScroll(e, "#skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-500"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-500"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 right-4 bg-gray-800/90 backdrop-blur-lg p-4 rounded-lg flex flex-col space-y-4 md:hidden">
            <li>
              <a
                href="#home"
                className="hover:text-blue-500"
                onClick={(e) => handleSmoothScroll(e, "#home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-500"
                onClick={(e) => handleSmoothScroll(e, "#about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-blue-500"
                onClick={(e) => handleSmoothScroll(e, "#about")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-500"
                onClick={(e) => handleSmoothScroll(e, "#projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-500"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
