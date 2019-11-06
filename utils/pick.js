export function pickAndSpread(array, key) {
  return array.reduce((acc, object) => [...acc, ...object[key]], []);
}

export function pick(array, key) {
  return array.reduce((acc, object) => [...acc, object[key]], []);
}

export function uniq(array) {
  return [...new Set(array)];
}

export function distinctBy(array, key) {
  return array.filter(
    (object, index, self) =>
      self.findIndex((t) => t[key] === object[key]) === index
  );
}
