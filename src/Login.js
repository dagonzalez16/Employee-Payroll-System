import React, { useState } from "react";

  const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0); // Nuevo estado
  const [locked, setLocked] = useState(false); // Estado de bloqueo
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (locked) {
      setMessage("Account locked. Please contact support.");
      return;
    }

    if (username === "admin" && password === "password123") {
      setMessage("Login successful!");
      setAttempts(0); // Reinicia intentos tras éxito
    } else {
      setAttempts((prev) => prev + 1);
      if (attempts + 1 >= 5) {
        setLocked(true); // Bloquea la cuenta tras 5 intentos
        setMessage("Too many failed attempts. Account locked.");
      } else {
        setMessage(`Invalid credentials. Attempts left: ${4 - attempts}`);
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          disabled={locked} // Bloquea entrada si está bloqueado
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={locked}
        />
      </label>
      <br />
      <button onClick={handleLogin} disabled={locked}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
};