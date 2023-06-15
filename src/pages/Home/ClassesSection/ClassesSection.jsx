import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LazyLoad from "react-lazy-load";
const ClassesSection = ({ data }) => {
  // console.log('data :>> ', data);
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex items-center justify-center py-4 md:py-12 flex-wrap">
        <h1 className="text-5xl font-semibold text-gray-900 dark:text-white ">
          Classes
        </h1>
      </div>
      <div className="grid grid-cols-1 mt-12 md:grid-cols-2  lg:grid-cols-3 gap-7">
        {data?.map((item) => (
          <motion.div
            key={item?._id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative ">
              <LazyLoad threshold={0.95}>
                <img
                  className="shadow-xl rounded-xl w-full"
                  src={item?.class_image}
                  alt=""
                />
              </LazyLoad>

              <Link to={"/classes"} className="absolute top-8 right-8 ">
                <p className="badge badge-primary hover:bg-fuchsia-500 hover:border-none  uppercase p-4">
                  {item?.class_name}
                </p>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClassesSection;

// const ClassesSectionCard = ({ image, name }) => {
//   return (

//   );
// };

/**
 * https://bridgemusic.in/wp-content/uploads/2017/10/guitar-inst.webp
 * https://bridgemusic.in/wp-content/uploads/2017/10/vocal-inst.webp
 * https://bridgemusic.in/wp-content/uploads/2017/10/piano-inst.webp
 * https://bridgemusic.in/wp-content/uploads/2017/10/drum-inst.webp
 * https://bridgemusic.in/wp-content/uploads/2017/10/electronic-keyboards.webp
 * https://bridgemusic.in/wp-content/uploads/2022/06/Himanshu-C-New.jpg
 * https://bridgemusic.in/wp-content/uploads/2022/11/5-ways-learning-a-musica-instrument-improves-mental-health.webp
 * https://bridgemusic.in/wp-content/uploads/2022/10/5-Common-Mistakes-to-Avoid-when-Learning-to-Play-the-Guitar.webp
 *
 *
 */
