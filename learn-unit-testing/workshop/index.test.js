const functionWorking = (actual, expected, msg) => {
  if (actual === expected) {
    const defaultMsg = `Expected ${expected} and received ${actual}`;
    console.info('Test passed: ' + (msg || defaultMsg));
  } else {
    const defaultMsg = `Expected ${expected} but receieved ${actual} instead`;
    console.error('Test failed: ' + (msg || defaultMsg));
  }
}

function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}