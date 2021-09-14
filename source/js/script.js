let navigation = document.querySelector(".site-navigation");
let navigationButton = document.querySelector(".site-navigation__toggle");

navigation.classList.remove("site-navigation--nojs");
navigation.classList.add("site-navigation--closed");

navigationButton.addEventListener("click", function () {
  if (navigation.classList.contains("site-navigation--closed")) {
    navigation.classList.remove("site-navigation--closed");
    navigation.classList.add("site-navigation--opened");
  } else {
    navigation.classList.add("site-navigation--closed");
    navigation.classList.remove("site-navigation--opened");
  }
});
