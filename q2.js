const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function printWithDelay(arr) {
  for (let i = 0; i < arr.length; i++) {
    await delay(Math.pow(2, i) * 1000);
    console.log(arr[i]);
  }
}

printWithDelay(["a", "b", "c", "d"]);
