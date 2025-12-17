// --- 좋아요 클릭 이벤트 ---
// $(selector).on(eventName, childSelector, handler) // 이벤트 위임
$(document).on('click', '.like', function () {
  let $btn = $(this); // 클릭한 대상
  let text = $btn.text(); // 버튼 사이의 텍스트(좋아요 수, 하트)
  let current = parseFloat(text); // 모두 실수(float)로 바꿈 ex. 하트 3.7k > 하트 3.7, 하트 143 > 하트 143.0
  if (text.includes('k')) current *= 1000; // 텍스트가 k를 포함하고 있으면 현재값에 1000 곱함 ex. 하트 3.7 > 하트 2.7, 하트 143.0 > 하트 143.0 * 1000

  if ($btn.hasClass('active')) { // 버튼이 .active를 갖고있으면
    current -= 1; // 143 > 143
    $btn.removeClass('active'); // .active 제거
    $btn.find('i').attr('class', 'fa-regular fa-heart'); // 하트에 빨간색 뺌
  } else { // 버튼이 .active를 갖고있지 않으면
    current += 1; // 142 > 143
    $btn.addClass('active'); // 버튼에 .active 추가
    $btn.find('i').attr('class', 'fa-solid fa-heart'); // 하트에 빨간색 칠함
  }

  // main.js에 formatCount(current) 호출 (1000단위를 k로 표현)
  $btn.contents().last()[0].textContent = formatCount(current);
});