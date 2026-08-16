import "./forecastDay.css";
import { commonUiIdentifiers } from "../../commonUiIdentifiers.js";
import { textsToAttachToWeatherValue } from "../textsToAttachToWeatherValue.js";
import { cssUtils } from "../../cssUtils.js";
import { getDetail } from "../getDetail.js";

const identifiers = {
  forecastDay: "forecast-day",
};

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const today = new Date();
today.setHours(0, 0, 0, 0);

export function getForecastDayComponent(weather) {
  const wrapper = document.createElement("li");

  wrapper.dataset.ui = commonUiIdentifiers.weather;

  wrapper.classList.add(
    identifiers.forecastDay,
    cssUtils.flex,
    cssUtils.flexColumn,
    cssUtils.standardGap,
  );

  const weatherDate = weather.date;

  let dayOfWeek = daysOfWeek[weatherDate.getDay()];

  if (
    dayOfWeek === daysOfWeek[today.getDay()] &&
    today.getTime() === weatherDate.getTime()
  )
    dayOfWeek = "Today";

  const high = getDetail({
      value: weather.temperature.high,
      textToAttachToValue: { textAfter: textsToAttachToWeatherValue.degree },
      valueIdentifier: commonUiIdentifiers.temperatureValue,
    }),
    low = getDetail({
      value: weather.temperature.low,
      textToAttachToValue: { textAfter: textsToAttachToWeatherValue.degree },
      valueIdentifier: commonUiIdentifiers.temperatureValue,
    }),
    precipitation = getDetail({
      value: weather.precipitation,
      textToAttachToValue: { textAfter: textsToAttachToWeatherValue.milliMeter },
    }),
    day = getDetail({
      value: dayOfWeek,
    }),
    date = getDetail({
      value: `${weatherDate.getMonth() + 1}/${weatherDate.getDate()}`,
    });

  wrapper.append(high, low, precipitation, day, date);

  return wrapper;
}
