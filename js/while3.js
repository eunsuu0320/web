// while3.js

// 친구 이름을 입력. => quit 종료.

let value = 0;
document.write("<table class='table table-striped'>");
while (true) {
  document.write("<tr>");
  value = prompt("이름을 입력하세요.");
  if (value == "quit") {
    break;
  }
  document.write(`<td>${value}</td>`);
  document.write(`<td><button class='btn btn-danger' onclick="removeElement(event)">삭제</button></td>`);
  document.write("</tr>");
}
document.write("</table>");


// 화면 요소를 삭제하는 함수
function removeElement(x) {
  console.dir(x.target.parentElement.parentElement);   //parentElement -> 상위요소
  x.target.parentElement.parentElement.remove(); // 제거.
}