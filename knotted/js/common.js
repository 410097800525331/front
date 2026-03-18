$(document).ready(function () {
  // header
  const header = `
    <h1><a href="/"><img src="/assets/images/knotted.png" alt="노티드 로고"></a></h1>
    <nav>
      <ul class="nav_menu">
        <li class="nav_item">
          <button class="nav_title">Brand</button>
          <ul class="nav_sub">
            <li><a href="/knottedstore/story.html">스토리</a></li>
          </ul>
        </li>

        <li class="nav_item">
          <button class="nav_title">Reservation</button>
          <ul class="nav_sub">
            <li><a href="/knottedstore/pickup.html">픽업 예약</a></li>
            <li><a href="/knottedstore/bulk-order.html">대량 주문</a></li>
            <li><a href="/knottedstore/location.html">매장 안내</a></li>
          </ul>
        </li>

        <li class="nav_item">
          <button class="nav_title">Online Shop</button>
          <ul class="nav_sub">
            <li><a href="/knottedstore/shop.html">온라인 샵</a></li>
          </ul>
        </li>

        <li class="nav_item">
          <button class="nav_title">Menu</button>
          <ul class="nav_sub">
            <li><a href="/knottedstore/menu.html">메뉴 소개</a></li>
          </ul>
        </li>

        <li class="nav_item">
          <button class="nav_title">Event</button>
          <ul class="nav_sub">
            <li><a href="/knottedstore/event.html">이벤트</a></li>
            <li><a href="/knottedstore/notice.html">공지사항</a></li>
          </ul>
        </li>

        <li class="nav_item">
          <button class="nav_title">Help</button>
          <ul class="nav_sub">
          <li><a href="/knottedstore/inquiry.html">1:1 문의</a></li>
          <li><a href="/knottedstore/faq.html">자주 묻는 질문</a></li>
          </ul>
        </li>

        <li class="nav_item">
          <button class="nav_title">Contact</button>
          <ul class="nav_sub">
            <li><a href="/knottedstore/In-Bound.html">제안하기</a></li>
            <li><a href="/knottedstore/employment.html">채용안내</a></li>
          </ul>
        </li>

      </ul>
    </nav>
  `;

  $(".header").append(header);

  // 모바일 메뉴 버튼
  const mobile_btn = `
  <button class="mobile_menu_btn">
    <span></span>
    <span></span>
    <span></span>
  </button>
`;
  $(".header").prepend(mobile_btn);

  // 모바일 메뉴 토글
  $(".mobile_menu_btn").on("click", function () {
    $(".header").toggleClass("is_open");
  });

  const nav_items = document.querySelectorAll(".nav_item");
  const nav_titles = document.querySelectorAll(".nav_title");

  nav_titles.forEach((title) => {
    title.addEventListener("click", (e) => {
      e.preventDefault();

      const current_item = title.closest(".nav_item");

      nav_items.forEach((item) => {
        if (item !== current_item) {
          item.classList.remove("is_active");
        }
      });

      current_item.classList.toggle("is_active");
    });
  });


  const user = `
  <input class="search" placeholder="Search" />

  <div class="user_actions">
    <a href="#" class="btn_open_user" data-type="login">Login</a>
    <a href="#" class="btn_open_user" data-type="join">Join</a>
    <a href="/knottedstore/cart.html">Cart</a>
  </div>

  <div class="user_modal">
    <div class="modal_dim"></div>

    <main class="user_wrap">
      <section class="user_box">
        <button class="btn_close">×</button>

        <!-- ================= 로그인 ================= -->
        <div class="user_step user_login">
          <h3>로그인</h3>

          <div class="input_group">
            <label>이메일</label>
            <input type="email">
          </div>

          <div class="input_group">
            <label>비밀번호</label>
            <input type="password">
          </div>

          <div class="btn_group">
            <button class="btn_w">비회원 주문배송 조회</button>
            <button class="btn_next">로그인</button>
          </div>
        </div>

        <!-- ================= 회원가입 ================= -->
        <div class="user_step user_join_step user_agree">
          <button class="btn_close">×</button>
          <div class="user_step step_agree active">
            <h3>약관동의</h3>
            <div class="agree_item">
              <label><input type="checkbox" class="agree_required"> 이용약관 동의 (필수)</label>
              <div class="agree_box">이용약관 임시 내용</div>
            </div>
            <div class="agree_item">
              <label><input type="checkbox" class="agree_required"> 개인정보 수집 및 이용 동의 (필수)</label>
              <div class="agree_box">개인정보 수집 임시 내용</div>
            </div>
            <div class="agree_item">
              <label>마케팅 활용 및 광고 수신 동의</label>
              <div class="agree_box">마케팅 약관 임시 내용</div>
            </div>
            <div class="agree_option">
              <label><input type="checkbox" class="agree_optional"> 메시지(SMS, 카카오톡 등) 수신 동의</label>
              <label><input type="checkbox" class="agree_optional"> E-Mail 수신 동의</label>
              <label class="agree_age">
                <input type="checkbox" class="agree_required"> 만 14세 이상입니다. (필수)
              </label>
            </div>
            <label class="check_all">
              <input type="checkbox" id="agree_all">
              이용약관, 개인정보 수집 및 이용에 모두 동의합니다.
            </label>
            <div class="btn_group">
              <button class="btn_cancel">취소</button>
              <button class="btn_next btn_agree_next" disabled>가입하기</button>
            </div>
          </div>

          <div class="user_step step_form">
            <h3>본인인증</h3>
            <button class="btn_auth">휴대폰 인증</button>
            <button class="btn_auth">간편 인증</button>

            <h3>회원정보 입력</h3>
            <div class="input_group">
              <label>이메일</label>
              <input type="email">
            </div>
            <div class="input_group">
              <label>비밀번호</label>
              <input type="password">
            </div>
            <div class="input_group">
              <label>비밀번호 확인</label>
              <input type="password">
            </div>
            <div class="input_group">
              <label>이름</label>
              <input type="text">
            </div>
            <div class="input_group">
              <label>성별</label>
              <div class="radio_group">
                <label><input type="radio" name="gender"> 남자</label>
                <label><input type="radio" name="gender"> 여자</label>
              </div>
            </div>
            <div class="input_group">
              <label>연락처</label>
              <input type="tel">
            </div>
            <div class="input_group">
              <label>주소</label>
              <input type="text">
              <input type="text" placeholder="상세주소">
            </div>
            <div class="input_group">
              <label>생년월일</label>
              <input type="date">
            </div>
            <div class="btn_group">
              <button class="btn_cancel">이전으로</button>
              <button class="btn_next" disabled>가입하기</button>
            </div>
          </div>

      </section>
    </main>
  </div>
  `;
  $(".user").append(user);
  // 모바일용 user를 nav 안에 복제
  const mobile_user = `
  <div class="nav_user">
    <input class="search" placeholder="Search" />
    <div class="user_actions">
      <a href="#" class="btn_open_user" data-type="login">Login</a>
      <a href="#" class="btn_open_user" data-type="join">Join</a>
      <a href="/knottedstore/cart.html">Cart</a>
    </div>
  </div>
`;
  $("nav").prepend(mobile_user);


  document.addEventListener('click', (e) => {
    const modal = document.querySelector('.user_modal');
    const login = document.querySelector('.user_login');
    const join = document.querySelector('.user_agree');
    const agree = document.querySelector('.step_agree');
    const form = document.querySelector('.step_form');

    /* 모달 열기 */
    if (e.target.classList.contains('btn_open_user')) {
      e.preventDefault();

      // 햄버거 메뉴 닫기 (이게 핵심)
      document.querySelector('.header').classList.remove('is_open');

      modal.classList.add('active');

      login.classList.remove('active');
      join.classList.remove('active');
      agree.classList.add('active');
      form.classList.remove('active');

      if (e.target.dataset.type === 'login') {
        login.classList.add('active');
      } else {
        join.classList.add('active');
      }
    }


    /* 로그인 → 회원가입 */
    if (e.target.classList.contains('btn_prev')) {
      login.classList.remove('active');
      join.classList.add('active');

      agree.classList.add('active');
      form.classList.remove('active');
    }

    /* 약관 → 회원정보 */
    if (e.target.classList.contains('btn_agree_next')) {
      agree.classList.remove('active');
      form.classList.add('active');
    }

    /* 이전으로 */
    if (e.target.textContent === '이전으로') {
      form.classList.remove('active');
      agree.classList.add('active');
    }

    /* 닫기 */
    if (
      e.target.classList.contains('btn_close') ||
      e.target.classList.contains('modal_dim') ||
      e.target.classList.contains('btn_cancel')
    ) {
      modal.classList.remove('active');
    }

    /* 전체 동의 */
    if (e.target.id === 'agree_all') {
      document.querySelectorAll('.agree_required').forEach(chk => {
        chk.checked = e.target.checked;
      });
      validateAgree();
    }

    if (e.target.classList.contains('agree_required')) {
      validateAgree();
    }
  });

  function validateAgree() {
    const required = [...document.querySelectorAll('.agree_required')];
    document.querySelector('.btn_agree_next').disabled =
      !required.every(chk => chk.checked);
  }

  // footer
  const footer = `
    <div class="footer_inner">
      <!-- 정보 영역 -->
      <div class="footer_info">
        <div class="footer_col">
          <div>
            <h4>Help</h4>
            <p>
              고객센터: 1800-6067<br>
              운영시간: 평일 9시~12시, 13시~17시<br>
              (주말/공휴일 제외)
            </p>

            <h4 class="mt">Social</h4>
            <ul class="footer_list">
              <li><a href="#"><img src="/assets/images/instar.png"> Instagram</a></li>
              <li><a href="#"><img src="/assets/images/kakao.png"> Kakaotalk Channel</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Company Information</h4>
            <p>
              주식회사 지에프에프지 
              서울특별시 강남구 학동로82길 7<br>
              사업자등록번호: 248-81-00620<br>
              통신판매업신고번호: 2020-서울강남-02297<br>
              대표이사: 이준범
            </p>
          </div>
        </div>

        <div class="footer_policy_wrap">
          <p class="footer_copy">
            Copyright © 2023 Knotted. All Rights Reserved.
          </p>
          <div class="footer_policy">
            <a href="#">이용약관</a>
            <span>|</span>
            <a href="#">개인정보처리방침</a>
          </div>
        </div>
      </div>

    </div>
  `;

  $(".footer").append(footer);

  const topBtn = `
<button class="btn_top" aria-label="상단으로 이동">
  ↑
</button>
`;
  $("body").append(topBtn);

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $(".btn_top").addClass("is_show");
    } else {
      $(".btn_top").removeClass("is_show");
    }
  });

  $(document).on("click", ".btn_top", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

});
