import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import CovidMap from "./CovidMap";
import LoadCountriesTask from "../tasks/LoadCountriesTask";
import Legend from "./Legend";
import legendItems from "../entities/LegendItems";

const Covid19 = () => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div style={{marginTop: '64px'}}>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div style={{ color: '#000'}}>
          <CovidMap countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Covid19;