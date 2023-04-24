import React, { useState, useEffect } from "react";
import { ArrowIcon, ArrowIcon2 } from './ArrowIcon';
import PopulateDriver from "./PopulateDriver";
import "../src/styles/SearchBar.css";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    setFilteredData([]);
    setWordEntered("");
  }, [data]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((driver) => {
      return driver.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <button className="searchButton" onClick={clearInput}>
          {filteredData.length === 0 ? (
            <ArrowIcon />
          ) : (
            <ArrowIcon2 />
          )}
        </button>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((driver) => {
            return <PopulateDriver key={driver.id} driver={driver} />;
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;