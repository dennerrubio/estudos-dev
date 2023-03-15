function clickMenu() {
  if (menulist.style.display == "block") {
    menulist.style.display = "none";
  } else {
    menulist.style.display = "block";
  }
}

function resizeMenu() {
  if (window.innerWidth >= 768) {
    menulist.style.display = "block";
  } else {
    menulist.style.display = "none";
  }
}
