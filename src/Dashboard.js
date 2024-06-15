import React from 'react';
import Home from './Home';
import AboutUs from './About';
import Contact from './Contact';
import { BrowserRouter, Route, Routes, NavLink, Redirect, Link,Navigate } from 'react-router-dom';

function Dashboard() {
  return (
    <BrowserRouter>
      <div>
        <header className="header">
          <h1>Simple React Page</h1>
          <nav className="navbar">
            <ul>
              <li>
                <NavLink to="/home" activeClassName="select">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="select">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="select">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Route path="/home" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
