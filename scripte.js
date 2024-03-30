const one = document.getElementById("one");

const two = document.getElementById("two");

const three = document.getElementById("three");

const four = document.getElementById("four");

const five = document.getElementById("five");

const six = document.getElementById("six");

const seven = document.getElementById("seven");

const height = document.getElementById("height");

const nine = document.getElementById("nine");

let calcul = [];

//!* evenement calcul

one.addEventListener("click", () => {
  n1.style.background = "red";
  n2.style.background = "red";
  n5.style.background = "red";
  n6.style.background = "red";
  n7.style.background = "red";

  n3.style.background = "white";
  n4.style.background = "white";
  console.log("ok");
});

two.addEventListener("click", () => {
  n4.style.background = "red";
  n1.style.background = "";
  n2.style.background = "white";
  n3.style.background = "white";
  n5.style.background = "white";
  n6.style.background = "white";
  n7.style.background = "white";

  console.log("ok");
});

three.addEventListener("click", () => {
  n1.style.background = "red";
  n4.style.background = "white";
  n2.style.background = "red";
  n3.style.background = "white";
  n5.style.background = "white";
  n6.style.background = "white";
  n7.style.background = "white";

  console.log("ok");
});

four.addEventListener("click", () => {
  n1.style.background = "white";
  n4.style.background = "white";
  n2.style.background = "red";
  n3.style.background = "white";
  n5.style.background = "red";
  n6.style.background = "white";
  n7.style.background = "red";
  console.log("ok");
});

five.addEventListener("click", () => {
  n1.style.background = "white";
  n4.style.background = "white";
  n2.style.background = "red";
  n3.style.background = "red";
  n5.style.background = "white";
  n6.style.background = "white";
  n7.style.background = "white";
  console.log("ok");
});

six.addEventListener("click", () => {
  n1.style.background = "white";
  n4.style.background = "white";
  n2.style.background = "white";
  n3.style.background = "red";
  n5.style.background = "white";
  n6.style.background = "white";
  n7.style.background = "white";
  console.log("ok");
});

seven.addEventListener("click", () => {
  n1.style.background = "red";
  n4.style.background = "white";
  n2.style.background = "red";
  n3.style.background = "white";
  n5.style.background = "white";
  n6.style.background = "red";
  n7.style.background = "red";
  console.log("ok");
});

height.addEventListener("click", () => {
  n1.style.background = "white";
  n4.style.background = "white";
  n2.style.background = "white";
  n3.style.background = "white";
  n5.style.background = "white";
  n6.style.background = "white";
  n7.style.background = "white";
  console.log("ok");
});

nine.addEventListener("click", () => {
  n1.style.background = "white";
  n4.style.background = "white";
  n2.style.background = "red";
  n3.style.background = "white";
  n5.style.background = "white";
  n6.style.background = "white";
  n7.style.background = "red";
  console.log("ok");
});
