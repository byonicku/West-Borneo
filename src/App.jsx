import { useState } from 'react'
import './App.css'
import Header from './component/Header';
import { Toaster } from 'sonner';
import { Route, Routes } from "react-router-dom";
import Home from './component/Home.jsx';

function App() {

  return (
    <>
      <Header/>
      <Toaster position="top-center" richColors closeButton />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App
