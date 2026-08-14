import {
  getWeatherComponent,
  updateTemperatureValues,
} from "./components/weather.js";

const cssClasses = {
  displayNone: "display-none",
};

const selectors = {
  display: "[data-ui='weather-display']",
  location: "[data-ui='location']",
  weather: "[data-ui='weather']",
  errorMessage: "[data-ui='error-message']",
};

const display = document.querySelector(selectors.display);

const errorMessageElement = display.querySelector(selectors.errorMessage),
  failedToFetchWeatherMessage = "Failed to fetch weather data.";

export const panel = {
  temperatureScalePreference: "celsius",

  update(weather) {
    if (!weather) {
      errorMessageElement.classList.remove(cssClasses.displayNone);
      errorMessageElement.textContent = failedToFetchWeatherMessage;

      return;
    }

    errorMessageElement.classList.add(cssClasses.displayNone);

    const location = display.querySelector(selectors.location),
      weatherInfo = display.querySelector(selectors.weather);

    location.textContent = weather.location;
    weatherInfo?.remove();

    display.append(getWeatherComponent(weather));
  },

  toggleTemperatureScale(toggle) {
    this.temperatureScalePreference = toggle.dataset.temperatureScale;

    const isPreferenceFahrenheit =
      this.temperatureScalePreference === "fahrenheit";

    if (isPreferenceFahrenheit) {
      toggle.dataset.temperatureScale = "celsius";
      toggle.textContent = "celsius";
    } else {
      toggle.dataset.temperatureScale = "fahrenheit";
      toggle.textContent = "fahrenheit";
    }

    this.updateTemperature(isPreferenceFahrenheit);
  },

  updateTemperature(isPreferenceFahrenheit) {
    updateTemperatureValues(isPreferenceFahrenheit);
  },
};
