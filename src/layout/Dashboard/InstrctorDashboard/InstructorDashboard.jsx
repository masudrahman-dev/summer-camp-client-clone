import { ListPlus, Plus } from "@phosphor-icons/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const InstructorDashboard = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/instructor/add-class"
          className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        >
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "text-fuchsia-500 font-bold " : ""
              }  text-left whitespace-nowrap flex items-center justify-center gap-3`}
            >
              <Plus size={28} />
              <p> Add Class</p>
            </div>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink
          to="instructor/my-classes"
          className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        >
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "text-fuchsia-500 font-bold " : ""
              }  text-left whitespace-nowrap flex items-center justify-center gap-3`}
            >
              <ListPlus size={28} />
              <p> My Classes</p>
            </div>
          )}
        </NavLink>
      </li>
    </>
  );
};

export default InstructorDashboard;
