import "./base.css";

async function getWeatherData(location) {
  const key = "TMCV6XL4RPK6ZAKXUYHMQJKLG";

  const data = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${key}&unitGroup=metric`,
  ).then((response) => response.json());

  return data;
}

async function getWeather() {
  const data = await getWeatherData("lahore");

  const weather = data.currentConditions;

  console.log(data, weather);

  return {
    conditions: weather.conditions,
    description: data.description,
    temperature: weather.temp,
    feelsLike: weather.feelslike,
    humidity: weather.humidity,
    precipitation: weather.precip,
    precipitationType: weather.preciptype,
  };
}

getWeather()
  .then((weather) => console.log(weather))
  .catch((error) => console.error(error));
