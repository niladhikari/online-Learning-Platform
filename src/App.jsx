import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Share/Navbar";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className=" min-h-[calc(100vh-225px)] max-w-7xl mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
