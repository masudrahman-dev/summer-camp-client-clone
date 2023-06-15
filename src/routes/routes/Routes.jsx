import { Form, createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Instructors from "../../pages/Instructors/Instructors";
import Classes from "../../pages/Classes/Classes";
import Login from "../../pages/LoginAndRegister/Login/Login";
import Register from "../../pages/LoginAndRegister/Register/Register";
import Dashboard from "../../layout/Dashboard/Dashboard";
import MyClasses from "../../layout/Dashboard/InstrctorDashboard/MyClasses/MyClasses";
import ManageClasses from "../../layout/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../../layout/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import SelectedClasses from "../../layout/Dashboard/StudentDashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../../layout/Dashboard/StudentDashboard/EnrolledClasses/EnrolledClasses";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FeedBackForm from "../../pages/Home/ClassesSection/FeedBackForm";
import AddClassForm from "../../layout/Dashboard/InstrctorDashboard/Add_UpdateClassFrom/AddClassForm";
import UpdateClassForm from "../../layout/Dashboard/InstrctorDashboard/Add_UpdateClassFrom/UpdateClassForm";
import PaymentHistory from "../../layout/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/student/selected-classes",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "/dashboard/student/enrolled-classes",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "/dashboard/student/payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/dashboard/instructor/my-classes",
        element: <MyClasses></MyClasses>,
      },

      {
        path: "/dashboard/instructor/add-class",
        element: <AddClassForm></AddClassForm>,
      },
      {
        path: "/dashboard/instructor/update-class/:id",
        element: <UpdateClassForm></UpdateClassForm>,
      },
      {
        path: "/dashboard/admin/manage-classes",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "/dashboard/admin/manage-classes/feedback/:id",
        element: <FeedBackForm></FeedBackForm>,
      },
      {
        path: "/dashboard/admin/manage-users",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);

export default router;
