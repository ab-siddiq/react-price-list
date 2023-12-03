import React, { useState } from "react";
import Link from "../MenuItem/MenuItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const NavBar = () => {
  const [open, setOpen] = useState(true);
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Services",
      path: "/services",
    },
    {
      id: 5,
      name: "Products",
      path: "/products",
    },
    {
      id: 6,
      name: "Dealers",
      path: "/dealers",
    },
  ];
  return (
    <nav className="sm:bg-pink-900   text-sky-100 font-bold">
      <div className="sm:hidden ml-4 mt-2" onClick={() => setOpen(!open)}>
        <span>
          {!open === false ? (
            <Bars3Icon className="h-6 w-6 text-blue-500" />
          ) : (
            <XMarkIcon className="h-6 w-6  text-blue-500"></XMarkIcon>
          )}
        </span>
      </div>

      <ul
        className={`bg-pink-800 sm:bg-inherit box-border z-40 text-center ml-4 pt-5 sm:py-1 text-pink-100 h-60 sm:h-12 rounded-lg sm:flex  sm:justify-center sm:items-center sm:static duration-700  absolute ${
          !open ? "top-8" : "-top-96"
        } `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
