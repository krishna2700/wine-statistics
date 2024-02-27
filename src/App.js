import React, { useEffect, useState } from "react";
import WineData from "./WineData";
import {
  calculateMean,
  calculateMedian,
  calculateMode,
  calculateGamma,
} from "./utils";
import StatisticsTable from "./StatisticsTable";
import "./App.css";

const App = () => {
  const [flavanoidsStatistics, setFlavanoidsStatistics] = useState([]);
  const [gammaStatistics, setGammaStatistics] = useState([]);

  useEffect(() => {
    const calculateStatistics = (property, data) => {
      const classes = Array.from(new Set(data.map((item) => item.Alcohol)));

      const result = classes.map((clazz) => {
        const classData = data.filter((item) => item.Alcohol === clazz);
        const values = classData.map((item) => parseFloat(item[property]));

        return {
          class: clazz,
          mean: calculateMean(values),
          median: calculateMedian(values),
          mode: calculateMode(values),
        };
      });

      return result;
    };

    setFlavanoidsStatistics(calculateStatistics("Flavanoids", WineData));

    const wineDataWithGamma = calculateGamma(WineData);
    setGammaStatistics(calculateStatistics("Gamma", wineDataWithGamma));
  }, []);

  return (
    <div>
      <h1>Wine Statistics</h1>
      <StatisticsTable
        title="Flavanoids Statistics"
        data={flavanoidsStatistics}
      />
      <StatisticsTable title="Gamma Statistics" data={gammaStatistics} />
    </div>
  );
};

export default App;
