import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
      </div>
    </>
  );
};

export default Homepage;
