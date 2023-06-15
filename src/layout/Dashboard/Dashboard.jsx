import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu/DashboardMenu";
import logo from "../../assets/Images/logo.svg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider";
const Dashboard = () => {
  const [isOpen, setOpen] = useState(false);

  const { user, logOut, setLoading } = useContext(AuthContext);
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

  useEffect(() => {
    setLoading(false);
  }, []);
  // const { data, isLoading, refetch, error } = useQuery({
  //   queryFn: async () => {
  //     const data = await axios(
  //       `${import.meta.env.VITE_BASE_URL}/users/one-role/${user?.email}`
  //     );

  //     return data?.data;
  //   },
  //   queryKey: ["users-one-role"],
  // });

  // TODO: make admin first time then delete extra component
  // let isAdmin = true;

  // find one to verify user or admin or instructor

  return (
    <div>
      <div className="antialiased  dark:bg-gray-900 h-screen">
        {/* Navbar */}

        <nav className=" border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
              <button
                onClick={() => setOpen(!isOpen)}
                className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only"></span>
              </button>
              <Link to="/" className="flex items-center justify-between mr-4">
                <img src={logo} className="mr-3 h-8" alt=" Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Music Shala
                </span>
              </Link>
            </div>
            <div className="flex items-center lg:order-2">
              <button
                type="button"
                className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
              >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={user?.photoURL} />
              </button>
              <button
                onClick={handleLogOut}
                type="button"
                className="btn ml-3 btn-ghost"
              >
                Log out
              </button>
            </div>
          </div>
        </nav>
        {/* <!-- Dashboard Menu --> */}
        <DashboardMenu isOpen={isOpen}></DashboardMenu>
        {/* main  */}
        <main className="p-4 md:ml-64 h-auto pt-20">
          {/* <FormCRUD></FormCRUD> */}
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
