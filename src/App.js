import './App.css';
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import { Teams } from './pages/Teams/Teams';
import { Events } from './pages/Events/Events';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Home } from './pages/Home/Home';
import { useState } from 'react';
import Timeline from './pages/Timeline/Timeline';

function App() {

  const [page, setPage] = useState('home')

  return (
    <BrowserRouter>
      <Navbar page={page} setPage={setPage} />
      <Routes>
        <Route path="/" element={<Home page={page} setPage={setPage} />} />
        <Route path="/home" element={<Home page={page} setPage={setPage} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path='/teams' element={<Teams page={page} setPage={setPage} />} />
        <Route path='/events' element={<Events page={page} setPage={setPage} />} />
        <Route path='/timeline' element={<Timeline page={page} setPage={setPage} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
