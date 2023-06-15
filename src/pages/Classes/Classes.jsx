import React, { useContext } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useClassesGET from "../../hooks/useClassesGET";

import Card from "../../components/Card/Card";
const Classes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const { data, isLoading, refetch, error } = useClassesGET();
  // console.log(data);
  const handleAddToCart = (item) => {
    if (user) {
      const customer_email = user?.email;

      // console.log(item);
      const {
        class_image,
        class_name,
        description,
        instructor_email,
        instructor_image,
        instructor_name,
        price,
        role,
        seats,
        status,
        user_email,
        _id,
      } = item;

      const savedCarts = {
        customer_email,
        class_image,
        class_name,
        description,
        instructor_email,
        instructor_image,
        instructor_name,
        price,
        role,
        seats,
        status,
        user_email,
        classId: _id,
      };

      axios
        .post(`${import.meta.env.VITE_BASE_URL}/carts`, savedCarts)
        .then((response) => {
          const data = response.data;
          if (data) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item added successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while adding the item to the cart.",
            icon: "error",
          });
        });

      axios
        .patch(
          `${import.meta.env.VITE_BASE_URL}/classes/decrement-seats/${
            item?._id
          }`
        )
        .then((response) => {
          const data = response.data;
          if (data) {
            refetch();
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
        });
    } else {
      Swal.fire({
        title: "Please login before adding to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          // refetch();
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  // console.log(data);
  return (
    <div className="mt-32">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex items-center justify-center py-4 md:py-12 flex-wrap">
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-white ">
            Our All Classes
          </h1>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-7">
          {data?.map((item) => (
            <Card
              key={item?._id}
              item={item}
              handleAddToCart={handleAddToCart}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
/**
 *
 *
 * https://bridgemusic.in/wp-content/uploads/2022/07/sagar.jpeg   Piano | SAGAR GUSAIN
 * https://bridgemusic.in/wp-content/uploads/2022/07/FB_IMG_1590746443116.jpg Guiter | HIMANSHU DELWAR
 * https://bridgemusic.in/wp-content/uploads/2022/07/Pawan-New.jpg drums | PAWAN MUNDEPHI
 * https://bridgemusic.in/wp-content/uploads/2022/07/IMG-20190911-WA0004.jpg singer | SHELLY
 * https://bridgemusic.in/wp-content/uploads/2022/07/Adithya.jpg keyboards | ADITHYA SREERAAM
 * https://bridgemusic.in/wp-content/uploads/2022/07/1509808_416176091860995_639110860_n.jpg Violin | SANDIP DEY
 *
 *
 */
