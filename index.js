if (document.querySelector("body").offsetWidth >= 973) {
  document.querySelector(".supervisor").classList.add("shifted");
  document.querySelector(".calculator").classList.add("shifted");
}
else {
  document.querySelector(".supervisor").classList.remove("shifted");
  document.querySelector(".calculator").classList.remove("shifted");
}
