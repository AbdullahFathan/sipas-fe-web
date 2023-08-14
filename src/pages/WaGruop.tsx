import { Link } from "react-router-dom";
import MainLayout from "../layout/Mainlayout";

const WaGruop = () => {
  return (
    <MainLayout>
      <section className="ml-[60px] mt-[35px] mr-[102px]">
        <h1 className="heading1 mb-5">List Link Grup Whatsapp</h1>
        <Link to={"#"} className="w-full">
          <button
            type="button"
            className=" bg-orange  text-white  rounded-lg block text-ms font-semibold w-full h-[46px]"
          >
            Tambahkan Link Grup Whatsapp
          </button>
        </Link>

        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="my-3 py-3 px-4  border border-border-grey rounded-lg flex flex-row justify-between"
          >
            <p>Grup Pengumuman Informasi Vaksin Puskesmas Lumut</p>
            <Link to={"#"}>
              <button type="button" className="text-light-violet outline-none">
                Lihat Detail
              </button>
            </Link>
          </div>
        ))}
      </section>
    </MainLayout>
  );
};
export default WaGruop;
