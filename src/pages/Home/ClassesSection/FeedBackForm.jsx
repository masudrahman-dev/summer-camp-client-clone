import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { CirclesWithBar } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";

const FeedBackForm = () => {
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
                Write Feedback
              </h3>
            </div>
            {/* <!-- Modal body --> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description *
                  </label>
                  <textarea
                    {...register("description", {
                      required: "please write feedback",
                    })}
                    rows="5"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Write  feedback here"
                  ></textarea>
                  {errors.description && (
                    <p className="text-rose-500 mt-1">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                {loading ? (
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
                    Send Feedback
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
                  to={"/dashboard/admin/manage-classes"}
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

export default FeedBackForm;
