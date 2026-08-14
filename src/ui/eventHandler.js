import { eventActions } from "./eventActions.js";

function delegateEvent(event, actions) {
  const target = event.target;

  if (event.type === "submit") event.preventDefault();

  const formElements = target.elements;

  for (const action of actions) {
    if (action.name === target.dataset.action) {
      action
        .perform(target, formElements)
        ?.catch((error) => console.error(error));

      break;
    }
  }

  target.reset?.();
}

document.addEventListener("submit", (event) =>
  delegateEvent(event, eventActions),
);

document.addEventListener("click", (event) =>
  delegateEvent(event, eventActions),
);
