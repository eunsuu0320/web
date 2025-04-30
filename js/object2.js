// object2.js
// 배열내장객체 : new Array(); 또는 []
// 관련메소드: push, pop, unshift, shift => forEach.

let arr1 = [10, 20, 30]; // == new Array(); == [];
arr1[3] = 40;
arr1.push(50);  // 추가 메소드
arr1.unshift(60);
// 60, 10, 20, 30, 40, 50
arr1.pop();    // 60, 10, 20, 30, 40
arr1.pop();    // 60, 10, 20, 30
arr1.shift();  // 10, 20, 30
  // 10, (15), 20, 30
arr1.splice(1, 0, 15, 16, 17);
arr1.splice(1, 1); // 10, 16, 17, 20, 30    // splice는 추가, 삭제, 수정 가능

// every: 배열의 모든 요소가 참이면 ture, some: 배열의 일부 요소가 참이라도 true
let result = arr1.every(function (item) {
  return item % 2 != 0
});
let result2 = arr1.some(item => item % 2 == 1);  // 위 식을 간단히 했을 때.
console.log(result);

arr1.forEach(function (item, index, ary) {  // 이름이 없는 함수는 익명 함수.
  console.log(item, index);
});