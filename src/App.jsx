
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import { Nosotros } from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/sobre-nosotros" element={<Nosotros />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
