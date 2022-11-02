// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

const searchParamsToObject = string => {
  const params = new URLSearchParams (string);
  return Object.fromEntries(params);
}

const isLeapYear = year => {
  if (typeof year !== 'number' || year < 0 ) {
    return 'Error - please enter a number that is over 0';
  } else if (year % 400 === 0) {
      return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

