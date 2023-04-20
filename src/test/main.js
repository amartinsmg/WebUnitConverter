const { ok: assert } = require("assert"),
  {
    lengthConversion,
    areaConversion,
    volumeConversion,
    massConversion,
    pressureConversion,
    timeConversion,
    speedConversion,
    accelerationConversion,
    forceConversion,
    temperatureConversion,
    energyConversion,
    powerConversion,
  } = require("../converter");

/**
  Rounds a number to a specified number of decimal places
  @param num - The number to be rounded
  @param decimalPlaces - The number of decimal places to round to
  @return - The rounded number
*/

function roundTo(num, decimalPlaces) {
  let base10 = 10 ** decimalPlaces,
    result = Math.round(num * base10) / base10;
  return result;
}

void (function () {
  assert(roundTo(lengthConversion(8, 6, 1), 3) == 1.852);
  assert(roundTo(lengthConversion(5, 4, 1), 3) == 12);
  assert(roundTo(areaConversion(7, 5, 1), 3) == 258.999);
  assert(roundTo(areaConversion(3, 2, 1), 3) == 6.452);
  assert(roundTo(volumeConversion(6, 5, 1), 3) == 3.785);
  assert(roundTo(volumeConversion(4, 2, 10), 3) == 295.735);
  assert(roundTo(massConversion(6, 5, 1), 3) == 2204.623);
  assert(roundTo(massConversion(4, 3, 1), 3) == 28.35);
  assert(roundTo(pressureConversion(5, 4, 1), 3) == 1.013);
  assert(roundTo(timeConversion(5, 3, 1), 3) == 8766);
  assert(roundTo(speedConversion(4, 3, 1), 3) == 1.609);
  assert(roundTo(accelerationConversion(6, 3, 1), 3) == 35.304);
  assert(roundTo(forceConversion(4, 2, 1), 3) == 980665);
  assert(roundTo(temperatureConversion(2, 3, 20), 3) == 68);
  assert(roundTo(energyConversion(4, 2, 1), 3) == 3600);
  assert(roundTo(powerConversion(4, 2, 1), 3) == 2684.52);
  console.log("Passed all tests successfully");
})();
