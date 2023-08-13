import { NavLink } from "react-router-dom";

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
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 hover:text-white hover:bg-orange "
            >
              <span className="ml-3">Beranda</span>
            </a>
          </li>
          <li>
            <NavLink
              to={"/addData"}
              className="flex items-center p-2 text-gray-900 hover:text-white hover:bg-orange "
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                Data Pemeriksaan
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/waGruop"}
              className="flex items-center p-2 text-gray-900 hover:text-white hover:bg-orange   "
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                Link Grup Wa
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/resepMakanan"}
              className="flex items-center p-2 text-gray-900 hover:text-white hover:bg-orange "
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                Resep Makanan
              </span>
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 hover:text-white hover:bg-orange  "
            >
              <span className="flex-1 ml-3 whitespace-nowrap">
                Permintaan Bantuan
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 hover:text-white hover:bg-orange"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 hover:text-white hover:bg-orange"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Keluar</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
