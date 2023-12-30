import React, { useState, useEffect } from "react";

export default function States() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const getCountries = async () => {
    try {
      const data = await fetch(
        "https://crio-location-selector.onrender.com/countries"
      );
      const res = await data.json();
      console.log(res, "res");
      // const newArr = new Set(res);
      // console.log(newArr, "new arr");
      // setCountries(newArr) // to remove duplicate entries
      setCountries(res);
      console.log(countries, "countries");
    } catch (e) {
      console.error(e);
    }
  };

  const getStates = async (selectedCountry) => {
    try {
      const data = await fetch(
        `https://crio-location-selector.onrender.com/country=${selectedCountry}/states`
      );
      const res = await data.json();
      console.log(res, "res");
      setStates(res);
      setSelectedState(""); // Reset state selection
      setCities([]); // Clear cities
      setSelectedCity(""); // Reset city selection
    } catch (e) {
      console.error(e);
    }
  };

  const getCities = async (selectedCountry, selectedState) => {
    try {
      const data = await fetch(
        `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`
      );
      const res = await data.json();
      console.log(res, "res");
      setCities(res);
      setSelectedCity(""); // Reset city selection
      // console.log(countries, "countries");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      getStates(selectedCountry);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState)
      getCities(selectedCountry, selectedState);
  }, [selectedCountry, selectedState]);

  return (
    <div>
      <h1>Select Location</h1>
      <div>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="" disabled>
            Select Country
          </option>
          {countries.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
          {/* {console.log(selectedCountry)} */}
        </select>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          disabled={!selectedCountry}
        >
          {/* {console.log(!selectedCountry, "!selectedCountry", selectedCountry)} */}
          <option value="" disabled>
            Select State
          </option>
          {states.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState}
        >
          <option value="" disabled>
            Select City
          </option>
          {cities.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      {selectedCity ? (
        <p>
          You selected <b>{selectedCity}</b>, {selectedState}, {selectedCountry}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
