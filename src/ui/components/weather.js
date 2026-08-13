function getDetailRow(title, detail) {
  const row = document.createElement("tr"),
    rowHeader = document.createElement("th"),
    rowData = document.createElement("td");

  rowHeader.textContent = title;
  rowData.textContent = detail;

  row.append(rowHeader, rowData);

  return row;
}

export function getWeatherComponent(weather) {
  const wrapper = document.createElement("div"),
    conditions = document.createElement("p"),
    description = document.createElement("p");

  wrapper.dataset.ui = "weather";

  conditions.textContent = weather.conditions;
  description.textContent = weather.description;

  const details = document.createElement("table"),
    temperature = getDetailRow("Temperature", weather.temperature),
    feelsLike = getDetailRow("Feels Like", weather.feelsLike),
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
