const selectors = {
  temperatureElement: "[data-ui='temperature']",
};

function getDetailRow(title, detail, identifier = null) {
  const row = document.createElement("tr"),
    rowHeader = document.createElement("th"),
    rowData = document.createElement("td");

  rowHeader.textContent = title;
  rowData.textContent = detail;

  if (identifier) row.dataset.ui = identifier;

  row.append(rowHeader, rowData);

  return row;
}

function getFahrenheitTemperature(celsiusValue) {
  return (celsiusValue * 9) / 5 + 32;
}

function getCelsiusTemperature(fahrenheitValue) {
  return ((fahrenheitValue - 32) * 5) / 9;
}

export function updateTemperatureValues(isPreferenceFahrenheit) {
  const temperatureElements = document.querySelectorAll(
    `${selectors.temperatureElement}`,
  );

  const getTemperatureValue = isPreferenceFahrenheit
    ? getFahrenheitTemperature
    : getCelsiusTemperature;

  for (const element of temperatureElements) {
    const temperatureValueElement = element.querySelector("td");

    temperatureValueElement.textContent = getTemperatureValue(
      temperatureValueElement.textContent,
    ).toFixed(1);
  }
}

export function getWeatherComponent(weather) {
  const wrapper = document.createElement("div"),
    conditions = document.createElement("p"),
    description = document.createElement("p");

  wrapper.dataset.ui = "weather";

  conditions.textContent = weather.conditions;
  description.textContent = weather.description;

  const details = document.createElement("table"),
    temperature = getDetailRow(
      "Temperature",
      weather.temperature,
      "temperature",
    ),
    feelsLike = getDetailRow("Feels Like", weather.feelsLike, "temperature"),
    humidity = getDetailRow("Humidity", weather.humidity),
    precipitation = getDetailRow("Precipitation", weather.precipitation),
    precipitationType = getDetailRow(
      "Precipitation Type",
      weather.precipitationType,
    );

  details.append(
    temperature,
    feelsLike,
    humidity,
    precipitation,
    precipitationType,
  );

  wrapper.append(conditions, description, details);

  return wrapper;
}
