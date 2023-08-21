import FliedPrenaghcyInput from "../../components/FliedPrenaghcyInput";
import InputFlied from "../../components/InputFlied";
import TwoButton from "../../components/TwoButton";
import MainLayout from "../../layout/Mainlayout";

const AddArticel = () => {
  return (
    <MainLayout>
      <section className="w-full">
        <h1 className="heading1 text-center">Upload Artikel Baru</h1>
        <h2 className="heading1 mt-8 mb-4">Detail Artikel</h2>
        <FliedPrenaghcyInput
          heading="Gambar Cover Artikel*"
          subtext="Pastikan gambar tidak berukuran lebih dari 2 mb"
          child={
            <div className=" w-full py-2 px-4 border border-border-grey rounded-lg flex flex-col sm:flex-row justify-between items-center">
              <p className="mb-2 sm:mb-0 sm:mr-4 text-grey font-normal">
                Silahkan Pilih 1 Foto Hasil Dari Artikel Yang Dibuat
              </p>

              <button
                type="button"
                className="text-light-violet outline-none mt-2 sm:mt-0"
              >
                Pilih Foto
              </button>
            </div>
          }
        />
        <FliedPrenaghcyInput
          heading="Judul Artikel*"
          subtext="Pastikan Judul Artikel Yang Kamu Masukkan Sesuai Dan Tidak Menggandung SARA"
          child={
            <InputFlied placeHolder="Masukkan Judul Dari Resepnya Disini" />
          }
        />

        <FliedPrenaghcyInput
          heading="Ditinjau Oleh*"
          subtext="Pastikan Dokter atau Tenaga Kesehatan Tersebut Kredible Untuk Memberikan Izin Artikel Ini Layak Untuk Dipublish"
          child={
            <InputFlied placeHolder="Masukkan Nama Dokter Atau Tenaga Kesehatan Yang Telah Meninjau Isi Artikel Sebelum di Upload" />
          }
        />

        <div className=" w-[70%]">
          <h3 className="heading1 mt-8 mb-4">Isi Artikel</h3>
          <textarea
            rows={4}
            className="block p-2.5 w-full border border-border-grey text-sm text-black  rounded-lg   "
            placeholder="Tuliskan Isi Dari Artikelnya Disini"
          />
        </div>

        <TwoButton
          textButton1="Batalkan Simpan"
          textButton2="Upload Artikel"
          route="/menuArticle"
        />
      </section>
    </MainLayout>
  );
};
export default AddArticel;
