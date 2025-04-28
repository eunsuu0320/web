// while1.js

// 1 ~ 10 까지의 홀수 값만 콘솔에 출력
// for(let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// 반복횟수 상관없이 조건을 만족할 동안 반복.
// let num = 1;
// while (true) {
//   if (num % 2) {
//     console.log(num);
//   }
//   if (num > 10) {
//     break;
//   }
//   num++;  
// }

// 임의의 값(0 ~ 100) 생성 중 50보다 작은 값이 나오면 반복 중단.
let running = true;
while (running) {
  let num = Math.floor(Math.random() * 101);
  console.log(num);
  if (num < 50) {    // 종료 조건.
    // break;
    running = false;
  }
}