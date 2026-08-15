import { cssUtils } from "./cssUtils.js";
import { commonUiIdentifiers } from "./commonUiIdentifiers.js";
import { updateTemperatureValues } from "./temperatureConverter.js";
import { getWeatherComponent } from "./components/weather/weather.js";
import { getForecastDayComponent } from "./components/forecastDay/forecastDay.js";

const selectors = {
  display: "[data-ui='weather-display']",
  location: "[data-ui='location']",
  weather: `[data-ui='${commonUiIdentifiers.weather}']`,
  forecast: "[data-ui='forecast']",
  errorMessage: "[data-ui='error-message']",
};

const display = document.querySelector(selectors.display);

const forecastElement = display.querySelector(selectors.forecast);

const errorMessageElement = display.querySelector(selectors.errorMessage),
  failedToFetchWeatherMessage = "Failed to fetch weather data.";

function removeElements(elements) {
  if (!elements) return;

  for (const element of elements) {
    element.remove();
  }
}

export const panel = {
  temperatureScalePreference: "celsius",

  update(weather) {
    if (!weather) {
      errorMessageElement.classList.remove(cssUtils.displayNone);
      errorMessageElement.textContent = failedToFetchWeatherMessage;

      return;
    }

    errorMessageElement.classList.add(cssUtils.displayNone);

    const location = display.querySelector(selectors.location),
      weatherElements = display.querySelectorAll(selectors.weather);

    location.textContent = weather.location;

    removeElements(weatherElements);

    display.insertBefore(getWeatherComponent(weather.current), forecastElement);

    for (const day of weather.forecast) {
      forecastElement.append(getForecastDayComponent(day));
    }
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
