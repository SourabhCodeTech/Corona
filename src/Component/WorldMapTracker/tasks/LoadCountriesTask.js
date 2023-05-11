import papa from "papaparse";
import legendItems from "../entities/LegendItems";
import features from "../data/countries.json";
import caseCountry from '../data/cases_country.csv';

// features: countriesJson.features;

class LoadCountryTask {
  covidUrl = caseCountry;

  setState = null;
  myCountries = features.features

  load = (setState) => {
    this.setState = setState;

    papa.parse(this.covidUrl, {
      download: true,
      header: true,
      complete: (result) => this.#processCovidData(result.data),
    });
  };

  #processCovidData = (covidCountries) => {
    for (let i = 0; i < this.myCountries.length; i++) {
      const country = this.myCountries[i];
      const covidCountry = covidCountries.find(
        (covidCountry) => covidCountry.ISO3 === country.properties.ISO_A3
      );

      country.properties.confirmed = 0;
      country.properties.confirmedText = 0;

      if (covidCountry != null) {
        let confirmed = Number(covidCountry.Confirmed);
        country.properties.confirmed = confirmed;
        country.properties.confirmedText = this.#formatNumberWithCommas(
          confirmed
        );
      }
      this.#setCountryColor(country);
    }

    this.setState(this.myCountries);
  };

  #setCountryColor = (country) => {
    const legendItem = legendItems.find((item) =>
      item.isFor(country.properties.confirmed)
    );

    if (legendItem != null) country.properties.color = legendItem.color;
  };

  #formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default LoadCountryTask;
