import React, { useState } from "react";
import { getSbiData } from "../utils/sbiData";

const quarters = ["Q1", "Q2", "Q3", "Q4"];

const Dashboard = () => {
  const [selectedQuarter, setSelectedQuarter] = useState(quarters[0]);
  const sbiMetrics = getSbiData(selectedQuarter);

  const handleQuarterChange = (event) => {
    setSelectedQuarter(event.target.value);
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center h-screen xsm:w-[360px] xsm:h-[640px]">
      <h1 className="text-7xl font-bold text-blue-600 drop-shadow m-20 hover:cursor-pointer xsm:text-4xl xsm:text-center xsm:whitespace-nowrap xsm:mt-5 xsm:mb-5">
        SBI Dashboard
      </h1>
      <div className="flex xsm:my-10">
        <label
          htmlFor="quarter"
          className="text-3xl font-semibold text-slate-950 xsm:text-lg"
        >
          Select Quarter :{" "}
        </label>
        <select
          id="quarter"
          className="mx-4 rounded-md px-5 bg-black text-white"
          value={selectedQuarter}
          onChange={handleQuarterChange}
        >
          {quarters.map((quarter) => (
            <option key={quarter} value={quarter} className="rounded-3xl">
              {quarter}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-10 justify-center my-32 xsm:flex-col xsm:gap-5 xsm:my-0">
        <div className="bg-white shadow-xl rounded-xl px-16 py-10 text-center hover:cursor-pointer xsm:px-3 xsm:py-2">
          <h2 className="text-xl font-semibold mb-1">Revenue</h2>
          <p>{sbiMetrics.revenue}</p>
        </div>

        <div className="bg-white shadow-xl rounded-xl px-14 py-10 text-center hover:cursor-pointer xsm:px-3 xsm:py-2">
          <h2 className="text-xl font-semibold mb-1">Net Income</h2>
          <p>{sbiMetrics.netIncome}</p>
        </div>

        <div className="bg-white shadow-xl rounded-xl px-14 py-10 text-center hover:cursor-pointer xsm:px-3 xsm:py-2">
          <h2 className="text-xl font-semibold mb-1">Net Profit</h2>
          <p>{sbiMetrics.netProfit}</p>
        </div>

        <div className="bg-white shadow-xl rounded-xl px-14 py-10 text-center hover:cursor-pointer xsm:px-3 xsm:py-2">
          <h2 className="text-xl font-semibold mb-1">Operating Income</h2>
          <p>{sbiMetrics.operatingIncome}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
