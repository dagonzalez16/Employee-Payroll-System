import React, { useState } from "react";

  const CalculateDeductions = () => {
  const [grossPay, setGrossPay] = useState("");
  const [deductionRate, setDeductionRate] = useState(10); // Nueva configuración (porcentaje)
  const [deductions, setDeductions] = useState(null);

  const handleCalculate = () => {
    const fixedDeduction = 50;
    const percentageDeduction = (deductionRate / 100) * grossPay; // Ajuste dinámico
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
      <label>
        Deduction Rate (%):
        <input
          type="number"
          value={deductionRate}
          onChange={(e) => setDeductionRate(e.target.value)}
          required
        />
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate Deductions</button>
      {deductions !== null && <p>Total Deductions: ${deductions.toFixed(2)}</p>}
    </div>
  );
};