import { WeatherApi } from "../api/WeatherApi.js";
import { Weather } from "./Weather.js";

const api = new WeatherApi("visual-crossing");

const weather = new Weather(await api.getWeatherData());

console.log(weather);
