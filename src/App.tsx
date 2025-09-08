import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SnowOverlay from "./components/SnowOverlay";

import Home from "./pages/Home";
import ONama from "./pages/ONama";

import Pitanja from "./pages/Pitanja";
import Galerija from "./pages/Galerija";
import Kontakt from "./pages/Kontakt";
import Trening from "./pages/Trening";

export default function App() {
  return (
    <>
      <Header />
      <SnowOverlay />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nama" element={<ONama />} />
          <Route path="/trening" element={<Trening />} />
          <Route path="/pitanja" element={<Pitanja />} />
          <Route path="/galerija" element={<Galerija />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
