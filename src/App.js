import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
//import { BrowserRouter, Route, Routes, NavLink, Redirect, Link,Navigate, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const credentials = [
{ username: 'admin', password: 'admin' },
{ username: 'user', password: 'password' },
];


function App() {
  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      <div className='App'>
        
           <Routes>
          <Route path="/" element={<Login setToken={setToken} credentials={credentials} />} />
          <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  ); 

};
export default App;
