import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddData from "./pages/AddData";
import ResepMakanan from "./pages/ResepMakanan";
import WaGruop from "./pages/WaGruop";
import ParentProfile from "./pages/ParentProfile";
import PrenagcyData from "./pages/PrenagcyData";
import InputPrenagcyData from "./pages/InputPrenagcyData";
import ChildData from "./pages/ChildData";
import InputChildData from "./pages/InputChildData";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainLayout from "./layout/Mainlayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homePage" element={<MainLayout />} />

        <Route path="/addData" element={<AddData />} />
        <Route path="/resepMakanan" element={<ResepMakanan />} />
        <Route path="/waGruop" element={<WaGruop />} />
        <Route path="/parentProfile" element={<ParentProfile />} />
        <Route path="/prenagcyData" element={<PrenagcyData />} />
        <Route path="/inputPrenagcyData" element={<InputPrenagcyData />} />
        <Route path="/childData" element={<ChildData />} />
        <Route path="/inputChildData" element={<InputChildData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
