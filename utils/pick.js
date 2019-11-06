export function pickAndSpread(array, key) {
  return deDuplicate(
    array.reduce((acc, object) => [...acc, ...object[key]], [])
  );
}

export function pick(array, key) {
  return deDuplicate(array.reduce((acc, object) => [...acc, object[key]], []));
}

export function deDuplicate(array) {
  return [...new Set(array)];
}
