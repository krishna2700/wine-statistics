import React from "react";
import "./App.css";

const StatisticsTable = ({ title, data }) => {
  return (
    <div>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {data.map((item) => (
              <th key={item.class}>Class {item.class}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mean</td>
            {data.map((item) => (
              <td key={item.class}>{item.mean.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Median</td>
            {data.map((item) => (
              <td key={item.class}>{item.median.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Mode</td>
            {data.map((item) => (
              <td key={item.class}>{item.mode.join(", ")}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;
