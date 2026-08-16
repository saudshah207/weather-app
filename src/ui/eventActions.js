import { app } from "../app/app.js";
import { EventAction } from "./EventAction.js";
import { catchErrors } from "./catchErrors.js";
import { panel } from "./panel.js";

app.getWeather = catchErrors(app.getWeather);

function displayLocationWeather(weather) {
  panel.removeLoading();

  panel.update(weather);

  const isPreferenceFahrenheit =
    panel.temperatureScalePreference === "fahrenheit";

  if (isPreferenceFahrenheit) panel.updateTemperature(isPreferenceFahrenheit);
}

panel.displayLoading();

const weather = await app.getWeather();

displayLocationWeather(weather);

const eventActions = [
  new EventAction("get-weather-for-location", async function (
    target,
    formElements,
  ) {
    panel.displayLoading();

    const weather = await app.getWeather(formElements.location.value);

    displayLocationWeather(weather);
  }),
  new EventAction("toggle-temperature-scale", function (target) {
    panel.toggleTemperatureScale(target);
  }),
];

export { eventActions };
