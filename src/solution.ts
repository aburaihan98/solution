// Assignment-1

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

// formatString("Hello");
// formatString("Hello", true);
// formatString("Hello", false);
// console.log(formatString("Hello"));
