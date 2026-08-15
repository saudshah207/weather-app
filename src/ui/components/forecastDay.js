import "./forecastDay.css";
import { getDetail } from "./weather.js";
import { cssUtils } from "../cssUtils.js";

const identifiers = {
  forecastDay: "forecast-day",
  weather: "weather",
  temperatureValue: "temperature-value",
};

export function getForecastDayComponent(weather) {
  const wrapper = document.createElement("li");

  wrapper.dataset.ui = identifiers.weather;

  wrapper.classList.add(
    identifiers.forecastDay,
    cssUtils.flex,
    cssUtils.flexColumn,
    cssUtils.standardGap,
  );

  const high = getDetail({
      value: weather.temperature.high,
      textToAttachToValue: { textAfter: "*" },
      valueIdentifier: identifiers.temperatureValue,
    }),
    low = getDetail({
      value: weather.temperature.low,
      textToAttachToValue: { textAfter: "*" },
      valueIdentifier: identifiers.temperatureValue,
    }),
    precipitation = getDetail({
      value: weather.precipitation,
      textToAttachToValue: { textAfter: "mm" },
    });

  wrapper.append(high, low, precipitation);

  return wrapper;
}
