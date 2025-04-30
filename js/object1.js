// object1.js
// 객체지향언어(자바) + 함수 : 컴파일 / 함수기반언어(자바스크립트) + 객체 : 인터프리터

// this => 1. 객체(객체를 가리킴). 2. 함수(window 객체.) 3. 이벤트(대상)
function sum() {
  console.log(this);
}

// 함수 호출
sum();

// 객체: this => 자기자신.
let obj = {
  name: "최은수",
  age: 26,
  showName: function () {   // 기능을 구현하겠다. 
    console.log(this);
    return `이름은 ${this.name}입니다.`
  },
  setName (name) {  // == setName: function (name) {}
    this.name = name;
  }
};
obj.setName("권기용");
let result = obj.showName();
console.log(result);

// class 생성
class Person {
  // name, age: 속성
  // showName(), setName(): 메소드
  constructor(name, age) {   // 생성자
    this.name = name;
    this.age = age;
  }

  //메소드
  showName() {
    return `이름은 ${this.name}입니다.`;
  }
  setName(name) {
    this.name = name;
  }
  showAge() {
    return `나이는 ${this.age}입니다.`;
  }
  setAge(age) {
    this.age = age;
  }
}

let choi = new Person("최은수", "24");  // 인스턴스 생성. => 실제를 만드는 것
choi.setName("최인선");
console.log(choi.showName());

let park = new Person("박충식", 30);  // 인스턴스 생성