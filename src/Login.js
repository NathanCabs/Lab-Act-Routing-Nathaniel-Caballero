import React, { useState } from "react";
import "./Contact";

function Login({ setToken, credentials, setCurrentPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const foundCredential = credentials.find(
      (credential) =>
        credential.username == username && credential.password == password
    );
    if (foundCredential) {
      setToken("testlogin");
      setCurrentPage("dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Login" />
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
}
export default Login;
