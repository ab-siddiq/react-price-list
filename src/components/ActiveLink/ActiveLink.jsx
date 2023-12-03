import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink to={to}
    className={({ isActive }) => (isActive ? "px-3 py-1 bg-pink-200 text-pink-900 rounded-lg duration-700" : "")}>
      {children}
    </NavLink>
  );
};

export default ActiveLink;
