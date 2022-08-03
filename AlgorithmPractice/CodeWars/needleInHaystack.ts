export function findNeedle(haystack: any[]): string {
  // Good luck!
  const result = haystack
    .map((word, i) => {
      if (word === "needle") {
        return `found the needle at position ${i}`;
      }
    })
    .join("");
  console.log(result);
  return result;
}
findNeedle([
  "3",
  "123124234",
  null,
  "needle",
  "world",
  "hay",
  2,
  "3",
  true,
  false,
]);
