import "./App.css";
import Header from "./component/Header";
import { Toaster } from "sonner";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Destinasi from "./page/Destinasi.jsx";
import DetailDestinasi from "./page/DetailDestinasi.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Toaster position="top-center" richColors closeButton />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinasi" element={<Destinasi />} />
          <Route path="/destinasi/:slug" element={<DetailDestinasi />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
