function produceDrivingRange(blockRange) {
  return function rangeChecker(start, end) {
    let distance = parseInt(end) - parseInt(start);
    console.log(distance)
    return ( blockRange >= distance ? `within range by ${ Math.abs(distance - blockRange)}` : `${ Math.abs(blockRange - distance)} blocks out of range`);
  }
}

function produceTipCalculator(percentage) {
  return function(bill) {
    return bill * percentage;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
