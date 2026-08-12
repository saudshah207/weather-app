export class Weather {
  #conditions;
  #description;
  #temperature;
  #feelsLike;
  #humidity;
  #precipitation;
  #precipitationType;

  constructor({
    conditions,
    description,
    temperature,
    feelsLike,
    humidity,
    precipitation,
    precipitationType,
  }) {
    this.#conditions = conditions;
    this.#description = description;
    this.#temperature = temperature;
    this.#feelsLike = feelsLike;
    this.#humidity = humidity;
    this.#precipitation = precipitation;
    this.#precipitationType = precipitationType;
  }
}
