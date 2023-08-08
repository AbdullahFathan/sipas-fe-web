import { Link } from "react-router-dom";
import SearchIcon from "../assets/SearchIcon";

const AddData = () => {
  return (
    <section className="ml-[60px] mt-[35px] mr-[102px]">
      <h1 className="font-semibold text-2xl text-black mb-[20px]">
        Cari Nama Orang Tua Untuk Menambahkan Data Hasil Pemeriksaan
      </h1>

      <form>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border  border-border-grey rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari Nama Lengkap Ibu Atau Ayah Dari Bayi Atau Anak Disini"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 font-semibold bg-orange focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2"
          >
            Cari
          </button>
        </div>
      </form>

      <div className="my-3 py-2 px-4  border border-border-grey rounded-lg flex flex-row justify-between">
        <p>Nasrah Hayati Fitri / Muhammad Harizal Fikri</p>
        <Link to={"/parentProfile"}>
          <button type="button" className="text-light-violet outline-none">
            Lihat Profile
          </button>
        </Link>
      </div>

      <div className="my-3 py-2 px-4  border border-border-grey rounded-lg flex flex-row justify-between">
        <p>Nasrah Hayati Fitri / Muhammad Harizal Fikri</p>
        <button type="button" className="text-light-violet outline-none">
          Lihat Profile
        </button>
      </div>

      <div className="my-3 py-2 px-4  border border-border-grey rounded-lg flex flex-row justify-between">
        <p>Nasrah Hayati Fitri / Muhammad Harizal Fikri</p>
        <button type="button" className="text-light-violet outline-none">
          Lihat Profile
        </button>
      </div>
    </section>
  );
};
export default AddData;
