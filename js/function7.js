// function7.js

let frined = {
  name: "최은수",
  age: 26,
  phone: "010-8888-9999"
}

// for ... in
for (let prop in frined) {  // frined의 속성을 받아온 prop
  console.log(`prop: ${prop}, value: ${frined[prop]}`);   // frined[prop] -> 속성의 값을 받아옴
}

function makeRow(friends = {name, age, phone}) {
  let str = "";
  str += "<tr>";
  for (let prop in friends) {
    str += `<td>${friends[prop]}</td>`;
  }
  str += "</tr>";
  return str;
}

// 출력
let titles = ["이름", "나이", "연락처"];
let tlist = "";
tlist += "<table class='table'>";
tlist += "<thead><tr>"
for (let title of titles) {
  tlist += `<th>${title}</th>`;
}
tlist += "</tr></thead><tbody>"
// 데이터 -> row생성.
// for (let i = 0; i < friends.length; i++) {
//   tlist += makeRow(friends[i]);
// }
for (let friend of friends) {
  tlist += makeRow(friend);
}
tlist += "</tbody></table>";
document.write(tlist);