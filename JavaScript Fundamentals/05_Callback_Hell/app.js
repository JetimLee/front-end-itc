const btn = document.querySelector("button");

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
const moveX = (element, amount, delay, onSuccess, onFailure) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currLeft = element.getBoundingClientRect().left;
      if (elRight + amount > bodyBoundary) {
        onFailure();
        reject();
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`;
        onSuccess();
        resolve();
      }
    }, delay);
  });
};
const success = () => {
  alert("You have a wide screen!");
};
const failure = () => {
  alert("You have a narrow screen!");
};

const moveButton = async () => {
  for (let i = 0; i < 10; i++) {
    try {
      await moveX(btn, 100, 1000, success, failure);
    } catch (error) {
      console.log(error);
      return;
    }
  }
  alert("YOU HAVE A VERY WIDE SCREEN!");
};
moveButton();
