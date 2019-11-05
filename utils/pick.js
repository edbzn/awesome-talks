export function pickAndSpread(array, key) {
  return array.reduce((acc, object) => [...acc, ...object[key]], []);
}

export function pick(array, key) {
  return array.reduce((acc, object) => [...acc, object[key]], []);
}
