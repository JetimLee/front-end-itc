const createRandomId = (): number => {
  const randomId = Math.floor(Math.random() * 100000);
  return randomId;
};

export { createRandomId };
