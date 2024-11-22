import React, { useState } from "react";

const CalculatePayroll = () => {
  const [hourlyRate, setHourlyRate] = useState("");
  const [hoursWorked, setHoursWorked] = useState("");
  const [payroll, setPayroll] = useState(null);

  const handleCalculate = () => {
    const grossPay = hoursWorked * hourlyRate;
    setPayroll(grossPay);
  };

  return (
    <div>
      <h2>Calculate Payroll</h2>
      <label>
        Hourly Rate:
        <input
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Hours Worked:
        <input
          type="number"
          value={hoursWorked}
          onChange={(e) => setHoursWorked(e.target.value)}
          required
        />
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      {payroll !== null && <p>Gross Pay: ${payroll.toFixed(2)}</p>}
    </div>
  );
};

export default CalculatePayroll;