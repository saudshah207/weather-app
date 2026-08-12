const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const key = "TMCV6XL4RPK6ZAKXUYHMQJKLG";

export default {
  id: "visual-crossing",

  async getWeatherData(location) {
    const data = await fetch(
      `${url}${location}?key=${key}&unitGroup=metric`,
    ).then((response) => response.json());

    const currentConditions = data.currentConditions;

    return {
      conditions: currentConditions.conditions,
      description: data.description,
      temperature: currentConditions.temp,
      feelsLike: currentConditions.feelslike,
      humidity: currentConditions.humidity,
      precipitation: currentConditions.precip,
      precipitationType: currentConditions.preciptype,
    };
  },
};
