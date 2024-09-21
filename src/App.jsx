import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home';
import NatureWallpapers from './component/naturewallpaper';
import CarsWallpapers from './component/carswall';
import OsWallpapers from './component/oswallpaper';
import Login from './component/login';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/Nature-wallpapers" element={<NatureWallpapers />} /> {/* Nature wallpaper  page */}
        <Route path="/cars-wallpapers" element={<CarsWallpapers />} /> {/* Cars Wallpapers page */}
        <Route path="/os-wallpapers" element={<OsWallpapers />} /> {/* Bike Wallpapers page */}
        <Route path="/login" element={<Login />} /> {/* Bike Wallpapers page */}
      </Routes>
    </Router>
  );
}

export default App;