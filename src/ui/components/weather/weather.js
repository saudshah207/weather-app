import "./weather.css";
import { commonUiIdentifiers } from "../../commonUiIdentifiers.js";
import { textsToAttachToWeatherValue } from "../textsToAttachToWeatherValue.js";
import { cssUtils } from "../../cssUtils.js";
import { getDetail } from "../getDetail.js";

export function getWeatherComponent(weather) {
  const wrapper = document.createElement("div"),
    conditions = document.createElement("p");

  wrapper.classList.add(
    commonUiIdentifiers.weather,
    cssUtils.flex,
    cssUtils.flexColumn,
    cssUtils.standardGap,
    cssUtils.standardPadding,
  );
  wrapper.dataset.ui = commonUiIdentifiers.weather;

  conditions.textContent = weather.conditions;

  const temperature = getDetail({
      value: weather.temperature.temp,
      textToAttachToValue: { textAfter: textsToAttachToWeatherValue.degree },
      valueIdentifier: commonUiIdentifiers.temperatureValue,
    }),
    feelsLike = getDetail({
      value: weather.feelsLike,
      textToAttachToValue: {
        textBefore: "Feels Like",
        textAfter: textsToAttachToWeatherValue.degree,
      },
      valueIdentifier: commonUiIdentifiers.temperatureValue,
    }),
    humidity = getDetail({
      value: weather.humidity,
      textToAttachToValue: {
        textAfter: textsToAttachToWeatherValue.precentage,
      },
      title: "Humidity:",
    }),
    precipitation = getDetail({
      value: weather.precipitation,
      textToAttachToValue: {
        textAfter: textsToAttachToWeatherValue.milliMeter,
      },
      title: "Precipitation:",
    }),
    precipitationType = getDetail({
      value: weather.precipitationType ? weather.precipitationType : "none",
      title: "Precipitation Type:",
    });

  wrapper.append(
    conditions,
    temperature,
    feelsLike,
    humidity,
    precipitation,
    precipitationType,
  );

  return wrapper;
}
