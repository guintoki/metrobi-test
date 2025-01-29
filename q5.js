function findCriticalFloor(totalFloors = 100) {
  let x = Math.ceil((Math.sqrt(1 + 8 * totalFloors) - 1) / 2);
  let firstEggFloor = 0;
  let step = x;
  let drops = 0;

  function eggBreaks(floor, criticalFloor) {
    return floor >= criticalFloor;
  }

  let criticalFloor = Math.floor(Math.random() * totalFloors) + 1;
  console.log(`Real critical floor: ${criticalFloor}`);

  while (
    firstEggFloor + step <= totalFloors &&
    !eggBreaks(firstEggFloor + step, criticalFloor)
  ) {
    firstEggFloor += step;
    step--;
    drops++;
  }

  let secondEggFloor = firstEggFloor + 1;
  while (
    secondEggFloor <= totalFloors &&
    !eggBreaks(secondEggFloor, criticalFloor)
  ) {
    secondEggFloor++;
    drops++;
  }

  console.log(`Critical floor found: ${secondEggFloor}`);
  console.log(`Drops number: ${drops}`);

  return secondEggFloor;
}

findCriticalFloor();
