import axios from "axios";
import Spinner from "../../../../components/Spinner/Spinner";
import { Link } from "react-router-dom";
import useClassesGET from "../../../../hooks/useClassesGET";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CirclesWithBar } from "react-loader-spinner";
import { Tree } from "@phosphor-icons/react";

const ManageClasses = () => {
  const { data, isLoading, refetch } = useClassesGET();

  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleStatus = (classId, newStatus) => {
    // console.log(classId, newStatus);
    axios
      .patch(
        `${
          import.meta.env.VITE_BASE_URL
        }/classes/update-status/?classId=${classId}&newStatus=${newStatus}`
      )
      .then((response) => {
        // console.log(response.data);
        // Do something with the response
        refetch();
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
        refetch();
      });

    if (newStatus === "denied") {
      setId(classId);
    }
  };

  const onSubmit = (descData) => {
    const { description } = descData;
    handleDesc(id, description);
  };

  const handleDesc = (classId, description) => {
    console.log(classId, description);
    axios
      .patch(
        `${
          import.meta.env.VITE_BASE_URL
        }/classes/feedback/?classId=${classId}&newDesc=${description}`
      )
      .then((response) => {
        console.log(response.data);
        // Do something with the response
        reset();
        toast.success("Feedback Successfully Updated");
        // setLoading(true);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div
        className={` ${
          isOpen ? "" : "hidden"
        }  flex justify-center z-50 fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2z-50 w-full`}
      >
        <div className="  p-4 w-full max-w-2xl h-full">
          {/* <!-- Modal content --> */}
          <div className="relative p-4 rounded-lg shadow-2xl     dark:bg-gray-800 sm:p-5">
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
                    {...register("description")}
                    rows="5"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Write  feedback here"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-between">
                {loading ? (
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="submit"
                    className="btn btn-primary"
                  >
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
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="btn btn-ghost"
                >
                  close
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />

      <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          {/*  */}
          <div className="relative overflow-hidden   shadow-md dark:bg-gray-800 sm:rounded-lg">
            {/* table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      #
                    </th>
                    <th scope="col" className="px-4 py-3">
                      class image
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Instructor Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Instructor Email
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Available Seats
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Deny
                    </th>

                    <th scope="col" className="px-4 py-3">
                      Status
                    </th>

                    <th scope="col" className="px-4 py-3">
                      Feedback
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Approve
                    </th>

                    <th scope="col" className="px-4 py-3">
                      Deny
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => (
                    <tr
                      key={item?._id}
                      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="w-4 px-4 py-3">
                        <div className="flex items-center">{index + 1}</div>
                      </td>
                      <th
                        scope="row"
                        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          src={item?.class_image}
                          alt="iMac Front Image"
                          className="w-auto h-8 mr-3"
                        />
                        {item?.lass_name}
                      </th>
                      <td className="px-4 py-2">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                          {item?.class_name}
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                          {item?.instructor_name}
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                          {item?.instructor_email}
                        </span>
                      </td>
                      <td className="px-4 py-2 font-medium  text-gray-900 whitespace-nowrap dark:text-white">
                        <p className="text-center">{item?.seats}</p>
                      </td>
                      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        $ {item?.price}
                      </td>

                      <td className="px-4  py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item?.status}
                      </td>
                      <td className="px-4  py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item?.status === "approved" ||
                        item?.status !== "denied" ? (
                          <button disabled className="btn btn-info">
                            Send Feedback
                          </button>
                        ) : (
                          <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="btn btn-info"
                          >
                            Send Feedback
                          </button>
                        )}
                      </td>

                      <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-info">
                        {item?.status === "approved" ||
                        item?.status === "denied" ? (
                          <button disabled className="btn btn-success">
                            Approve
                          </button>
                        ) : (
                          <button
                            onClick={() => handleStatus(item?._id, "approved")}
                            className="btn btn-success"
                          >
                            Approve
                          </button>
                        )}
                      </td>
                      <td className="px-4 link py-2 font-medium text-gray-900 whitespace-nowrap dark:text-warning">
                        {item?.status === "approved" ||
                        item?.status === "denied" ? (
                          <button disabled className="btn btn-warning ">
                            deny
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              handleStatus(item?._id, "denied");
                            }}
                            className="btn btn-warning "
                          >
                            deny
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <nav
              className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>
                of
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500   rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500   border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500   rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageClasses;
