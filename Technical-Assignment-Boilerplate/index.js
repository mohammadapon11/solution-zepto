document.getElementById("menu-btn").addEventListener("click", function (event) {
  event.stopPropagation();
  var menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
});

document.addEventListener("click", function (event) {
  var menu = document.getElementById("menu");
  var menuBtn = document.getElementById("menu-btn");

  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.classList.add("hidden");
  }
});
