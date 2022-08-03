const reverse = (x: string) => x.split("").reverse().join("");

export const reverseWords = (str: string): string =>
  str.split(" ").map(reverse).join(" ");
