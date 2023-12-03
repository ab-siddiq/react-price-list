import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
const MenuItem = ({ route }) => {
  return (
    <li className=" text-left py-1 pl-6 sm:px-10 w-48   sm:pl-0 ">
      <ActiveLink to={route.path}>{route.name}</ActiveLink>
    </li>
  );
};

export default MenuItem;
