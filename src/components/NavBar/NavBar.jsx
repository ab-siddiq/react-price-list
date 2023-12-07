import React, { useContext, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { AuthContext } from "../../providers/AuthProviders";
const NavBar = () => {
  const [open, setOpen] = useState(true);
  const auth = getAuth(app);
  const { logOut, user } = useContext(AuthContext);
  // console.log(auth?.currentUser?.displayName);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
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
    <nav className="md:bg-pink-900   text-sky-100 font-bold z-10 sticky top-0 shadow-lg shadow-pink-600">
      <div className="md:hidden ml-4 mt-2" onClick={() => setOpen(!open)}>
        <span>
          {!open === false ? (
            <Bars3Icon className="h-6 w-6 text-blue-500" />
          ) : (
            <XMarkIcon className="h-6 w-6  text-blue-500"></XMarkIcon>
          )}
        </span>
      </div>
      <div
        className={`bg-pink-800 md:bg-inherit box-border z-10  ml-4 pt-5 md:py-1 text-pink-100 h-64 md:h-12 rounded-lg md:flex  md:justify-center md:items-center md:static duration-700  absolute ${
          !open ? "top-8" : "-top-96"
        } `}
      >
        <ul className="md:flex  md:justify-center md:items-center md:static">
          {routes.map((route) => (
            <MenuItem key={route.id} route={route}></MenuItem>
          ))}
        </ul>
        <div className="pl-6">
          {user ? (
            <div className="text-sm">
              <Link to='/dashboard'><div className="">{user.email}</div></Link>
              <div className="">
                <Link onClick={handleLogOut} to="/login">
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
