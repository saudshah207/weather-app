import visualCrossing from "./visualCrossing.js";

export class WeatherApi {
  static #possibleApis = [visualCrossing];

  #api = visualCrossing;

  constructor(apiId) {
    this.api = apiId;
  }

  set api(apiId) {
    const api = WeatherApi.#possibleApis.find((api) => api.id === apiId);

    if (api) this.#api = api;
  }

  async getWeatherData(location = "lahore") {
    return await this.#api.getWeatherData(location);
  }
}
