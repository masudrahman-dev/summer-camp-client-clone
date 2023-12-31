import React, { useState } from "react";
import StudentDashboard from "../StudentDashboard/StudentDashboard";
import InstructorDashboard from "../InstrctorDashboard/InstructorDashboard";
import AdminDashboard from "../AdminDashboard/AdminDashboard";

const DashboardMenu = ({ isOpen }) => {
  // TODO: role come from server
  let role1 = "instructor";
  let role2 = "student";
  let role = "admin";
  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform    border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700  ${
          isOpen ? " " : " md:translate-x-0 -translate-x-full"
        } `}
      >
        <div className="overflow-y-auto py-5 px-3 h-full   dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">{role}</span>
              </a>
            </li>

            {role2 == "student" && <StudentDashboard />}

            {role1 == "instructor" && <InstructorDashboard />}

            {role == "admin" && <AdminDashboard />}
            {/* {<StudentDashboard role={role} />}

            {<InstructorDashboard />}

            {<AdminDashboard />} */}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default DashboardMenu;
