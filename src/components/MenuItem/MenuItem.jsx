import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
const MenuItem = ({ route }) => {
  return (
    <li className="px-3 py-2 ">
      <ActiveLink to={route.path}>{route.name}</ActiveLink>
    </li>
  );
};

export default MenuItem;
