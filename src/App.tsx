import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddData from "./pages/check up data/AddData";
import ResepMakanan from "./pages/recipes and articel/ResepMakanan";
import WaGruop from "./pages/Wagroup/WaGruop";
import ParentProfile from "./pages/check up data/ParentProfile";
import PrenagcyData from "./pages/check up data/PrenagcyData";
import InputPrenagcyData from "./pages/check up data/InputPrenagcyData";
import ChildData from "./pages/check up data/ChildData";
import InputChildData from "./pages/check up data/InputChildData";
import Login from "./pages/Login";
import PermintaanBantuan from "./pages/request help/PermintaanBantuan";
import Profil from "./pages/profile/Profil";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homePage" element={<Homepage />} />

        <Route path="/addData" element={<AddData />} />
        <Route path="/resepMakanan" element={<ResepMakanan />} />
        <Route path="/waGruop" element={<WaGruop />} />
        <Route path="/parentProfile" element={<ParentProfile />} />
        <Route path="/prenagcyData" element={<PrenagcyData />} />
        <Route path="/inputPrenagcyData" element={<InputPrenagcyData />} />
        <Route path="/childData" element={<ChildData />} />
        <Route path="/inputChildData" element={<InputChildData />} />
        <Route path="/permintaanBantuan" element={<PermintaanBantuan />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
