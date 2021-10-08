console.log("working");

const hamburger = document.getElementById("hamburger");
const backdrop = document.getElementById("backdrop");
const sidebar = document.getElementById("sidebar");

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
