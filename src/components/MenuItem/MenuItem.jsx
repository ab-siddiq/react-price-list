import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
const MenuItem = ({ route }) => {
  return (
    <li className=" text-left py-1 pl-6  w-48 md:text-center  md:pl-0 ">
      <ActiveLink to={route.path}>{route.name}</ActiveLink>
    </li>
  );
};

export default MenuItem;
