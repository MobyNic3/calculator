let numero1;
let numero2;
let operatore;
let numeroTemp = "";

const display = document.getElementById("display");
const btn_1 = document.getElementById("btn_1");
const btn_2 = document.getElementById("btn_2");
const btn_3 = document.getElementById("btn_3");
const btn_4 = document.getElementById("btn_4");
const btn_5 = document.getElementById("btn_5");
const btn_6 = document.getElementById("btn_6");
const btn_7 = document.getElementById("btn_7");
const btn_8 = document.getElementById("btn_8");
const btn_9 = document.getElementById("btn_9");
const btn_0 = document.getElementById("btn_0");
const btn_plu = document.getElementById("btn_plu");
const btn_min = document.getElementById("btn_min");
const btn_mul = document.getElementById("btn_mul");
const btn_div = document.getElementById("btn_div");
const btn_eq = document.getElementById("btn_eq");
const btn_C = document.getElementById("btn_C");

btn_1.addEventListener("click", function () {
  display.value += "1";
  numeroTemp += "1";
});
btn_2.addEventListener("click", function () {
  display.value += "2";
  numeroTemp += "2";
});
btn_3.addEventListener("click", function () {
  display.value += "3";
  numeroTemp += "3";
});
btn_4.addEventListener("click", function () {
  display.value += "4";
  numeroTemp += "4";
});
btn_5.addEventListener("click", function () {
  display.value += "5";
  numeroTemp += "5";
});
btn_6.addEventListener("click", function () {
  display.value += "6";
  numeroTemp += "6";
});
btn_7.addEventListener("click", function () {
  display.value += "7";
  numeroTemp += "7";
});
btn_8.addEventListener("click", function () {
  display.value += "8";
  numeroTemp += "8";
});
btn_9.addEventListener("click", function () {
  display.value += "9";
  numeroTemp += "9";
});
btn_0.addEventListener("click", function () {
  display.value += "0";
  numeroTemp += "0";
});
btn_plu.addEventListener("click", function () {
  if (numeroTemp !== "") {
    numero1 = parseFloat(numeroTemp);
    operatore = "+";
    display.value += "+";
    numeroTemp = "";
  }
});
btn_min.addEventListener("click", function () {
  if (numeroTemp !== "") {
    numero1 = parseFloat(numeroTemp);
    operatore = "-";
    display.value += "-";
    numeroTemp = "";
  }
});
btn_mul.addEventListener("click", function () {
  if (numeroTemp !== "") {
    numero1 = parseFloat(numeroTemp);
    operatore = "*";
    display.value += "*";
    numeroTemp = "";
  }
});
btn_div.addEventListener("click", function () {
  if (numeroTemp !== "") {
    numero1 = parseFloat(numeroTemp);
    operatore = "/";
    display.value += "/";
    numeroTemp = "";
  }
});
btn_eq.addEventListener("click", function () {
  if (numeroTemp !== "") {
    numero2 = parseFloat(numeroTemp);
    console.log(numero1, operatore, numero2);
    let result = operate(operatore, numero1, numero2);
    display.value = result;
    numero1 = result;

    numero2 = "";
    operatore = "";
    numeroTemp = "";
  }
});

btn_C.addEventListener("click", function () {
  display.value = "";
  numero2 = "";
  operatore = "";
  numeroTemp = "";
});

function operate (opr, num1, num2) {
    console.log("sono qui")
  if (opr == "+") {
    return num1 + num2;
  } else if (opr == "-") {
    return num1 - num2;
  } else if (opr == "*") {
    return num1 * num2;
  } else if (opr == "/") {
   return num1 / num2;
  }
}
