import React from "react";
import { Link } from "react-router-dom";

function Dropmenu({ isopen, toogle }) {
  return (
    <div
      className={
        isopen ? "grid grid-rows-4 text-center items-center bg-main" : "hidden"
      }
      onClick={toogle}
    >
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/menu">
        Menu
      </Link>
      <Link className="p-4" to="/about">
        About
      </Link>
      <Link className="p-4" to="/contact">
        Contact
      </Link>
    </div>
  );
}

export default Dropmenu;
