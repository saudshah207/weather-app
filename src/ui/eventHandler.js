import { eventActions } from "./eventActions.js";

const selectors = {
  actionTrigger: "[data-action]",
};

function delegateEvent(event, actions) {
  const target = event.target;

  event.preventDefault();

  const formElements = target.elements;

  for (const action of actions) {
    if (action.name === target.dataset.action) {
      action
        .perform(formElements, target)
        .catch((error) => console.error(error));

      break;
    }
  }

  target.reset();
}

document.addEventListener("submit", (event) =>
  delegateEvent(event, eventActions),
);
