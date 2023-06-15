import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import logo from "../../../assets/Images/logo.svg";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion"
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        console.log("log out successful.");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const menuItems = (
    <>
      <li>
        <NavLink to="/">
          {({ isActive }) => (
            <span className={isActive ? "text-fuchsia-500 font-bold" : ""}>
              Home
            </span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/instructors">
          {({ isActive }) => (
            <span className={isActive ? "text-fuchsia-500 font-bold" : ""}>
              Instructors
            </span>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/classes">
          {({ isActive }) => (
            <span className={isActive ? "text-fuchsia-500 font-bold" : ""}>
              Classes
            </span>
          )}
        </NavLink>
      </li>
      <li>
        {user && (
          <div className="md:flex gap-7">
            <div>
              <NavLink to="/dashboard">
                {({ isActive }) => (
                  <span
                    className={isActive ? "text-fuchsia-500 font-bold" : ""}
                  >
                    Dashboard
                  </span>
                )}
              </NavLink>
            </div>
          </div>
        )}
      </li>
    </>
  );
  return (
    <nav className=" z-40  md:fixed top-0 right-0 w-full ">
      <div className="   p-4    max-w-screen-xl mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className=" btn btn-ghost">
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            >
              <img src={logo} alt="logo" />
            </motion.div>
            <Link
              to="/"
              className=" ml-3 text-2xl font-semibold text-fuchsia-500"
            >
              Music Shala
            </Link>
          </div>

          <div className=" flex items-center  ">
            <ul className="hidden md:flex gap-5">{menuItems}</ul>
            <div className=" ml-5">
              {user ? (
                <div className="flex">
                  <div className=" mx-3">
                    <label className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img
                          src={
                            user?.photoURL ||
                            "https://source.unsplash.com/user/c_v_r/100x100"
                          }
                        />
                      </div>
                    </label>
                  </div>
                  <button onClick={handleLogOut} className="btn btn-ghost ">
                    Log out
                  </button>
                </div>
              ) : (
                <NavLink className="btn btn-ghost" to="/login">
                  Log in
                </NavLink>
              )}
            </div>
            <div className="md:hidden ">
              <Hamburger size={26} toggled={isOpen} toggle={setOpen} />
            </div>
            <ul
              className={`  absolute  z-50 rounded-lg shadow-md border p-5 top-32  md:hidden ${
                isOpen ? "" : "hidden"
              }`}
              id="mobile-menu-2"
            >
              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
