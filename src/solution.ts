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

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item?.rating >= 4);
}

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book A", rating: 4 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];
// console.log(filterByRating(books));
