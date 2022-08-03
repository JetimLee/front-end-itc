const getData = async () => {
  const data = await fetch("https://api.github.com/users/JetimLee");
  const response = await data.json();
  console.log(response);
};
getData();
