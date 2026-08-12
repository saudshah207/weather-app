import { app } from "../app/app.js";
import { EventAction } from "./EventAction.js";

const eventActions = [
  new EventAction("get-weather-for-location", async function (formElements) {
    console.log(await app.getWeather(formElements.location.value));
  }),
];

export { eventActions };
