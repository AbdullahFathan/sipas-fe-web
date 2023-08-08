import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AddData from "./pages/AddData";
import ResepMakanan from "./pages/ResepMakanan";
import WaGruop from "./pages/WaGruop";
import Navbar from "./components/Navbar";
import ParentProfile from "./pages/ParentProfile";
import PrenagcyData from "./pages/PrenagcyData";
import InputPrenagcyData from "./pages/InputPrenagcyData";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/addData" element={<AddData />} />
          <Route path="/resepMakanan" element={<ResepMakanan />} />
          <Route path="/waGruop" element={<WaGruop />} />
          <Route path="/parentProfile" element={<ParentProfile />} />
          <Route path="/prenagcyData" element={<PrenagcyData />} />
          <Route path="/inputPrenagcyData" element={<InputPrenagcyData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
