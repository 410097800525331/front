/* ======================
   GLOBAL STATE
====================== */
const pickupState = {
  selectedStore: null,
  selectedMenus: {},   // { menuName: { name, price, qty } }
  currentCategory: 'all',
  selectedDate: '',
  selectedTime: ''
};


/* ======================
   STEP 이동
====================== */
function goStep(n) {
  document.querySelectorAll('.step').forEach(step => {
    step.classList.remove('is_active');
  });

  const target = document.getElementById('step' + n);
  if (target) target.classList.add('is_active');

  // STEP 3 진입 시 날짜/시간 생성
  if (n === 3) {
    renderDates();
    renderTimes();
  }
}


/* ======================
   STEP 1 : 매장 선택
====================== */
function selectStore(idx) {
  const store = pickupStep1_content[idx];
  pickupState.selectedStore = store;

  document.getElementById('store_info_box').innerHTML = `
    <strong>${store.spot}</strong>
    <p>${store.address}</p>
    <p>${store.timename1} ${store.time}</p>
    ${store.pickuptime ? `<p>${store.timename2} ${store.pickuptime}</p>` : ''}
    ${store.lastorder ? `<p>${store.lastorder}</p>` : ''}
  `;

  goStep(2);

  // 메뉴 렌더링 (pickupmenu.js)
  renderMenu();
}


/* ======================
   STEP 2 : 메뉴 담기
====================== */

/* 메뉴 담기 */
function addMenu(name) {
  const menu = menus.find(m => m.name === name);
  if (!menu) return;

  if (!pickupState.selectedMenus[name]) {
    pickupState.selectedMenus[name] = {
      name: menu.name,
      price: menu.price,
      qty: 1
    };
  } else {
    pickupState.selectedMenus[name].qty++;
  }

  renderSelected();
}

/* 수량 변경 */
function changeQty(name, delta) {
  if (!pickupState.selectedMenus[name]) return;

  pickupState.selectedMenus[name].qty += delta;

  if (pickupState.selectedMenus[name].qty <= 0) {
    delete pickupState.selectedMenus[name];
  }

  renderSelected();
}

/* 메뉴 제거 */
function removeMenu(name) {
  delete pickupState.selectedMenus[name];
  renderSelected();
}

/* 선택 메뉴 렌더 */
function renderSelected() {
  const list = document.getElementById('selected_list');
  const totalEl = document.getElementById('total');

  list.innerHTML = '';

  let totalQty = 0;
  let totalPrice = 0;

  Object.values(pickupState.selectedMenus).forEach(item => {
    totalQty += item.qty;
    totalPrice += item.qty * item.price;

    list.insertAdjacentHTML('beforeend', `
      <div class="selected_item">
        <span>${item.name}</span>
        <div class="qty">
          <button onclick="changeQty('${item.name}', -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty('${item.name}', 1)">+</button>
        </div>
        <span class="remove" onclick="removeMenu('${item.name}')">✕</span>
      </div>
    `);
  });

  totalEl.innerText = `총 ${totalQty}개 · ${totalPrice.toLocaleString()}원`;
}


/* STEP 2 → STEP 3 이동 (검증) */
function goStep3WithValidation() {
  const count = Object.keys(pickupState.selectedMenus).length;

  if (count === 0) {
    alert('메뉴를 한 개 이상 선택해주세요.');
    return;
  }

  goStep(3);
}


/* ======================
   STEP 3 : 날짜 / 시간 선택
====================== */

/* 날짜 생성 (오늘부터 7일) */
function renderDates() {
  const dateList = document.getElementById('date_list');
  dateList.innerHTML = '';

  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);

    const label = `${d.getMonth() + 1}/${d.getDate()}`;
    const value = d.toISOString().split('T')[0];

    const btn = document.createElement('button');
    btn.className = 'date_btn';
    btn.innerText = label;
    btn.onclick = () => selectDate(value, btn);

    dateList.appendChild(btn);
  }
}

/* 시간 생성 */
function renderTimes() {
  const timeList = document.getElementById('time_list');
  timeList.innerHTML = '';

  const times = [
    '10:00','10:30','11:00','11:30',
    '12:00','12:30','13:00','13:30',
    '14:00','14:30','15:00','15:30',
    '16:00','16:30','17:00'
  ];

  times.forEach(time => {
    const btn = document.createElement('button');
    btn.className = 'time_btn';
    btn.innerText = time;
    btn.onclick = () => selectTime(time, btn);
    timeList.appendChild(btn);
  });
}

/* 날짜 선택 */
function selectDate(value, btn) {
  pickupState.selectedDate = value;
  document.querySelectorAll('.date_btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  updateSelectedText();
}

/* 시간 선택 */
function selectTime(value, btn) {
  pickupState.selectedTime = value;
  document.querySelectorAll('.time_btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  updateSelectedText();
}

/* 선택 문구 */
function updateSelectedText() {
  const el = document.getElementById('selected_datetime');

  if (pickupState.selectedDate && pickupState.selectedTime) {
    el.innerText =
      `선택한 픽업 시간 : ${pickupState.selectedDate} ${pickupState.selectedTime}`;
  }
}


/* ======================
   선택 완료
====================== */
function completePickup() {
  if (!pickupState.selectedDate || !pickupState.selectedTime) {
    alert('픽업 날짜와 시간을 선택해주세요.');
    return;
  }

  // 완료 후 메인 페이지 이동
  location.href = '/index.html';
}


/* ======================
   안내 모달
====================== */
function openNoticeModal() {
  document.getElementById('notice_modal').classList.add('is_open');
}

function closeNoticeModal() {
  document.getElementById('notice_modal').classList.remove('is_open');
}
