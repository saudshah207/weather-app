import "./forecastDay.css";
import { commonUiIdentifiers } from "../../commonUiIdentifiers.js";
import { cssUtils } from "../../cssUtils.js";
import { getDetail } from "../getDetail.js";

const identifiers = {
  forecastDay: "forecast-day",
};

export function getForecastDayComponent(weather) {
  const wrapper = document.createElement("li");

  wrapper.dataset.ui = commonUiIdentifiers.weather;

  wrapper.classList.add(
    identifiers.forecastDay,
    cssUtils.flex,
    cssUtils.flexColumn,
    cssUtils.standardGap,
  );

  const high = getDetail({
      value: weather.temperature.high,
      textToAttachToValue: { textAfter: "*" },
      valueIdentifier: commonUiIdentifiers.temperatureValue,
    }),
    low = getDetail({
      value: weather.temperature.low,
      textToAttachToValue: { textAfter: "*" },
      valueIdentifier: commonUiIdentifiers.temperatureValue,
    }),
    precipitation = getDetail({
      value: weather.precipitation,
      textToAttachToValue: { textAfter: "mm" },
    });

  wrapper.append(high, low, precipitation);

  return wrapper;
}
