import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
