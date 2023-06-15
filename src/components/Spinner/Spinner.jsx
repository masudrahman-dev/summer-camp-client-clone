import { CirclesWithBar, FidgetSpinner } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <CirclesWithBar
        height="100"
        width="100"
        color="#d946ef"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default Spinner;
