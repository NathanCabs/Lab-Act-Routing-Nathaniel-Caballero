import React, { useState } from "react";
import Home from "./Home";
import AboutUs from "./About";
import Contact from "./Contact";
import {BrowserRouter, Route, Routes, NavLink, Redirect, Link, Navigate } from 'react-router-dom';
import './App.css';

function Dashboard() {
  
  return (
    <header className="header">
      <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Routing WebPage</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element = {<Home/>} />              
          <Route path="/about" element = {<AboutUs />} />
          <Route path="/contact" element = {<Contact />} />  
          <Route path="/*" element={<Navigate to="/"/> }/>       
        </Routes>

      </BrowserRouter>
    </div>
    </header>
  );
}
export default Dashboard;
