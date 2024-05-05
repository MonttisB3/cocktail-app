import React from "react";
import {BrowserRouter as Router, Routes, Route, NavLink,} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import CocktailsPage from "./Pages/CoctailsPage";
import AboutPage from "./Pages/AboutPage";
import "./App.css"

function App() {

  return (
    <div className="App">
      <Router> 
       <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")} end> Home </NavLink>
        <NavLink to="/cocktails" className={({ isActive }) => (isActive ? "active-link" : "")} > Cocktails </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")} > About </NavLink>
       </nav>

       <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cocktails" element={<CocktailsPage />} />
        <Route path="/about" element={<AboutPage />} />
       </Routes>
      </Router> 
    </div>
  );
}

export default App;
