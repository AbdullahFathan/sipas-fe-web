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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <div className=" flex flex-col">
        <Navbar />
        <div className="flex flex-row">
          <Sidebar />
          <Routes>
            <Route path="/addData" element={<AddData />} />
            <Route path="/resepMakanan" element={<ResepMakanan />} />
            <Route path="/waGruop" element={<WaGruop />} />
            <Route path="/parentProfile" element={<ParentProfile />} />
            <Route path="/prenagcyData" element={<PrenagcyData />} />
            <Route path="/inputPrenagcyData" element={<InputPrenagcyData />} />
            <Route path="/childData" element={<ChildData />} />
            <Route path="/inputChildData" element={<InputChildData />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
