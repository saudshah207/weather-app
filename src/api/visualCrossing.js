const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const key = "TMCV6XL4RPK6ZAKXUYHMQJKLG";

export default {
  id: "visual-crossing",

  async getWeatherData(location = "lahore") {
    const data = await fetch(
      `${url}${location}?key=${key}&unitGroup=metric`,
    ).then((response) => response.json());

    return {
      conditions: data.currentConditions.conditions,
      description: data.description,
      temperature: data.currentConditions.temp,
      feelsLike: data.currentConditions.feelslike,
      humidity: data.currentConditions.humidity,
      precipitation: data.currentConditions.precip,
      precipitationType: data.currentConditions.preciptype,
    };
  },
};
