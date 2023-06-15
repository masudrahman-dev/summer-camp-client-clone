import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LazyLoad from "react-lazy-load";
const InstructorsSection = ({ data }) => {
  // console.log("data :>> ", data);

  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex items-center justify-center py-4 md:py-12 flex-wrap">
        <h1 className="text-5xl font-semibold text-gray-900 dark:text-white ">
          Instructors
        </h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-7">
        {data?.map((item) => (
          <div
            key={item?._id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className=" shadow-lg">
              <LazyLoad threshold={0.95}>
                <img
                  className="shadow-xl rounded-xl w-full"
                  src={item?.instructor_image}
                  alt=""
                />
              </LazyLoad>

              <div className="card-body ">
                <Link to={"/instructors"} className="card-title my-3 ">
                  <p className="badge badge-primary hover:bg-fuchsia-500 hover:border-none  uppercase p-4">
                    view all
                  </p>
                </Link>

                <p>Instructor Name : {item?.instructor_name}</p>
                <p>Email : {item?.instructor_email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsSection;
