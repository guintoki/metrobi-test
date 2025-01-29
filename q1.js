const findAllDuplicatedItems = (arr) => {
  const map = new Map();
  const duplicates = new Set();

  for (const item of arr) {
    if (map.has(item)) {
      duplicates.add(item);
    } else {
      map.set(item, true);
    }
  }

  return [...duplicates];
};

module.exports = { findAllDuplicatedItems };
