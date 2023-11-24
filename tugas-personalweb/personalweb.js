//kelas aktif
const nav = document.querySelector(".nav");
//menu di klik
document.querySelector("#menu").onclick = () => {
  nav.classList.toggle("active");
};
//hilangkan menu
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});
