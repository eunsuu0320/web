// function8.js

console.log(json); // 문자열
let data = JSON.parse(json); // json문자열 -> 객체 변환
console.log(data); // 배열

let fields = ['id', 'first_name', 'email', 'gender', 'salary'];

// button<삭제> 템플릿.
let btnTemplate = "<button  class='btn btn-danger' onclick='deleteTr(event)'>삭제</button>";

// tr을 생성하는 함수.
function makeTr(emp = {}) {
  let str = "<tr>";
  for (let field of fields) {
    // console.log(emp[field]);  // emp['id'] == emp.id
    str += `<td>${emp[field]}</td>`;
  }
  str += `<td>${btnTemplate}</td>`;
  str += "</tr>";
  return str;
}

//tr 삭제하는 함수.
function deleteTr(event) {
  event.target.parentElement.parentElement.remove();
  return
}

// 사원목록(table 형식)을 출력
let elist = "<table class='table'><thead><tr>";
for (let field of fields) {
  elist += `<th>${field}</th>`;
}
elist += '<th>삭제</th>';
elist += "</tr></thead><tbody>";
for (let emp of data) {
  elist += makeTr(emp);
}
elist += "</tbody></table>";
document.write(elist);

//button 이벤트
document.querySelector('button#searchBtn').addEventListener('click', function() {
  let searchValue = document.querySelector('#userValue').value;
  let list = "";
  for (let emp of data) {
    if (searchValue == 'ALL' || searchValue == emp.gender) {
      list += makeTr(emp);
    }
  }
  document.querySelector('table.table > tbody').innerHTML = list;
});

//select 이벤트
document.querySelector('#selectGender').addEventListener('change', function() {
  let changeValue = document.querySelector('#selectGender').value;
  let list = "";
  for (let emp of data) {
    if (changeValue == 'ALL' || changeValue == emp.gender) {
      list += makeTr(emp);
    }
  }
  document.querySelector('table.table > tbody').innerHTML = list;
});

