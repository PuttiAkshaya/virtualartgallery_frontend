import React, { useState, useContext } from "react";
import { RoleContext } from "../context/RoleContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(RoleContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("visitor");

  const handleLogin = () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    login(role);

    if (role === "admin") navigate("/admin");
    else if (role === "artist") navigate("/artist");
    else if (role === "curator") navigate("/curator");
    else navigate("/gallery");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="visitor">Visitor</option>
          <option value="artist">Artist</option>
          <option value="curator">Curator</option>
          <option value="admin">Admin</option>
        </select>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;