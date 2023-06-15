import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { CirclesWithBar } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";

const UpdateClassForm = () => {
  const [loading, setLoading] = useState(true);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useParams();

  const onSubmit = (data) => {
    console.log("data :>> ", data);
    setLoading(false);
    // console.log(data, id);
    axios
      .put(`${import.meta.env.VITE_BASE_URL}/classes/update-info/${id}`, data)
      .then((response) => {
        console.log(response.data);
        // Do something with the response
        // reset();
        toast.success(" update Successfully");
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" flex justify-center">
        <div className=" p-4 w-full max-w-2xl h-full">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 rounded-lg shadow     dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Update Class
              </h3>
            </div>
            {/* <!-- Modal body --> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div className="hidden">
                  <label
                    htmlFor="status"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Status
                  </label>
                  <input
                    defaultValue={"pending"}
                    {...register("status")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="default status is pending"
                  />
                </div>
                <div className="sm:col-span-2 hidden">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description *
                  </label>
                  <textarea
                    {...register("description")}
                    rows="5"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Write  feedback here"
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="className"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Class Name *
                  </label>
                  <input
                    {...register("class_name", {
                      required: "This field is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="class name"
                  />
                  {errors.class_name && (
                    <p className="text-rose-500 mt-1">
                      {errors.class_name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="product_url"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Class image url *
                  </label>
                  <input
                    type="url"
                    {...register("class_image", {
                      required: "This field is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="class image url"
                  />
                  {errors.class_image && (
                    <p className="text-rose-500 mt-1">
                      {errors.class_image.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="seller_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Instructor Name *
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="instructor name"
                    {...register("instructor_name", {
                      required: " This field is required",
                    })}
                  />

                  {errors.instructor_name && (
                    <p className="text-rose-500 mt-1">
                      {errors.instructor_name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="seller_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Instructor Email *
                  </label>
                  <input
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="instructor email"
                    {...register("instructor_email", {
                      required: "This field is required",
                    })}
                  />
                  {errors.instructor_email && (
                    <p className="text-rose-500 mt-1">
                      {errors.instructor_email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="seller_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Instructor image url *
                  </label>
                  <input
                    type="url"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="instructor image"
                    {...register("instructor_image", {
                      required: "This field is required",
                    })}
                  />
                  {errors.instructor_image && (
                    <p className="text-rose-500 mt-1">
                      {errors.instructor_image.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price *
                  </label>
                  <input
                    type="number"
                    {...register("price", {
                      required: " This field is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="$2999"
                  />

                  {errors.price && (
                    <p className="text-rose-500 mt-1">{errors.price.message}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Available Seats *
                  </label>
                  <input
                    type="number"
                    {...register("seats", {
                      required: "This field is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="12"
                  />

                  {errors.seats && (
                    <p className="text-rose-500 mt-1">{errors.seats.message}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-between">
                {true ? (
                  <button type="submit" className="btn btn-primary">
                    <svg
                      className="mr-1 -ml-1 w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Update Class
                  </button>
                ) : (
                  <div className="btn btn-primary w-44">
                    <CirclesWithBar
                      height="36"
                      width="36"
                      color="#ffffff"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      outerCircleColor=""
                      innerCircleColor=""
                      barColor=""
                      ariaLabel="circles-with-bar-loading"
                    />
                  </div>
                )}

                <Link
                  to={"/dashboard/instructor/my-classes"}
                  className="btn btn-info"
                >
                  go back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateClassForm;
