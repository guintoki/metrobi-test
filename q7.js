const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];
const capacity = 36;

const getMaxValue = (carrotTypes, capacity) => {
  carrotTypes.sort((a, b) => b.price / b.kg - a.price / a.kg);

  let totalValue = 0;
  let remainingCapacity = capacity;

  for (let carrot of carrotTypes) {
    if (remainingCapacity === 0) break;

    let numFullCarrots = Math.floor(remainingCapacity / carrot.kg);
    totalValue += numFullCarrots * carrot.price;
    remainingCapacity -= numFullCarrots * carrot.kg;
  }

  return totalValue;
};

console.log(
  "Maximum value the bag can hold:",
  getMaxValue(carrotTypes, capacity)
);
