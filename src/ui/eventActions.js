import { app } from "../app/app.js";
import { EventAction } from "./EventAction.js";
import { panel } from "./panel.js";

function displayLocationWeather(weather) {
  panel.update(weather);
}

const weather = await app.getWeather().catch((error) => console.error(error));

displayLocationWeather(weather);

const eventActions = [
  new EventAction("get-weather-for-location", async function (formElements) {
    const weather = await app.getWeather(formElements.location.value);

    console.log(weather);

    displayLocationWeather(weather);
  }),
];

export { eventActions };
