import TwoButton from "../../components/TwoButton";
import MainLayout from "../../layout/Mainlayout";

const DetailArticel = () => {
  return (
    <MainLayout>
      <h1 className="heading1 text-center">Detail Artikel Kesehatan</h1>

      <div className="my-8">
        <h2 className="heading1 ">Detail Artikel</h2>
        <p className="my-4 text-lg font-medium">
          Gambar Cover Artikel: Foto Artikel.jpg
        </p>
        <p className="mb-4 text-lg font-medium">
          Judul Artikel: Perhatian! Berikut 8 tanda-tanda gejala umum stunting
          pada anak
        </p>
        <p className="mb-4 text-lg font-medium">Ditinjau Oleh: Dr. Sumiati</p>
      </div>

      <div className="my-8">
        <h2 className="heading1 ">Cara Membuat</h2>
        <p className="mt-5 text-lg font-medium">
          Berikut ini adalah beberapa gejala stunting pada anak yang harus
          diwaspadai oleh para orangtua, diantaranya adalah: <br /> <br />
          1. Pertumbuhan tulang pada anak yang tertunda <br /> 2. Berat badan
          rendah apabila dibandingkan dengan anak seusianya <br /> 3. Sang anak
          berbadan lebih pendek dari anak seusianya <br /> 4. Proporsi tubuh
          yang cenderung normal tapi tampak lebih muda/kecil untuk seusianya.
          <br /> <br />
          Upaya pencegahan untuk mengatasi stunting adalah hal yang utama. Para
          orangtua diharapkan bisa rutin melakukan pemeriksaan kandungan ke
          fasilitas kesehatan terdekat, rutin mengkonsumsi Tablet Tambah Darah,
          serta memenuhi asupan gizi, seperti protein hewani yang baik bagi
          tumbuh kembang janin. Remaja putri aktif minum tablet tambah darah 1
          tablet seminngu sekali. Pemberian ASI ekslusif pada bayi selama 6
          bulan. bayi di atas enam bulan diberikan konsumsi protein hewani dan
          tetap melanjutkan ASI. Jangan lupa datang ke Posyandu setiap bulan
          untuk memantau pertumbuhan dan perkembangan serta imunisasi balita.
        </p>
      </div>

      <TwoButton
        textButton1="Hapus Artikel"
        textButton2="Ubah Detail Artikel"
        route="#"
      />
    </MainLayout>
  );
};
export default DetailArticel;
