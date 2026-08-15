import { cssUtils } from "../cssUtils.js";

export function getDetail({
  value,
  textToAttachToValue,
  title,
  valueIdentifier,
}) {
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
