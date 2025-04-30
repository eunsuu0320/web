// object4.js

//filter() => 조건에 만족하는 요소를 새로운 배열로 생성.
let numAry = [20, 27, 33, 42, 19, 63, 52];
let filterAry = numAry.filter(function (item, index, ary) {
  if (item % 2 == 0) {
    return false;
  }
  return true;
  // return undefined => falsy;
});
console.log(filterAry);



////// salary가 5000이 넘는 사원들을 empAry에 저장.
let data = JSON.parse(json);
let empAry = new Array();

empAry = data.filter(function (item) {
  if (item.salary >= 5000) {
    return empAry.push(data);
  }
});

console.log(empAry);

// for (let emp of data) {
//   if (emp.salary >= 5000) {
//     empAry.push(data);
//   }
// }