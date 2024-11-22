import React, { useState } from "react";

  const RegisterHours = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [hours, setHours] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hours < 0 || hours > 60) {
      setMessage("Hours must be between 0 and 60."); // Mensaje actualizado
      return;
    }
    setMessage("Hours successfully registered!");
    console.log({ employeeId, hours });
  };  

  return (
    <div>
      <h2>Register Hours</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Employee ID:
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Hours:
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterHours;