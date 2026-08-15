const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const key = "TMCV6XL4RPK6ZAKXUYHMQJKLG";

function getRequiredWeatherData(data) {
  return {
    conditions: data.conditions,
    temperature: { temp: data.temp, low: data.tempmin, high: data.tempmax },
    feelsLike: data.feelslike,
    humidity: data.humidity,
    precipitation: data.precip,
    precipitationType: data.preciptype,
  };
}

export default {
  id: "visual-crossing",

  async getWeatherData(location) {
    const data = await fetch(
      `${url}${location}?key=${key}&unitGroup=metric&include=current`,
    ).then((response) => response.json());

    console.log(data);

    const weather = {
      location: data.resolvedAddress,
      forecast: [],
      current: getRequiredWeatherData(data.currentConditions),
    };

    for (const day of data.days) {
      weather.forecast.push(getRequiredWeatherData(day));
    }

    return weather;
  },
};
