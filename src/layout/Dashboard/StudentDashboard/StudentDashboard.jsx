import { ArrowCircleRight, Basket } from "@phosphor-icons/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const StudentDashboard = () => {

  <>
    <NavLink to="/">
      {({ isActive }) => (
        <span className={isActive ? "text-fuchsia-500 font-bold" : ""}>
          Home
        </span>
      )}
    </NavLink>
  </>;
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/student/selected-classes"
          className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        >
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "text-fuchsia-500 font-bold " : ""
              }  text-left whitespace-nowrap flex items-center justify-center gap-3`}
            >
              <ArrowCircleRight size={28} />
              <p> Selected Classes</p>
            </div>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/student/enrolled-classes"
          className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        >
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "text-fuchsia-500 font-bold " : ""
              }  text-left whitespace-nowrap flex items-center justify-center gap-3`}
            >
              <Basket size={28} />
              <p> Enrolled Classes</p>
            </div>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/student/payment-history"
          className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        >
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "text-fuchsia-500 font-bold " : ""
              }  text-left whitespace-nowrap flex items-center justify-center gap-3`}
            >
              <Basket size={28} />
              <p> Payment History</p>
            </div>
          )}
        </NavLink>
      </li>
    </>
  );
};

export default StudentDashboard;
