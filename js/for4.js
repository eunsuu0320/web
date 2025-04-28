// for4.js

document.write("<h3>TEST</h3>");

document.write("<table class='table table-striped'>");

document.write("<tr>");
for (let i = 1; i <= 9; i++) {
  document.write(`<th>${i}단</th>`);  
}
document.write("</tr>");

for (let i = 1; i <= 9; i++) {
  document.write("<tr>");
  for (let j = 1; j <= 9; j++) {
    document.write(`<td>${j} X ${i} = ${i * j}</td>`);
  }
  document.write("</tr>");
}
document.write("</table>")