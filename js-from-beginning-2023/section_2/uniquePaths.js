const handleUniquePaths = () => {
  _saved = localStorage.getItem("path") || "[]";
  _saved = JSON.parse(_saved);

  _saved.push(window.location.href);

  localStorage.setItem("path", JSON.stringify(_saved));

  const uniqueValues = new Set(JSON.parse(localStorage.getItem("path")));
  console.log(Array.from(uniqueValues));
};
