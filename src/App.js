import React, { useState, useEffect } from "react";
import F1Teams from "./F1Teams";
import NavBar from './NavBar';
import SearchBar from "./SearchBar";
import { getDrivers } from "./utils/searchDrivers";


function App() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const driversData = await getDrivers();
      setDrivers(driversData);
    };

    fetchData();
  }, []);


  return (
      <div>
        <NavBar />
        <SearchBar placeholder="Enter a driver name..." data={drivers} />
        <F1Teams />
      </div>
  );
}
export default App;