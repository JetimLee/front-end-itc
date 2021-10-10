console.log("working");

const hamburger = document.getElementById("hamburger");
const backdrop = document.getElementById("backdrop");
const sidebar = document.getElementById("sidebar");
const profilePic = document.getElementById("sideBarPortfolioPicture");

const toggleSidebar = () => {
  backdrop.classList.toggle("backdrop--active");
  sidebar.classList.toggle("sidebar--active");
};

hamburger.addEventListener("click", () => {
  toggleSidebar();
});
backdrop.addEventListener("click", () => {
  toggleSidebar();
});

const getUserData = async (url) => {
  const request = await fetch(url);
  const data = await request.json();
  profilePic.src = data.avatar_url;
  profilePic.style.border = "1px solid black";
};

getUserData("https://api.github.com/users/JetimLee");
