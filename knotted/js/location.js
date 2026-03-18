const pickupStep1_content = [{ spot: '광주 상무', address: '광주광역시 서구 치평동 1208-5', timename1: '영업(픽업)시간 :', timename2: '', time: '11:00~21:00', pickuptime: '', lastorder: '', }, { spot: '구의역', address: '서울특별시 광진구 아차산로 402 구의 이스트폴 B1층', timename1: '영업(픽업)시간 :', timename2: '', time: '10:00~22:00', pickuptime: '', lastorder: '', }, { spot: '광교 중앙역', address: '경기도 수원시 영통구 도청로66번길6(이의동1333) 힐스테이트 광교중앙역 퍼스트 1층 135-1호', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '월-목 10:30~20:00 / 금-일 10:30~21:00', pickuptime: '11:00~20:00', lastorder: '', }, { spot: '여주 프리미엄 아울렛', address: '경기 여주시 명품로 370 여주프리미엄아울렛 WEST동 640B호(주말 및 공휴일 10:30~21:00)', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:30~20:30', pickuptime: '11:00~20:00', lastorder: '', }, { spot: '안성 스타필드', address: '경기 안성시 공도읍 서동대로 3930-39 스타필드안성1층', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:00~22:00', pickuptime: '10:00~21:30', lastorder: '', }, { spot: '신림', address: '서울시 관악구 신림로 364, 우장빌딩 1층', timename1: '영업(픽업)시간 :', timename2: '', time: '09:00~21:00', pickuptime: '', lastorder: 'Last Order : 20:00', }, { spot: '서울로 에너지플러스', address: '서울시 중구 회현동 84-17 에너지플러스 3층', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '08:00~20:00', pickuptime: '08:30~19:30', lastorder: '', }, { spot: '전주 롯데', address: '전북 전주시 완산구 온고을로 2, 1층', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:30~20:30(Mon-Thu), 21:00(Fri-Sun)', pickuptime: '11:00~20:00', lastorder: '', }, { spot: '부산 프리미엄 아울렛', address: '부산 기장군 장안읍 정관로 1133 부산프리미엄아울렛 지하 1층', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:30~20:30(Mon-Thu), 21:00(Fri-Sun)', pickuptime: '10:30~20:00', lastorder: '', }, { spot: '죽전 스타필드마켓', address: '경기 용인시 수지구 포은대로 552 스타필드마켓 죽전점 1층', timename1: '영업(픽업)시간 :', timename2: '', time: '10:00~22:00 매 월 둘째, 넷째 주 일요일 휴무', pickuptime: '', lastorder: '', }, { spot: '대구 빌리브 헤리티지', address: '대구 수성구 수성동4가 2266 빌리브 헤리티지 근린생활시설 201~207호', timename1: '영업(픽업)시간 :', timename2: '', time: '10:00~20:00', pickuptime: '', lastorder: '', }, { spot: '천안아산 신세계', address: '충남 천안시 동남구 만남로43 본관2동 6층 푸드스트리트', timename1: '영업(픽업)시간 :', timename2: '', time: '월-금 10:30~20:30 토-일 10:30~21:00', pickuptime: '', lastorder: '', }, { spot: '가산퍼블릭', address: '서울 금천구 디지털로 178 A동 지상1층 117호', timename1: '영업(픽업)시간 :', timename2: '', time: '10:00~20:00', pickuptime: '', lastorder: 'Last Order: 19:30', }, { spot: '광주 신세계', address: '광주 서구 무진대로 932 신세계백화점강주점, 지하 1층', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '월-목 10:30~20:00 / 금-일 10:30~20:30', pickuptime: '11:00~19:30', lastorder: 'Last Order: 19:30', }, { spot: '동탄 롯데', address: '경기도 화성시 통탄역로 160(오산동) 롯데백화점 동탄점 지하 1층', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:30~20:00', pickuptime: '11:00~19:30(Last Order: 19:30)', lastorder: '', }, { spot: '부천 현대', address: '경기 부천시 원미구 길주로 180, 지하 1층', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:30~20:00', pickuptime: '11:00~19:30', lastorder: 'Last Order: 19:30', }, { spot: '대전 신세계', address: '대전광역시 유성구 엑스포로 1, 지하 1층 A34호(도룡동)', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:30~20:00', pickuptime: '11:00~19:30', lastorder: 'Last Order: 19:30', }, { spot: '수원 스타필드', address: '경기도 수원시 장안구 수성로 175, 1층', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:00~22:00', pickuptime: '10:00~21:00', lastorder: 'Last Order: 20:00', }, { spot: '김포 롯데몰', address: '서울 강서구 하늘길 77 롯데몰 김포공항점 GF층', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:30~22:00', pickuptime: '11:00~20:00', lastorder: 'Last Order: 21:30', }, { spot: '제주 DT', address: '제주시 연오로 5, 1층 101호 102호(오라삼동)<br>전화번호: 010-4925-9377', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '09:00~20:00', pickuptime: '11:00~20:00', lastorder: '', }, { spot: '종각하이커', address: '서울 중구 청계천로 40<br>전화번호: 070-8869-9377', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:00~20:00', pickuptime: '10:30~19:00', lastorder: '', }, { spot: '여의도IFC', address: '서울 영등포구 국제금융로 10<br>전화번호: 070-4700-9377', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:00~22:00', pickuptime: '11:00~22:00(Last Order: 21:30)', lastorder: '', }, { spot: '대전 갤러리아', address: '대전 서구 대덕대로 211<br>전화번호: 042-720-6131', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:30~21:00', pickuptime: '11:00~21:00(Last Order: 20:50)', lastorder: '', }, { spot: '노티드월드(잠실롯데월드몰)', address: '서울 송파구 올림픽로 300<br>전화번호: 070-8873-9377', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:30~22:00', pickuptime: '11:00~21:30(Last Order: 22:00)', lastorder: '', }, { spot: '부산 롯데본점', address: '부산 부산진구 가야대로 772<br>전화번호: 010-9638-9377', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:30~20:00', pickuptime: '11:00~19:30', lastorder: '', }, { spot: '강남 신세계', address: '서울 서초구 신반포로 176<br>전화번호: 070-8860-9377', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '월-목 10:30~20:00 / 금-일 10:30~20:30', pickuptime: '11:00~19:00', lastorder: '', }, { spot: '하남 스타필드', address: '경기 하남시 미사대로 750 1층', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:00~22:00', pickuptime: '10:30~21:30', lastorder: 'Last Order: 22:00', }, { spot: '대구 신세계', address: '대구 동구 동부로 149 신세계동대구복합환승센터 지하 1층', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:30~20:00', pickuptime: '10:30~19:30(Last Order: 20:00)', lastorder: '', }, { spot: '송도 현대아울렛', address: '인천 연수구 송도국제대로 123 현대프리미엄아울렛 송도점 지하 1층', timename1: '영업시간 :', timename2: '픽업가능시간 :', time: '10:30~21:00', pickuptime: '11:00~20:00(Last Order: 21:00)', lastorder: '', },];

/* =========================
  매장 리스트 렌더링
========================= */
$(document).ready(function () {
  pickupStep1_content.forEach((data, idx) => {
    const imgName = encodeURIComponent(data.spot);

    const html = `
      <div class="store_card" data-index="${idx}">
        <div class="store_img">
          <img src="/assets/images/${imgName}.webp" alt="${data.spot}">
        </div>
        <div class="store_title">${data.spot}</div>
        <div class="store_detail">
          <p>주소 : ${data.address}</p>
          <p>${data.timename1} ${data.time}</p>
          ${data.pickuptime ? `<p>${data.timename2} ${data.pickuptime}</p>` : ``}
          ${data.lastorder ? `<p>${data.lastorder}</p>` : ``}
        </div>
      </div>
    `;

    $('#store_list').append(html);
  });
});

/* =========================
  매장 선택
========================= */
$(document).on('click', '.store_card', function () {
  const index = $(this).data('index');
  selectStore(index);

  $('.store_card').removeClass('is_selected');
  $(this).addClass('is_selected');
});