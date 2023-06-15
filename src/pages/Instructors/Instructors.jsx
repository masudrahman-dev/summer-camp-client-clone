import Spinner from "../../components/Spinner/Spinner";
import useClassesGET from "../../hooks/useClassesGET";
import "../../assets/css/lazyLoad.css";
import LazyLoad from "react-lazy-load";
import { motion } from "framer-motion";

const Instructors = () => {
  const { data, isLoading } = useClassesGET();
  // console.log(data);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-32">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex items-center justify-center py-4 md:py-12 flex-wrap">
          <h1 className="text-5xl font-semibold text-gray-900 dark:text-white ">
            Our Instructors
          </h1>
        </div>
        <div className="grid grid-cols-1 mt-12 md:grid-cols-2  lg:grid-cols-3 gap-7">
          {data?.map((item) => (
            <motion.div
              key={item?._id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative shadow-lg">
                <LazyLoad threshold={0.95}>
                  <img
                    className="shadow-xl rounded-xl w-full"
                    src={item?.instructor_image}
                    alt=""
                  />
                </LazyLoad>

                <div className="card-body">
                  {/* <h2 className="card-title">{item?.instructor_name}</h2> */}

                  <p>Instructor Name : {item?.instructor_name}</p>
                  <p>Email : {item?.instructor_email}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
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
