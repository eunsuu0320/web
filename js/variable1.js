// variable1.js


 // JS 주석문.
    /*
      주석문: 486p ~ 489p 읽기.
    */
    // 데이터베이스 관리 시스템(DBMS) - 오라클.
    // 정보 -> frontend -> backend -> oracle 
    // 변수(variable) - 데이터타입(문자, 숫자, boolean, object, array)
    let name; // 변수 선언.
    name = "최은수"; // 값을 대입.
    let name1 = "홍길동"; // 변수초기화.
    name = "김민수";
    console.log(name);

    const age = 20; // 변수 선언과 초기화.
    // age = 30; // 30 할당. -> const 는 선언 후에는 값을 바꿀 수 없다. 바꾸고 싶다면 let 선언을 하라.

    // 선택자(selector)
    let item = document.querySelector('#userValue'); // -> id 값을 userValue 
    console.dir(item); // dir 은 태그의 속성들을 다 보여줌
    name = item.value; // 변수 할당. 
    console.log(name);
