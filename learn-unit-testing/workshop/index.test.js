const functionEqual = (actual, expected, msg) => {
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

test("Pikachu link is rendered", () => {
  const actual = makeUrl('pikachu');
  const expected = "https://pokeapi.co/api/v2/pikachu";
  functionEqual(actual, expected);
  functionEqual(actual, 1);
})

// Test passed: Expected https://pokeapi.co/api/v2/pikachu and received https://pokeapi.co/api/v2/pikachu

// Test failed: Expected 1 but receieved https://pokeapi.co/api/v2/pikachu instead


/////////////

// this FAILS both times because the objects can't match, it needs the key
test("searchParamsToObject will create an object from querystring", () => {
  const actual = searchParamsToObject("name=oliver&email=hello@oliverjam.es");
  const expected = { name: "oliver", email: "hello@oliverjam.es" };
  functionEqual(actual, expected);
  functionEqual(actual, 1);
})

// this passes because of correct key log .name, and .email 
test("searchParamsToObject will create an object from querystring", () => {
  const actual = searchParamsToObject("name=oliver&email=hello@oliverjam.es");
  const expected = { name: "oliver", email: "hello@oliverjam.es" };
  functionEqual(actual.name, expected.name);
  functionEqual(actual.email, expected.email);
  functionEqual(actual, 1);
})

// Test passed: Expected oliver and received oliver
// Test passed: Expected hello@oliverjam.es and received hello@oliverjam.es


test('isLeapYear will return an error if a string is passed', () => {
  functionEqual(isLeapYear('This is not a number'), 'Error - please enter a number that is over 0')
});

// why doesn't this work
test('isLeapYear will return an error for a number 0 or below', () => {
  functionEqual(isLeapYear(0), 'Error - please enter a number that is over 0')
});