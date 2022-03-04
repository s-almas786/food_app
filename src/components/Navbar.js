import React from "react";
import { Link } from "react-router-dom";

function Navbar({ toogle }) {
  return (
    <nav className="flex justify-between items-center h-16 bg-white relative shadow-sm">
      <Link to="/" className="pl-8 text-2xl font-bold">
        Fiesta Mexico
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toogle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4 text-xl font-semibold" to="/">
          Home
        </Link>
        <Link className="p-4 text-xl font-semibold" to="/menu">
          Menu
        </Link>
        <Link className="p-4 text-xl font-semibold" to="/about">
          About
        </Link>
        <Link className="p-4 text-xl font-semibold" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
