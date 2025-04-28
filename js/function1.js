// function1.js

// 2개의 수를 비교하여 큰 값에 10을 더하고 작은 값에 5를 더한 후 합을 구하는 기능.

// 함수의 정의.
function sum(parameter1, parameter2) {
  let result = 0;
  if (parameter1 > parameter2) {
    result = (parameter1 + 10) + (parameter2 + 5);
  } else {
    result = (parameter2 + 10) + (parameter1 = 5);
  }
  // console.log(`결과값 ${reuslt}`);
  return result; // return = 함수를 호출한 영역으로 결과 반환
}

let num1 = 4, num2 = 2;
let reuslt = sum(4, 2);
document.write(`결과값 ${result}`);
sum(num1, num2);

result = sum(20, 19);
alert(`결과값 ${result}`);
// document.querySelector('#result').value = result;

// if (num1 > num2) {
//   result = (num1 + 10) + (num2 + 5);
// } else {
//   result = (num2 + 10) + (num1 + 5);
// }
// console.log(`결과값 ${reuslt}`);
