import { FaHome, FaList, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

  return (
    <div className="flex bg-[#F6F6F6]">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <h1 className="p-6">
          <span className="font-bold">House</span> <br /> Hunter
        </h1>
        <ul className="menu p-4">
          <>
            <li>
              <NavLink to="/dashboard/instructor">
                <FaHome></FaHome>
                Instructor Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addHouse">
                <FaUtensils></FaUtensils>
                Add Course
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageHouse">
                <FaList></FaList>
                Manage Course
              </NavLink>
            </li>
          </>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
