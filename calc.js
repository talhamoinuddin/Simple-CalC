function addition() {
    let firstNumber =parseInt(document.getElementById("first").value);
    let secondNumber = parseInt(document.getElementById("second").value);
    let result = firstNumber + secondNumber;
    document.getElementById("result").value = result;
  }
  function substraction() {
    var firstNumber = document.getElementById("first").value;
    var secondNumber = document.getElementById("second").value;
    var result = firstNumber - secondNumber;
    document.getElementById("result").value = result;
  }
  function multiply() {
    var firstNumber = document.getElementById("first").value;
    var secondNumber = document.getElementById("second").value;
    var result = firstNumber * secondNumber;
    document.getElementById("result").value = result;
  }
  function division() {
    var firstNumber = document.getElementById("first").value;
    var secondNumber = document.getElementById("second").value;
    var result = firstNumber / secondNumber;
    document.getElementById("result").value = result;
  }

//   var firstNumber , secondNumber
// function getInputValues (){
//   firstNumber =Number(document.getElementById("firstNumber").value);
//  secondNumber = Number(document.getElementById("secondNumber").value);
// }
// function addition() {
// getInputValues()
//   document.getElementById("result").innerHTML = firstNumber + secondNumber
//   }
// function substraction() {
// getInputValues()
//   document.getElementById("result").innerHTML = firstNumber - secondNumber
//   }
// function multiply() {
// getInputValues()
//   document.getElementById("result").innerHTML = firstNumber * secondNumber
//   }
// function division() {
// getInputValues()
//   document.getElementById("result").innerHTML = firstNumber / secondNumber
//   }