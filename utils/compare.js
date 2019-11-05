export function isEqual(property, value) {
  return property.toLowerCase().includes(value.toLowerCase());
}

export function deepCompare(object, query, matches = []) {
  Object.entries(object).forEach(([key, value]) => {
    if (typeof object[key] === 'string' && isEqual(value, query)) {
      matches.push(true);
    } else if (typeof object[key] === 'object') {
      deepCompare(value, query, matches);
    }
  });

  return matches.some((match) => match === true);
}
