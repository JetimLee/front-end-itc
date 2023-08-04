let shoeSizes = document.querySelector(".container").children;
for (let shoeSize of shoeSizes) {
  shoeSize.addEventListener("click", () => {
    let selectedShoeSize = document.querySelector(
      ".selected>.box-selector__text"
    );
    console.log(selectedShoeSize.innerText);
  });
}
