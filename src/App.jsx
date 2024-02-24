import './App.css'
import Header from './component/Header';
import { Toaster } from 'sonner';
import { Route, Routes } from "react-router-dom";
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Destinasi from './component/Destinasi.jsx';

function App() {

  return (
    <>
      <Header/>
      <Toaster position="top-center" richColors closeButton />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinasi" element={<Destinasi />} />
        </Routes>
      </main>
    </>
  )
}

export default App
