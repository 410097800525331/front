function digitalClock() {

  const date = new Date();
  const clockBox = document.getElementById("clock");
  let day; // 요일을 담을 변수
  let clock; // 출력 변수
  // 날짜
  let yy = date.getFullYear(); // 년
  let mm = date.getMonth() + 1; // 월 0~11 +1 -> 1~12
  let dd = date.getDate(); // 일
  // 시간
  let hour = date.getHours(); // 시
  let minute = date.getMinutes(); // 분
  let second = date.getSeconds(); // 초

  // switch~case 문으로 변경
  // 요일: 숫자에서 문자열로 변경
  switch (date.getDay()) {
    case 0:
      day = "일";
      break;
    case 1:
      day = "월";
      break;
    case 2:
      day = "화";
      break;
    case 3:
      day = "수";
      break;
    case 4:
      day = "목";
      break;
    case 5:
      day = "금";
      break;
    default:
      day = "토";
  }

  // AM/PM: 3항 연산자 사용하기
  const ampm = hour >= 12 ? "PM" : "AM";
  // 0시는 12시로 표시
  hour = hour % 12;
  hour = hour ? hour : 12;


  function twoDigits(timePara) {
    // if (timePara < 10) {
    //     timePara = "0" + timePara;
    // } else {
    //     timePara = timePara;
    // }
    // 삼항 연산자: (조건) ? 표현식1 : 표현식2;
    timePara = (timePara < 10) ? "0" + timePara : timePara;
    return timePara; // timePara를 호출 문에 돌려준다.
  }
  // 함수 호출
  hour = twoDigits(hour);
  minute = twoDigits(minute);
  second = twoDigits(second);

  // 출력
  clock = yy + "년 " + mm + "월 " + dd + "일 " + "(" + day + ") " + ampm + hour + ":" + minute + ":" + second;

  clock = `${yy}년 ${mm}월 ${dd}일(${day}) ${ampm} ${hour}:${minute}:${second}`;

  clockBox.innerHTML = clock;
}

setInterval(digitalClock, 1000);