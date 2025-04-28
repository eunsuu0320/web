// function2.js

function sum(num1 = 0, num2 = 0) {
  let result = num1 + num2;
  return result;  //결과 반환.
}

function printStar(times = 1, shape = '⭐') {
  let str = "";
  for(let i = 1; i <= times; i++) {
    str += shape;
  }
  console.log(str);
}


// 구구단을 출력하는 함수.
function printGugudan(dan = 2) {
  //document 영역에 출력하는 함수
  for (let i = 1; i <= 9; i++) {
    document.write(`<p>${dan} X ${i} = ${dan * i}</p>`);
  }  
}

//함수호출
// console.log(sum(10));
// printStar(2, '🌞');
printGugudan(9);