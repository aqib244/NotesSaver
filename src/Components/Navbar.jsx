import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav className="shadow-slate-700 shadow-md  flex place-content-around items-center h-16 bg-gray-500">
        <NavLink to="/">
          <span className="font-bold text-lg">iNotes</span>
        </NavLink>
        <ul className="font-bold flex place-content-between gap-4">
          <NavLink to="/">
            <li >Home</li>
          </NavLink>
          <NavLink  style={{ display: props.link === "myNotes" ? "block" : "none" }} to="/notes">
            <li
             
            >
              {props.link}
            </li>
          </NavLink>
          <NavLink>
            <li></li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
