// for3.js

let sum = 0;   // 합
let avg = 0;   // 평균
let count = 0; // 합한 횟수

for (let i = 1; i <= 5; i++) {
  let str = prompt("1~10까지의 숫자를 입력하세요.");
  let inputValue = parseInt(str);
  if (1 <= inputValue && inputValue <= 10) {
    sum += inputValue;
    count++;
  } else {
    alert("1~10까지의 숫자가 아닙니다.");
  }
}
console.log(count);
console.log(sum);
avg = sum / count;  // 평균 계산

// alert("총 합은 " + sum + " 입니다.");
console.log(`총 합은 ${sum} 이고, 평균은 ${avg} 입니다.`);