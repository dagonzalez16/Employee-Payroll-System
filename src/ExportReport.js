import React from "react";

const ExportReport = ({ payrollData }) => {
  const handleExport = (format) => {
    if (format === "PDF") {
      console.log("Exporting as PDF...", payrollData);
    } else if (format === "CSV") {
      console.log("Exporting as CSV...", payrollData);
    }
  };

  return (
    <div>
      <h2>Export Payroll Report</h2>
      <button onClick={() => handleExport("PDF")}>Export as PDF</button>
      <button onClick={() => handleExport("CSV")}>Export as CSV</button>
    </div>
  );
};

export default ExportReport;