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
  ];
  return (
    <nav className="sm:bg-pink-900  py-2 text-sky-100 font-bold">
      <div className="sm:hidden ml-2" onClick={() => setOpen(!open)}>
        <span>
          {!open === false ? (
            <Bars3Icon className="h-6 w-6 text-blue-500" />
          ) : (
            <XMarkIcon className="h-6 w-6 text-blue-500"></XMarkIcon>
          )}
        </span>
      </div>

      <ul
        className={`bg-pink-900 sm:bg-inherit   ml-1 text-pink-100 py-2 rounded-lg sm:flex sm:justify-center sm:items-center sm:static duration-700 pl-6 absolute ${
          !open ? "top-15" : "-top-40"
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
