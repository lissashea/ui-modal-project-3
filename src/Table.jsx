import React from "react";
import "../src/styles/Tables.css";


function Table({ data, columns }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column, index) => (
                <td key={index}>{item[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Winners() {
  const data = require("./utils/winnersData.json")["2022"];
  const columns = ["GRANDPRIX", "DATE", "WINNER", "CAR", "LAPS"];

  return <Table data={data} columns={columns} />;
}

function Bios() {
  const data = require("./utils/fastestLapData.json")["2022"];
  const columns = ["GRANDPRIX", "DRIVER", "CAR", "TIME"];

  return <Table data={data} columns={columns} />;
}

function Calendar() {
  const data = require("./utils/calendarDates.json")["2023"];
  const columns = ["number", "name", "circuit", "date"];

  return <Table data={data} columns={columns} />;

}

export { Table, Winners, Bios, Calendar };
