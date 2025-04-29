// function5.js

let names = ["홍길동", "박춘식", "김민수", "이영식"];
let search = prompt("검색할 이름 입력: ");
let exists = 0;

for (let i = 0; i < names.length; i++) {
  if (names[i] == search) {
    exists = true;
    break;
  }
}
if (exists) {
  alert(`${search}이(가) 있습니다.`);
  } else {
    alert(`${search}이(가) 없습니다.`);
}


//굳이?
// while (true) {
//   if (i < names.length) {
//     i++;
//   } else {
//     break;
//     }
//   if (names[i] == search) {
//     alert(`${search}이(가) 있습니다.`);
//     break;
//   } else {
//     alert(`${search}이(가) 없습니다.`);
//     break;
//   }
// }