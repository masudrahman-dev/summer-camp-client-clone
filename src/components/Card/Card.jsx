import LazyLoad from "react-lazy-load";
import "../../assets/css/lazyLoad.css";
const Card = ({ item, handleAddToCart }) => {
  const {
    _id,
    seats,
    class_image,
    class_name,
    instructor_name,
    instructor_email,
    price,
    role,
  } = item;

  return (
    <>
      <div
        className={`card p-5 ${
          seats == 0 ? "bg-rose-600" : "bg-base-100"
        }  dark:text-white shadow-xl`}
      >
        <figure>
          <LazyLoad threshold={0.95}>
            <img src={class_image} alt="Shoes" className="rounded-lg" />
          </LazyLoad>
        </figure>
        <div className="card-body"></div>
        <h2 className="card-title">{class_name}</h2>

        <p>Instructor Name : {instructor_name}</p>
        <p>Email : {instructor_email}</p>
        <p>Available seats : {seats}</p>
        <p>Price : $ {price}</p>
        <div className="card-actions justify-end">
          {role === "admin" || role == "instructor" || seats == "0" ? (
            <button disabled className="btn btn-primary">
              Select
            </button>
          ) : (
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-primary"
            >
              Select
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
