import { NavLink } from "react-router-dom";
import { SidebarData } from "../constant/Sidebar";

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className=" z-40 w-64 ml-[100px] h-screen left-0  bg-neutral-white"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-autobg-neutral-white">
        <p className=" ml-3 mt-3 p-2 mb-10 text-xl font-semibold">
          Puskesmas Kota Lumut
        </p>
        <ul className="space-y-2 font-medium">
          {SidebarData.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className="flex items-center p-2 text-gray-900 hover:text-white hover:bg-orange "
              >
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {item.title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
