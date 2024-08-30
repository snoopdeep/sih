// src/components/Header.jsx
import React from "react";
// import logo from "../../public/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="/public/logo.png"
          alt="UIDAI Logo"
          className="h-10 w-10 mr-3"
        />{" "}
        {/* Logo Placeholder */}
        {/* <img src={logo} alt="UIDAI Logo" className="h-10 w-10 mr-3" />{" "} */}
        {/* Logo Placeholder */}
        <h1 className="text-2xl font-bold text-blue-700">
          Aadhaar Face Authentication
        </h1>
      </div>
      <nav>
        <a href="/" className="text-blue-700 hover:text-blue-900 mx-2">
          Home
        </a>
        <a href="/" className="text-blue-700 hover:text-blue-900 mx-2">
          About
        </a>
        <a href="/" className="text-blue-700 hover:text-blue-900 mx-2">
          Help
        </a>
      </nav>
    </header>
  );
};

export default Header;
