import React from "react";
import { Link } from "react-router-dom";
const MenuItem = ({ route }) => {
  console.log(route.path);
  return (
    <li className="mr-10">
      <Link to={route.path}>{route.name}</Link>
    </li>
  );
};

export default MenuItem;
