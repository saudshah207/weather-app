export class Weather {
  #location;
  #conditions;
  #temperature;
  #feelsLike;
  #humidity;
  #precipitation = 0;
  #precipitationType;

  constructor({
    location,
    conditions,
    temperature,
    feelsLike,
    humidity,
    precipitation,
    precipitationType,
  }) {
    this.#location = location;
    this.#conditions = conditions;
    this.#temperature = temperature;
    this.#feelsLike = feelsLike;
    this.#humidity = humidity;
    this.precipitation = precipitation;
    this.precipitationType = precipitationType;
  }

  get location() {
    return this.#location;
  }
  get conditions() {
    return this.#conditions;
  }
  get temperature() {
    return this.#temperature;
  }
  get feelsLike() {
    return this.#feelsLike;
  }
  get humidity() {
    return this.#humidity;
  }
  get precipitation() {
    return this.#precipitation;
  }
  set precipitation(amount) {
    if (amount) this.#precipitation = amount;
  }
  get precipitationType() {
    return this.#precipitationType;
  }
  set precipitationType(types) {
    if (types) this.#precipitationType = types;
  }
}
