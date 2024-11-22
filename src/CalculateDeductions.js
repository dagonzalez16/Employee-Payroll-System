import React, { useState } from "react";

const CalculateDeductions = () => {
  const [grossPay, setGrossPay] = useState("");
  const [deductions, setDeductions] = useState(null);

  const handleCalculate = () => {
    const fixedDeduction = 50; // Ejemplo
    const percentageDeduction = 0.1 * grossPay;
    setDeductions(fixedDeduction + percentageDeduction);
  };

  return (
    <div>
      <h2>Calculate Deductions</h2>
      <label>
        Gross Pay:
        <input
          type="number"
          value={grossPay}
          onChange={(e) => setGrossPay(e.target.value)}
          required
        />
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate Deductions</button>
      {deductions !== null && <p>Total Deductions: ${deductions.toFixed(2)}</p>}
    </div>
  );
};

export default CalculateDeductions;