"use strict";
function formatString(input, toUpper) {
  if (toUpper === true || !toUpper) {
    return input.toUpperCase();
  } else {
    return input.toLocaleLowerCase();
  }
}
console.log(formatString("Hello"));
