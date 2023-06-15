import { ChalkboardTeacher, UserList } from "@phosphor-icons/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <li>
        <NavLink
          to="admin/manage-classes"
          className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        >
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "text-fuchsia-500 font-bold " : ""
              }  text-left whitespace-nowrap flex items-center justify-center gap-3`}
            >
              <ChalkboardTeacher size={28} />
              <p>Manage Classes</p>
            </div>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="admin/manage-users"
          className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        >
          {({ isActive }) => (
            <div
              className={`${
                isActive ? "text-fuchsia-500 font-bold " : ""
              }  text-left whitespace-nowrap flex items-center justify-center gap-3`}
            >
              <UserList size={28} />
              <p>Manage Users</p>
            </div>
          )}
        </NavLink>
      </li>
    </>
  );
};

export default AdminDashboard;
