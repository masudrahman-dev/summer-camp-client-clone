import { motion } from "framer-motion";

const CustomarReview = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-20 mt-20">
      <div className="mx-auto text-center ">
        <h3 className="mb-6 text-5xl font-bold text-neutral-800 dark:text-neutral-200">
          Our student Feedback
        </h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0">
          It's Awesome to show our feedback
        </p>
      </div>

      {/* <!-- Container for the Testimonials --> */}
      <div className="grid gap-6 text-center  md:grid-cols-3 lg:gap-12">
        {/* <!-- First Testimonial --> */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-12 md:mb-0 shadow-lg p-8 rounded-lg"
        >
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Maria Smantha</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
            Voice artist
          </h6>
          <p className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24"
            >
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
        </motion.div>

        {/* <!-- Second Testimonial --> */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-12 md:mb-0 shadow-lg p-8 rounded-lg"
        >
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
            Guiterist
          </h6>
          <p className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24"
            >
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid commodi.
          </p>
        </motion.div>

        {/* <!-- Third Testimonial --> */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-0 shadow-lg p-8 rounded-lg"
        >
          {/* <!-- Fourth Testimonial --> */}
          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">John Smith</h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-400">
              Singer
            </h6>
            <p className="mb-4 text-neutral-600 dark:text-neutral-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomarReview;
