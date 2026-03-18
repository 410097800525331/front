const eventList = [
  {name: "🍓Strawberry House🍓<br>딸기 신메뉴 출시 (1/14~)", num: "1", },
  {name: "🤎Dubai Donuts🤎", num: "2", },
  {name: "🖤노티드X올데이 프로젝트🖤<br>The 1st EP Album POP-UP	", num: "3", },
  {name: "🎄Smile, It's Christmas🎄<br>25년 크리스마스 시즌한정 음료", num: "4", },
  {name: "🎄Smile, It's Christmas🎄<br>25년 크리스마스 사전예약 최대 25% OFF 🎂", num: "5", },
  {name: "🌾 Lightly Sweet, Deeply Satisfying 🌾<br>화이트 라이스 도넛 출시 (10/15~)", num: "6", },
  {name: "🍑 Purely Fresh, Deeply Satisfying 🍎<br>과일 주스 3종 출시 (10/15~)", num: "7", },
  {name: "⚡ 노티드 X 번개 플리마켓 페스티벌 ⚡", num: "8", },
  {name: "🎁 2025 추석 한정 신메뉴 &amp; 기프트 박스 출시 🎁", num: "9", },
  {name: "SAY CHEESE &amp; SMILE! 🌞<br>8월 이달의 맛 끼리 신메뉴 출시 (8/12~)", num: "10", },
  {name: "Too Mucha Matcha💚<br>7월 이달의 맛 말차 신메뉴 출시 (7/1~)", num: "11", },
  {name: "🌧️Rainy Day Event🌧️<br>비오는 날 아메리카노 주문 시 1+1 (~7/20)", num: "12", },
  {name: "노티드X아루타 수프 Tied Together 🎀", num: "13", },
  {name: "Dripping with Summer🏖️<br>6월 이달의 맛 신메뉴 2종 출시 (6/1~)", num: "14", },
  {name: "🍉SWEET INSIDE🍉<br>노티드 여름 시즌 음료 4종 출시 (5/20~)", num: "15", },
  {name: "나이키 2025 After Dark Tour Seoul 10K의 여정에 노티드가 함께합니다 🔥", num: "16", },
  {name: "노티드X카러플<br>🎉세상 가장 달콤한 축카 파티🎉", num: "17", },
  {name: "🌼 노티드 가정의 달 케이크 &amp; 타르트 도넛 (5/1~) 🌼", num: "18", },
  {name: "🍩 저당 도넛 4종 구매 시, 아메리카노 2잔 무료 EVENT (4/11~) ☕", num: "19", },
  {name: "노티드X교촌치킨 달콤바삭한 만남, 츄러스 신메뉴 출시 🍗🍟", num: "20", },
  {name: "🍓 노티드 생딸기 파티 사전예약 (2/28~3/4) 🍓", num: "21", },
  {name: "🍓 STRAWBERRY DRINKS 🍓", num: "22", },
  {name: "🎀 2025 노티드 발렌타인 사전예약 (2/6~10) 🎀", num: "23", },
  {name: "2/1(토) 노티드 신메뉴🍫스모어 도넛 출시", num: "24", },
  {name: "1/1(수) 노티드 신메뉴<br>Low-Sugar 저당 크림 도넛 출시", num: "25", },
  {name: "🎄2024 노티드 크리스마스<br>시즌한정 도넛&amp;음료 출시🎄", num: "26", },
  {name: "🎂 2024 노티드 크리스마스 케이크<br>사전예약 최대 20% OFF 🎂", num: "27", },
  {name: "노티드X레드벨벳 10주년 콜라보 'Sweet Dreams'", num: "28", },
  {name: "NEW Brunch Salted Bread 🥐<br>(4+1 프로모션 종료)", num: "29", },
];

$(document).ready(function () {
  const $eventGrid = $('.event_grid');

  eventList.forEach(item => {
    const event = `
      <div class="event_card">
        <img src="/assets/images/event${item.num}.png" alt="${item.name}">
        <p>${item.name}</p>
      </div>
    `;
    $eventGrid.append(event);
  });
});