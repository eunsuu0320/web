// dom1.js

// createElement(),   appendChild(),              setAttribute(),          querySelector()
// 요소 만들기        부모요소와 자식요소 연결     요소에 속성 추가하기      요소 선택하기 


//li 만드는 함수 + 삭제 버튼 만들기
function createLi(fruitName, fruitPrice) {
  let li = document.createElement("li");
  let span1 = document.createElement("span");
  span1.innerText = fruitName;
  let span2 = document.createElement("span");
  span2.innerText = fruitPrice + "원";
  let txt = document.createTextNode(" ");

  // 삭제 버튼
  let btn = document.createElement("button");  // <button id="delBtn" class="btn btn-danger">삭제<button>
  btn.innerText = "삭제";
  // btn.setAttribute('class', 'btn btn-danger'); // 속성 추가
  btn.className = "btn btn-danger";
  btn.addEventListener('click', function () {
    btn.parentElement.remove();
  }); // 클릭 이벤트 등록.

  li.addEventListener('mouseover', function () {
    li.style.backgroundColor = "red";
  });

  li.addEventListener('mouseout', function () {
    li.style.backgroundColor = "";
  });

  li.appendChild(span1);
  li.appendChild(txt);
  li.appendChild(span2);
  li.appendChild(btn);

  return li; 
}

// 삭제 버튼들
document.querySelectorAll('ul button').forEach(function (item) {  //querySelector에서 공백은 그 친구의 하위요소들 중 하나, > 는 그 친구의 바로 아래의 자식 요소
  console.log(item);
  item.addEventListener('click', function () {
    item.parentElement.remove();
  })
}); 

// 등록 버튼 누르는 이벤트
let addBtn = document.querySelector('#addBtn').addEventListener('click', addCallBack);

// 콜백함수
function addCallBack () {
  let fruit = document.getElementById('fruit').value;
  let price = document.getElementById('price').value;

  let newList = createLi(fruit, price);
  document.querySelector('ul').appendChild(newList); // 부모 - 자식 관계.

  // 입력값이 있는지 체크.
  if (!fruit || !price) {
    alert("값을 입력해 주세요.");
    return;
  }

  // 입력값 초기화.
  document.getElementById('fruit').value = "";
  document.querySelector('#price').value = 0;
};

// li에 스타일.
document.querySelectorAll('li').forEach(item => {
  item.addEventListener('mouseover', function () {
    item.style.backgroundColor = "red";
  })
  item.addEventListener('mouseout', function () {
    item.style.backgroundColor = "";
  })
});

