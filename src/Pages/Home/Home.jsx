
import useCourse from "../../Hook/useCourse";
import Banner from "./Banner";
import DisplayCategory from "./DisplayCategory";

const Home = () => {
    const [allCourse] = useCourse();
    console.log(allCourse);
  return (
    <div>
      <div className="">
        <Banner></Banner>
      </div>

      <h2 className="text-center mt-20 text-3xl  md:text-5xl font-bold text-teal-500">
      Course Category
      </h2>
      <div className="px-4 lg:px-0 grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-20">
        {allCourse.map((course) => (
          <DisplayCategory key={course._id} course={course}></DisplayCategory>
        ))}
      </div>
    </div>
  );
};

export default Home;
