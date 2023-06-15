import { Link, useRouteError } from "react-router-dom";
import logo from "../../assets/Images/logo.svg";
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className=" w-screen h-screen bg-gray-950 flex justify-center items-center ">
      <div className="text-center text-xl text-white   flex flex-col items-center">
        <img className="w-36" src={logo} alt="" />
        <h1 className="mt-7  ">{error?.status}</h1>
        <p className="my-2">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={"/"} className="btn btn-primary mt-12">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
