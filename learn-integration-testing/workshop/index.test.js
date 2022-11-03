function equal(actual, expected, message) {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

function notEqual(actual, expected, message) {
  if (actual !== expected) {
    const defaultMessage = `${expected} is different to ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `${expected} is the same as ${actual}`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}

test('Number will add', () => {
  equal(calculate(4, '+', 6), 10);
  equal(calculate(61.5, '+', 3.2), 64.7);
});

test('Number will subtract', () => {
  equal(calculate(6, '-', 4), 2);
  equal(calculate(7.8, '-', 1.4), 6.4);
});

test('Number will divide', () => {
  equal(calculate(18, '/', 3), 6);
  equal(calculate(5.5, '/', 0.5), 11);
});

test('Number will multiply', () => {
  equal(calculate(3, '*', 6), 18);
  equal(calculate(0.5, '*', 5), 2.5);
})

test()