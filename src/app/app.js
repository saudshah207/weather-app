import { WeatherApi } from "../api/WeatherApi.js";
import { Weather } from "./Weather.js";

const api = new WeatherApi("visual-crossing");

export const app = {
  async getWeather(location = "lahore") {
    const weather = await api.getWeatherData(location);

    weather.current = new Weather(weather.current);

    weather.forecast.forEach((day, index, forecast) => {
      forecast[index] = new Weather(day);
    });

    console.log(weather);

    return weather;
  },
};
