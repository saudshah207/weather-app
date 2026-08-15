import "./weather.css";
import { cssUtils } from "../cssUtils.js";

const identifiers = {
  weather: "weather",
  temperatureValue: "temperature-value",
};

const selectors = {
  temperatureValue: `[data-ui='${identifiers.temperatureValue}']`,
};

export function getDetail({ value, textToAttachToValue, title, valueIdentifier }) {
  value = Array.isArray(value) ? value.join(", ") : value;

  const space = " ";

  const detail = document.createElement("p"),
    valueElement = document.createElement("span");

  if (title) {
    const titleElement = document.createElement("span");
    titleElement.textContent = title;

    titleElement.classList.add(cssUtils.fontWeightBold);
    detail.append(titleElement, space);
  }

  valueElement.textContent = value;

  const textBefore = textToAttachToValue?.textBefore
      ? textToAttachToValue.textBefore
      : "",
    textAfter = textToAttachToValue?.textAfter
      ? textToAttachToValue.textAfter
      : "";

  const detailChildren = [textBefore, space, valueElement, textAfter];
  detail.append(...detailChildren);

  if (valueIdentifier) valueElement.dataset.ui = valueIdentifier;

  return detail;
}

function getFahrenheitTemperature(celsiusValue) {
  return (celsiusValue * 9) / 5 + 32;
}

function getCelsiusTemperature(fahrenheitValue) {
  return ((fahrenheitValue - 32) * 5) / 9;
}

export function updateTemperatureValues(isPreferenceFahrenheit) {
  const temperatureValueElements = document.querySelectorAll(
    `${selectors.temperatureValue}`,
  );

  const getTemperatureValue = isPreferenceFahrenheit
    ? getFahrenheitTemperature
    : getCelsiusTemperature;

  for (const element of temperatureValueElements) {
    element.textContent = getTemperatureValue(element.textContent).toFixed(1);
  }
}

export function getWeatherComponent(weather) {
  const wrapper = document.createElement("div"),
    conditions = document.createElement("p");

  wrapper.classList.add(
    identifiers.weather,
    cssUtils.flex,
    cssUtils.flexColumn,
    cssUtils.standardGap,
  );
  wrapper.dataset.ui = identifiers.weather;

  conditions.textContent = weather.conditions;

  const temperature = getDetail({
      value: weather.temperature.temp,
      textToAttachToValue: { textAfter: "*" },
      valueIdentifier: identifiers.temperatureValue,
    }),
    feelsLike = getDetail({
      value: weather.feelsLike,
      textToAttachToValue: { textBefore: "Feels Like", textAfter: "*" },
      valueIdentifier: identifiers.temperatureValue,
    }),
    humidity = getDetail({
      value: weather.humidity,
      textToAttachToValue: { textAfter: "%" },
      title: "Humidity:",
    }),
    precipitation = getDetail({
      value: weather.precipitation,
      textToAttachToValue: { textAfter: "mm" },
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
