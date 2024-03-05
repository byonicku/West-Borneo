import "./App.css";
import Header from "./component/Header";
import { Toaster } from "sonner";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import Destinasi from "./page/Destinasi.jsx";
import DetailDestinasi from "./page/DetailDestinasi.jsx";
import Footer from "./component/Footer.jsx";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // const enableFooter = ['/', '/about'];

  // const footer = enableFooter.includes(location.pathname);

  return (
    <>
      <Header />
      <Toaster position="top-center" richColors closeButton />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinasi" element={<Destinasi tags="" />} />
          <Route path="/destinasi/:slug" element={<DetailDestinasi />} />
        </Routes>
      </main>
      <Footer />
      {/* {footer && <Footer />} */}
    </>
  );
}

export default App;
