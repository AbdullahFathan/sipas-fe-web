import { Link, useNavigate } from "react-router-dom";

const PrenagcyData = () => {
  const navigate = useNavigate();
  return (
    <section className="ml-[60px] mt-[35px] mr-[102px] w-full">
      <h1 className="font-semibold text-4xl text-center">Data Kehamilan</h1>

      <div className="mt-8">
        <h1 className="font-semibold text-2xl">Detail Pemeriksaan</h1>
        <h3 className="font-medium text-xl my-4">
          Tanggal Pemeriksaan: 18 Okt 2023
        </h3>
        <h3 className="font-medium text-xl">Diperiksa Oleh: Dr. Sumiati</h3>
      </div>

      <div className="mt-8">
        <h1 className="font-semibold text-2xl">Hasil Pemeriksaan</h1>
        <h3 className="font-medium text-xl mt-5">Usia Kandungan: 16 minggu</h3>
        <h3 className="font-medium text-xl mt-5">Tekanan Darah: 120/80 mmHg</h3>
        <h3 className="font-medium text-xl mt-5">Berat Badan Ibu: 89 kg</h3>
        <h3 className="font-medium text-xl mt-5">
          Status Kehamilan: <span className="text-green">Baik</span>
        </h3>

        <h3 className="font-medium text-xl mt-5">
          Pesan Tambahan: Jaga pola makannya ya bunda biar bayinya tetap sehat
        </h3>
      </div>

      <div className="flex flex-row my-8 w-full gap-4  items-center">
        <button
          onClick={() => navigate(-1)}
          className=" w-[50%] h-[46px] bg-transparent  text-ms text-orange font-semibold py-2 px-4 border border-border-grey rounded-lg"
        >
          Kembali
        </button>
        <Link to={"/inputPrenagcyData"} className="w-[50%] h-[46px]">
          <button
            type="button"
            className=" bg-orange  text-white  rounded-lg block text-ms font-semibold w-full h-full  "
          >
            Tambahkan Data Kehamilan
          </button>
        </Link>
      </div>
    </section>
  );
};
export default PrenagcyData;