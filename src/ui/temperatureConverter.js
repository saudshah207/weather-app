import { commonUiIdentifiers } from "./commonUiIdentifiers.js";

const selectors = {
  temperatureValue: `[data-ui='${commonUiIdentifiers.temperatureValue}']`,
};

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
