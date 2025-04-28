// while2.js

// 사용자에게 1 ~ 10 까지 임의의 수를 입력하도록 요청,
// 범위 밖의 값을 입력하면 종료, 입력 값의 누적합을 콘솔 출력.

let value = 0;
let sum = 0;
while (true) {
  value = parseInt(prompt("1 ~ 10 까지의 숫자를 입력하세요"));
  if (value < 1 || value > 10) {
    alert("1 ~ 10 까지의 숫자가 아닙니다.");
    console.log(sum);
    break;
  } else {
    sum += value;
  }
}