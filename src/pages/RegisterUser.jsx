import React, { useState } from "react";
import "./register.css";

function RegisterUser() {
  const [type, setType] = useState("");
  const [register_number, setRegister_number] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        register_number,
        name,
        email,
        password
      }),
    });
  };
  return (
    <div className="add-client">
      <h1>Add new User</h1>
      <div className="form-group">
        <form onSubmit={submit}>
          <div className="form-line">
            <select
              className="select-field"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Admin">Administrator</option>
              <option value="User">User</option>
            </select>
            <input
              type="text"
              placeholder="register_number"
              onChange={(e) => setRegister_number(e.target.value)}
            />
          </div>

          <div className="form-line">
           
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-line">
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Create User</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
