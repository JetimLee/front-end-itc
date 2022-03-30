const getSumOf = (...args) => {
  if (args.length === 1 && Array.isArray(args[0])) args = [...args[0]];

  const sum = args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  console.log(sum);
  return sum;
};

getSumOf(1, 2, 3, 4);
getSumOf([1, 2, 3]);
