(function () {

var range = document.querySelector(".abonements__slider-input");
var variationsFirst = document.querySelector(".abonements__variations--first");
var variationsSecond = document.querySelector(".abonements__variations--second");
var variationsThird = document.querySelector(".abonements__variations--third");
var firstTab = document.querySelector("#firsttab");
var secondTab = document.querySelector("#secondtab");
var thirdTab = document.querySelector("#thirdtab");

firstTab.style.color = "rgba(16, 38, 84, 1)";
range.value = 0;

var onInputChange = function() {

  if (range.value >= 0 && range.value <= 39) {
    variationsFirst.style.display = "flex";
    variationsSecond.style.display = "none";
    variationsThird.style.display = "none";
    firstTab.style.color = "rgba(16, 38, 84, 1)";
    secondTab.style.color = "rgba(16, 38, 84, 0.5)";
    thirdTab.style.color = "rgba(16, 38, 84, 0.5)";
  } else if (range.value >= 40 && range.value <= 70) {
    variationsFirst.style.display = "none";
    variationsSecond.style.display = "flex";
    variationsThird.style.display = "none";
    firstTab.style.color = "rgba(16, 38, 84, 0.5)";
    secondTab.style.color = "rgba(16, 38, 84, 1)";
    thirdTab.style.color = "rgba(16, 38, 84, 0.5)";
  } else if (range.value >= 71 && range.value <= 100) {
    variationsFirst.style.display = "none";
    variationsSecond.style.display = "none";
    variationsThird.style.display = "flex";
    firstTab.style.color = "rgba(16, 38, 84, 0.5)";
    secondTab.style.color = "rgba(16, 38, 84, 0.5)";
    thirdTab.style.color = "rgba(16, 38, 84, 1)";
  }
};

range.addEventListener("input", onInputChange);

})();
