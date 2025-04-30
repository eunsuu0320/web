// object3.js

// indexOf()
let numArr = [10, 21, 3, 54, 16, 73];
let result = numArr.indexOf(333);      // -1은 찾는 요소가 없음.
console.log(result);

let strAry = ["권기용", "권지용", "최은수", "최진연", "최인선", "최희수"];
strAry.forEach(function (item) {
  if (item.indexOf("용") == 2) {
    console.log(item);
  }
});


// numAry(변수) => 10 ~ 50 사이의 값을 10개를 저장. -> 콘솔에 출력(forEach)
let numAry = new Array();

for (let i = 0; i < 10; i++) {
  numAry.push(Math.floor(10 + Math.random() * 41));
}
numAry.forEach(function (item) {
  console.log(item);
});

// 10 ~ 50 사이의 값이 정상적으로 생성 체크 : every()
console.log(numAry.every(item => item >= 10 && item <= 50));