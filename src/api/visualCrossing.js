const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const key = "TMCV6XL4RPK6ZAKXUYHMQJKLG";

function getRequiredWeatherData(
  data,
  precipitation = null,
  precipitationProbability = null,
  precipitationType = null,
) {
  return {
    dateString: data.datetime,
    conditions: data.conditions,
    temperature: { temp: data.temp, low: data.tempmin, high: data.tempmax },
    feelsLike: data.feelslike,
    humidity: data.humidity,
    precipitation: precipitation ? precipitation : data.precip,
    precipitationProbability: precipitationProbability
      ? precipitationProbability
      : data.precipprob,
    precipitationType: precipitationType ? precipitationType : data.preciptype,
  };
}

export default {
  id: "visual-crossing",

  async getWeatherData(location) {
    const data = await fetch(
      `${url}${location}?key=${key}&unitGroup=metric&include=current`,
    ).then((response) => response.json());

    console.log(data);

    const today = data.days[0];

    const weather = {
      location: data.resolvedAddress,
      forecast: [],
      current: getRequiredWeatherData(
        data.currentConditions,
        today.precip,
        today.precipprob,
        today.preciptype,
      ),
    };

    for (const day of data.days) {
      weather.forecast.push(getRequiredWeatherData(day));
    }

    return weather;
  },
};
