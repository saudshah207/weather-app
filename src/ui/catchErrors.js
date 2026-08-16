export function catchErrors(func) {
  return function (...parameters) {
    return func(...parameters).catch((error) => console.error(error));
  };
}
