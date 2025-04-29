// function4.js

// 함수 + 반복문 + 배열:
let num = 10;
num = "10, 홍길동";
let numAry = [10, 20]; // new Array();  -> 배열 객체
numAry[2] = 30;
numAry[3] = 50;
numAry[4] = "Hong"; // 가능은 하나, 에러를 만나게 될 것 그냥 쓰지마셈
numAry[4] = 70; 
numAry[5] = 90;
numAry[6] = 110;
console.log(numAry[4]); // index는 0 부터, 배열의 순서는 0부터 시작.
console.log(`배열의 크기: ${numAry.length}`);

// 배열 + for반복문.
for (let i = 0; i < numAry.length; i++) {
  console.log(`[i]의 값은 ${i} 이고, 배열의 값은 ${numAry[i]}`);
}

// 연산 가능
console.log(`numAry[6] - numAry[2] => ${numAry[6] - numAry[2]}`);

// 배열의 요소의 합.
let sum = 0;
for (let i = 0; i < numAry.length; i++) {
    sum += numAry[i];
}
console.log(sum);

// 인덱스의 짝수 번 째만 합.
let sum1 = 0;
for (let i = 0; i < numAry.length; i++) {
  if (i % 2 == 0) { 
    sum1 += numAry[i];
  }
}
console.log(sum1);


// numAry[i] 가 50보다 큰 값만 합
let sum2 = 0;
for (let i = 0; i < numAry.length; i++) {
  if (numAry[i] >= 50) {
    sum2 += numAry[i];
  }
}
console.log(sum2);


// 함수: getMax()
let ages = [27, 28, 25, 30, 31, 36];
function getMax(numArray = []) {
  let max = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > max) {
      max = numArray[i];
    }
  } 
  return max;
}

// 최솟값
function getMin(numArray = []) {
  let min = numArray[0];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < min) {
      min = numArray[i];
    }
  } 
  return min;
}
// 함수 호출
getMax(ages);
getMax([30, 25, 45, 80, 2, -8, 128]);
console.log(getMax(ages));
console.log(getMin(ages));