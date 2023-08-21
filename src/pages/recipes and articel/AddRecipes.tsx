import Dropdown from "../../components/Dropdown";
import FliedPrenaghcyInput from "../../components/FliedPrenaghcyInput";
import InputFlied from "../../components/InputFlied";
import TwoButton from "../../components/TwoButton";
import MainLayout from "../../layout/Mainlayout";

const optionsRecipesFor = ["Orang Tua", "Bayi & Anak"];

const optionsRecipesAge = ["Trisemester 1", "Trisemester 2", "Trisemester 3"];
const optionsRecipesTime = [
  "Sarapan",
  "Makan Siang",
  "Makan Malam",
  "Snack Sehat",
];

const optionsRecipesMade = [
  "Sayuran",
  "Buah-Buahan",
  "Daging Sapi",
  "Daging Ayam",
  "Daging Ikan",
  "Telur",
  "Susu",
  "Lainnya",
];

const optionsRecipesTimeMade = [
  "10 - 20 Menit",
  "20 - 30 Menit",
  "30 - 60 Menit",
  "Diatas 60 Menit",
];

const AddRecipes = () => {
  const handleOptionSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
  };
  return (
    <MainLayout>
      <section className="w-full">
        <h1 className="heading1 text-center">Upload Resep Makanan Baru</h1>
        <h2 className="heading1 mt-8 mb-4">Detail Resep</h2>
        <FliedPrenaghcyInput
          heading="Gambar Cover Resep*"
          subtext="Pastikan gambar tidak berukuran lebih dari 2 mb"
          child={
            <div className=" w-full py-2 px-4 border border-border-grey rounded-lg flex flex-col sm:flex-row justify-between items-center">
              <p className="mb-2 sm:mb-0 sm:mr-4 text-grey font-normal">
                Silahkan Pilih 1 Foto Hasil Dari Resep Yang Dibuat
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
          heading="Judul Resep*"
          subtext="Pastikan Judul Resep Yang Kamu Masukkan Sesuai Dan Tidak Menggandung SARA"
          child={
            <InputFlied placeHolder="Masukkan Judul Dari Resepnya Disini" />
          }
        />

        <FliedPrenaghcyInput
          heading="Resep Diperuntukkan Kepada*"
          subtext=" "
          child={
            <Dropdown
              options={optionsRecipesFor}
              onSelect={handleOptionSelect}
            />
          }
        />

        <FliedPrenaghcyInput
          heading="Kategori Usia Sasaran Resep*"
          subtext=" "
          child={
            <Dropdown
              options={optionsRecipesAge}
              onSelect={handleOptionSelect}
            />
          }
        />

        <FliedPrenaghcyInput
          heading="Resep Cocok Dimakan Sebagai*"
          subtext=" "
          child={
            <Dropdown
              options={optionsRecipesTime}
              onSelect={handleOptionSelect}
            />
          }
        />

        <FliedPrenaghcyInput
          heading="Bahan Makanan Utama Dari Resep*"
          subtext=" "
          child={
            <Dropdown
              options={optionsRecipesMade}
              onSelect={handleOptionSelect}
            />
          }
        />
        <FliedPrenaghcyInput
          heading="Lama Durasi Untuk Memasak Resep*"
          subtext=" "
          child={
            <Dropdown
              options={optionsRecipesTimeMade}
              onSelect={handleOptionSelect}
            />
          }
        />

        <div className=" w-[70%]">
          <h3 className="heading1 mt-8 mb-4">Bahan Yang Perlu Disiapkan</h3>
          <textarea
            rows={4}
            className="block p-2.5 w-full border border-border-grey text-sm text-black  rounded-lg   "
            placeholder="Tuliskan Bahan Yang Perlu Disiapkan Disini"
          />
        </div>
        <div className=" w-[70%]">
          <h3 className="heading1 mt-8 mb-4">Cara Membuat</h3>
          <textarea
            rows={4}
            className="block p-2.5 w-full border border-border-grey text-sm text-black  rounded-lg   "
            placeholder="Tuliskan Cara/Langkah Untuk Membuatnya Disini"
          />
        </div>
        <div className=" w-[70%]">
          <h3 className="heading1 mt-8 mb-4">Informasi Nilai Gizi</h3>
          <textarea
            rows={4}
            className="block p-2.5 w-full border border-border-grey text-sm text-black  rounded-lg   "
            placeholder="Tuliskan Detail Informasi Dari Nilai Gizi Yang Terkandung Pada Resepnya Disini"
          />
        </div>

        <TwoButton
          textButton1="Batalkan Simpan"
          textButton2="Upload Resep"
          route="/menuRecipes"
        />
      </section>
    </MainLayout>
  );
};
export default AddRecipes;
