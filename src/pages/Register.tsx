import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputFlied from "../components/InputFlied";
import axios from "axios";

interface FormUser {
  namaFaskes: string;
  email: string;
  password: string;
  alamatFaskes: string;
  nomorTelepon: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [formUser, setFormUser] = useState<FormUser>({
    namaFaskes: "",
    email: "",
    password: "",
    alamatFaskes: "",
    nomorTelepon: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormUser({ ...formUser, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "https://sipas-8de63a58cb4f.herokuapp.com/faskes",
        {
          namaFaskes: formUser.namaFaskes,
          email: formUser.email,
          password: formUser.password,
          alamatFasilitas: formUser.alamatFaskes,
          nomorTelepon: formUser.nomorTelepon,
        }
      );

      if (res.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="bg-violet h-screen flex items-center justify-center">
      <section className="flex items-center justify-center  flex-col md:flex-row gap-20">
        <p className="text-white text-[40px]">Registrasi Akun</p>

        {/* User Form */}
        <div className="bg-white py-8 px-14 w-[400px] md:w-[500px]">
          <form onSubmit={handleSubmit}>
            {/* NameFaskes Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                Nama Faskes<span className="text-dark-orange">*</span>
              </label>
              <InputFlied
                value={formUser.namaFaskes}
                onChangeValue={handleInputChange}
                name="namaFaskes"
              />
            </div>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email<span className="text-dark-orange">*</span>
              </label>
              <InputFlied
                value={formUser.email}
                onChangeValue={handleInputChange}
                name="email"
              />
            </div>
            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                Password<span className="text-dark-orange">*</span>
              </label>
              <InputFlied
                value={formUser.password}
                onChangeValue={handleInputChange}
                name="password"
              />
            </div>
            {/* Alamat Faskes Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                Alamat Faskes<span className="text-dark-orange">*</span>
              </label>
              <InputFlied
                value={formUser.alamatFaskes}
                onChangeValue={handleInputChange}
                name="alamatFaskes"
              />
            </div>
            {/* No Telepon Faskes Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                No Telepon Faskes<span className="text-dark-orange">*</span>
              </label>
              <InputFlied
                value={formUser.nomorTelepon}
                onChangeValue={handleInputChange}
                name="nomorTelepon"
              />
            </div>
            <button
              type="submit"
              className="bg-orange text-white  w-full block px-6 py-4 rounded-lg"
            >
              Masuk
            </button>
          </form>
          <p className="text-center font-normal mt-6 text-sm">
            Sudah Punya Akun?{" "}
            <Link to={"/"}>
              <span className="text-light-violet">Login Sekarang</span>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};
export default Register;
