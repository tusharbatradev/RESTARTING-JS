var answer = document.getElementById("answer");

answer.innerHTML = "00";

function handleCalculation(operation) {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);

  let result;

  if (operation === "+") {
    result = num1 + num2;
    console.log(result);
  } else if (operation === "-") {
    result = num1 - num2;
    console.log(result);
  } else if (operation === "/") {
    result = num1 / num2;
    console.log(result);
  } else if (operation === "*") {
    result = num1 * num2;
    console.log(result);
  }

  answer.innerHTML = result;

}

function handleEsc(){
    answer.innerHTML = '00';

    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
}
