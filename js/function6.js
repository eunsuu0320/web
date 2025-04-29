// function6.js

//배열 + object
let num = 10;
let obj = {           
  name: "홍길동",
  age: 20,
  phone: "010-1111-2222",
  pets: [{
    name: '야옹이',
    age: 2,
    검진일: ['2025-01-05', '2025-03-08']
  }, {
    name: '멍멍이',
    age: 3,
    검진일: ['2025-01-10', '2025-03-20']
  }]
};                                       // new object{key : value};

console.log(obj.pets.name);

let friends = [
  {name: "홍길동", age: 20, phone: "010-1234-1234"},
  {name: "김민식", age: 21, phone: "010-2345-2345"},
  {name: "이영식", age: 22, phone: "010-4567-4567"},
];
let max = 0;
for (let i = 0; i < friends.length; i++) {
  if (max < friends[i].age) {
    max = friends[i].age;
  }
}
console.log(max);