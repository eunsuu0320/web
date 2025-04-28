// function3exe.js

// 1. max(10, 7) => "두 수 중에서 큰 값은 10입니다."
function max(x, y) {
  if (x > y) {
    console.log(`2개의 숫자 중에서 큰 값은 ${x} 입니다.`);
  } else if (x < y) {
    console.log(`2개의 숫자 중에서 큰 값은 ${y} 입니다.`);
  } else {
    console.log(`2개의 숫자가 같습니다.`);
  }
}

// 2. sumUpTo(5) => "1부터 5까지의 합은 15 입니다."
function sumUpTo(num = 1) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(`1부터 ${num}까지의 합은 ${sum} 입니다.`);
}

// 3. diff(34, 17) => "두 수의 차는 17 입니다."
function diff(x = 0, y = 0) {
  let dif = 0;
  if (x >= y) {
    dif = x - y;
  } else if (x <= y) {
    dif = y - x;
  }
  console.log(`두 수의 차는 ${dif} 입니다.`);
}

//함수호출
max(10, 7);
sumUpTo(5);
diff(34, 17);