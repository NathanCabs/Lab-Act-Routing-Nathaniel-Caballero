import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";

const credentials = [
  { username: "admin", password: "admin" },
  { username: "user", password: "password" },
];

function App() {
  const [token, setToken] = useState();
  const [currentPage, setCurrentPage] = useState("login");
  if (currentPage == "login") {
    return (
      <Login
        setToken={setToken}
        credentials={credentials}
        setCurrentPage={setCurrentPage}
      />
    );
  } else if (currentPage == "dashboard") {
    return <Dashboard />;
  }
}
export default App;
