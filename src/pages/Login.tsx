import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormUser {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [formUser, setFormUser] = useState<FormUser>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormUser((prevFormUser) => ({
      ...prevFormUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can perform your login logic using formUser.email and formUser.password
    console.log("Logging in with:", formUser.email, formUser.password);

    navigate("/homePage");
  };

  return (
    <main className="bg-violet h-screen flex items-center justify-center">
      <div className="flex items-center justify-center flex-col md:flex-row gap-20">
        <p className="text-white text-[40px]">
          Selamat Datang Admin <br /> Layanan Kesehatan
        </p>

        {/* User Form */}
        <div className="bg-white py-16 px-14 w-[400px] md:w-[500px]">
          <p className="font-semibold mb-8 text-xl">Log in Akunmu Disini</p>
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email<span className="text-dark-orange">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formUser.email}
                onChange={handleInputChange}
                placeholder="Masukkan alamat email anda disini"
                className="w-full px-3 py-2 border rounded border-border-grey"
              />
            </div>
            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                Password<span className="text-dark-orange">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formUser.password}
                onChange={handleInputChange}
                placeholder="Masukkan kata sandi anda disini"
                className="w-full px-3 py-2 border rounded border-border-grey"
              />
            </div>
            <button
              type="submit"
              className="bg-orange text-white  w-full block px-6 py-4 rounded-lg"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
