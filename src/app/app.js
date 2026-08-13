import { WeatherApi } from "../api/WeatherApi.js";
import { Weather } from "./Weather.js";

const api = new WeatherApi("visual-crossing");

export const app = {
  async getWeather(location = "lahore") {
    const weather = new Weather(await api.getWeatherData(location));

    return weather;
  },
};
