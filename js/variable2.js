// variable2.js

let num1 = 100; // int num1;
num1 = "hundred";
console.log(typeof num1);

// let 1num = 200; // -> 변수 선언 이름 맨 앞에는 반드시 영어소문자
let num_2 = 200;
let nameOfFriend = "홍길동";

let birthOfDate = new Date();
console.log(typeof birthOfDate);

let isOK = true;
isOK = 10 < 5; // flase
console.log(isOK);

if (isOK) {
  // isOK  값이 true 일 경우 {} 블럭을 실행.
  console.log('isOK는 참 입니다.');
} else {
  console.log('isOK는 거짓 입니다.');
}

// 배열: [100, 200, 500] 여러 개의 값을 저장.
let numArray = [10, 20, 25, 31]; // 배열에 있는 첫 번째 위치는 0 부터 시작한다.
console.log(numArray[0]);

// let strArray = ["Hello", "Nice", "Good", 300];  ->  문자와 숫자를 같은 배열에 담을 순 있지만, 나중에 꺼내서 쓸 때 오류가 발생할 수도 있다. 자제.
let strArray = ["Hello", "Nice", "Good"];
console.log(strArray[1]);

// 객체(Object). 키: 값 형태.
let person = {
  name: "홍길동",
  age: 20,
  height: 168.9,
  weight: 65.3,
  personInfo: function() {
    console.log('이름은' + person.name + '이고 나이는' + person.age);
  } 
};
person.personInfo();

// undefied, null
let whatIsThis;  // 선언만 되어 있는 상태 -> andefied
whatIsThis = document.querySelector('#userValue');
console.log(whatIsThis.value);

