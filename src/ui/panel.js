import { getWeatherComponent } from "./components/weather.js";

const selectors = {
  display: "[data-ui='weather-display']",
  location: "[data-ui='location']",
  weather: "[data-ui='weather']",
};

const display = document.querySelector(selectors.display);

const failedToFetchWeatherMessage =
  "Failed to fetch weather data.";

export const panel = {
  update(weather) {
    if (!weather) {
      display.append(failedToFetchWeatherMessage);

      return;
    }

    const location = display.querySelector(selectors.location),
      weatherInfo = display.querySelector(selectors.weather);

    location.textContent = weather.location;
    weatherInfo?.remove();

    display.append(getWeatherComponent(weather));
  },
};
