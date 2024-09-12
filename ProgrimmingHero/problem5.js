function waitingTime(waitingTimes, serialNumber) {
  if (
    Array.isArray(waitingTimes) &&
    typeof serialNumber == "number" &&
    waitingTimes.length < serialNumber
  ) {
    let value = 0;
    let lth = waitingTimes.length;
    for (let i = 0; lth > i; i++) {
      value += waitingTimes[i];
    }
    let avg = Math.floor(value / lth);

    return (serialNumber - lth - 1) * avg;
  } else {
    return "Invalid Input";
  }
}
let arr = [13, 2];
waitingTime(arr, 6);
