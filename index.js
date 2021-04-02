// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(hilite="*") {
// the above uses hypertext markdown to highlight
    return function(adj="special") {
      return `You are ${hilite}${adj}${hilite}!`;
    }
  }

  let Calculator = {
      'add': function add(num1, num2){
          return num1 + num2
      },
      'subtract': function subtract(num1, num2) {
          return num1 - num2
      },
      'multiply': function multiply(num1, num2) { 
          return num1 * num2
      },
      'divide': function divide(num1, num2) {
          return num1 / num2
      }
  }

  function actionApplyer(startInt, functionArray){
    //for loop
    for (let i = 0;i < functionArray.length; i++){
        startInt = functionArray[i](startInt)
    }
    return startInt;
  }