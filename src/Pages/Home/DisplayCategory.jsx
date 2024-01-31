import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DisplayCategory = ({ course }) => {
  const { _id,courseName, image } = course;



  return (
    <div>
      <Link to={`/details/${_id}`}>
        <div className="card px-3 md:px-0 bg-base-100 shadow-xl">
          <figure className="">
            <img
              src={image}
              alt="brands photo"
              className="rounded-t-xl w-full h-72"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">{courseName}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

DisplayCategory.propTypes = {
    course: PropTypes.object,
};

export default DisplayCategory;