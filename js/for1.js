// for1.js

let sum = 0;
for (let i = 1; i <= 5; i++) {      // 1. 초기값  2. 조건  3. 증감식
  sum += i;
}
console.log('sum의 값은 ' + sum);


// 1 ~ 20 반복 => 짝수인 경우에만 합을 구하고 싶음.
sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {  // 조건: 짝수일 때만 합.
    sum += i;        // 누적
  }
}
console.log('sum의 값은 ' + sum);
