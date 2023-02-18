const screen = document.querySelector(".calculator_screen");
const buttons = document.querySelectorAll(".btn");
let string = "";

Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML == "=") {
      screen.value = eval(string);
    } else if (btn.innerHTML == "C") {
      string = "";
      screen.value = "";
    } else {
      string += btn.innerHTML;
      screen.value += btn.innerHTML;
    }
  });
});
