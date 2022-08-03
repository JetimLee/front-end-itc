export const pigIt = (a: string): string => {
  // code away
  return a
    .split(" ")
    .map((char) =>
      /[a-zA-Z]/.test(char) ? char.slice(1) + char[0] + "ay" : char
    )
    .join(" ");
};
