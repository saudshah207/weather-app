import { app } from "../app/app.js";
import { EventAction } from "./EventAction.js";
import { panel } from "./panel.js";

function displayLocationWeather(weather) {
  panel.update(weather);

  const isPreferenceFahrenheit =
    panel.temperatureScalePreference === "fahrenheit";

  if (isPreferenceFahrenheit) panel.updateTemperature(isPreferenceFahrenheit);
}

const weather = await app.getWeather().catch((error) => console.error(error));

displayLocationWeather(weather);

const eventActions = [
  new EventAction("get-weather-for-location", async function (
    target,
    formElements,
  ) {
    const weather = await app.getWeather(formElements.location.value);

    displayLocationWeather(weather);
  }),
  new EventAction("toggle-temperature-scale", function (target) {
    panel.toggleTemperatureScale(target);
  }),
];

export { eventActions };
