import { Link } from "react-router-dom";

const ServiceTeam = () => {
  return (
    <>
      <section className="mt-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex justify-center items-center">
              <img
                src="https://bridgemusic.in/wp-content/uploads/2022/09/Entertainment3.png"
                alt=""
              />
            </div>
            <div className="text-center lg:text-start">
              <h2 className="text-2xl text-fuchsia-500">
                Why Bridge Music Academy ?
              </h2>
              <p className="my-5 text-5xl ">Connecting Souls With Music</p>
              After achieving Grade 8 in Piano and Theory of Music, I was keen
              to setup an institute that would offer the same level of
              international standard music education right here in India. I soon
              realized that none of the institutes in Delhi provide the very
              foundation that can enable students to pursue higher studies
              abroad. Hence I formed Bridge Music Academy with a vision to
              provide this very foundation to the students. An International
              standard music education that not only allows them to achieve
              their musical aspiration but allows them to pursue music
              professionally.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceTeam;
