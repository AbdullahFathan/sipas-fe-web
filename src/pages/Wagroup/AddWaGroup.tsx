import FliedPrenaghcyInput from "../../components/FliedPrenaghcyInput";
import InputFlied from "../../components/InputFlied";
import TwoButton from "../../components/TwoButton";
import MainLayout from "../../layout/Mainlayout";

const AddWaGroup = () => {
  return (
    <MainLayout>
      <section>
        <h1 className="heading1 mb-5 text-center">Tambahkan Grup Whatsapp</h1>
        <div>
          <FliedPrenaghcyInput
            heading="Nama Grup*"
            subtext="Pastikan Anda memasukkan nama grup yang benar dan tidak mengandung SARA"
            child={
              <InputFlied placeHolder="Masukkan Nama Dari Grup Whatsapp Anda Disini" />
            }
          />
          <FliedPrenaghcyInput
            heading="Link Grup Whatsapp*"
            subtext="Pastikan link url dari grup whatsapp yang Anda masukkan valid, dan bisa di join oleh orang tua"
            child={
              <InputFlied
                placeHolder={"Masukkan Link Dari Grup Whatsapp Anda Disini"}
              />
            }
          />
        </div>
        <TwoButton
          textButton1="Batalkan Tambah Grup"
          textButton2="Tambahkan Grup"
          route="/waGruop"
        />
      </section>
    </MainLayout>
  );
};
export default AddWaGroup;
