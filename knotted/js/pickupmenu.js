/* =========================
  상태 값
========================= */
let currentCategory = 'all';
let selectedMenus = {};

/* =========================
  메뉴 데이터
========================= */
const menus = [
  { name: '생딸기 프레지에 도넛', img: 'donut1', price: 4800, category: 'donut' },
  { name: '생딸기 프릴 크림 도넛', img: 'donut3', price: 4500, category: 'donut' },
  { name: '생딸기 몽글 초코 도넛', img: 'donut4', price: 4800, category: 'donut' },
  { name: '제주 말차 라떼 도넛', img: 'donut9', price: 4500, category: 'donut' },
  { name: '스마일 보스톤 크림 도넛', img: 'donut11', price: 4200, category: 'donut' },
  { name: '저당 크림 도넛', img: 'donut12', price: 4200, category: 'donut' },
  { name: '저당 초코 크림 도넛', img: 'donut13', price: 4500, category: 'donut' },
  { name: '우유 생크림 도넛', img: 'donut16', price: 3900, category: 'donut' },
  { name: '클래식 바닐라 도넛', img: 'donut17', price: 3500, category: 'donut' },
  { name: '초코푸딩 도넛', img: 'donut18', price: 3900, category: 'donut' },
  { name: '얼그레이 도넛', img: 'donut19', price: 3500, category: 'donut' },
  { name: '레몬 슈가 도넛', img: 'donut20', price: 3900, category: 'donut' },
  { name: '라즈베리 도넛', img: 'donut21', price: 3500, category: 'donut' },

  { name: '생딸기 초코 가든 케이크', img: 'cake1', price: 12000, category: 'cake' },
  { name: '옐로우 스마일 케이크', img: 'cake6', price: 22000, category: 'cake' },
  { name: '크림버니의 핑크 가든', img: 'cake7', price: 21000, category: 'cake' },
  { name: '땡큐 블루베리 머치', img: 'cake9', price: 24000, category: 'cake' },
  { name: '마스카포네 치즈 케이크', img: 'cake10', price: 27000, category: 'cake' },

  { name: '종이쇼핑백 추가', img: 'other1', price: 300, category: 'other' },
  { name: '비닐쇼핑백 추가', img: 'other2', price: 200, category: 'other' },
];

/* =========================
  카테고리 필터
========================= */
function filterMenu(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.menu_category button')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu();
}

/* =========================
  메뉴 렌더링
========================= */
function renderSelected() {
  const list = document.getElementById('selected_list');
  const totalEl = document.getElementById('total');
  list.innerHTML = '';

  let totalQty = 0;
  let totalPrice = 0;

  Object.keys(selectedMenus).forEach(name => {
    const item = selectedMenus[name];
    totalQty += item.qty;
    totalPrice += item.qty * item.price;

    list.innerHTML += `
      <div class="selected_item">
        <span>${name}</span>
        <div class="qty">
          <button onclick="changeQty('${name}', -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty('${name}', 1)">+</button>
        </div>
        <span class="remove" onclick="removeMenu('${name}')">✕</span>
      </div>
    `;
  });

  totalEl.innerText =
    `총 ${totalQty}개 · ${totalPrice.toLocaleString()}원`;
}

// 상세 모달용 상태
let currentDetailMenu = null;

function openDetail(name) {
  const menu = menus.find(m => m.name === name);
  currentDetailMenu = menu;

  const imgEl = document.getElementById('detail_img');
  imgEl.src = `/assets/images/${menu.img}-info.png`;
  imgEl.alt = menu.name;

  document
    .getElementById('detail_modal')
    .classList.add('is_open');
}

function closeDetail() {
  document
    .getElementById('detail_modal')
    .classList.remove('is_open');
}

function addMenuFromDetail() {
  addMenu(currentDetailMenu.name);
  closeDetail();
}

/* =========================
  메뉴 담기
========================= */
function addMenu(name) {
  const menu = menus.find(m => m.name === name);

  if (!selectedMenus[name]) {
    selectedMenus[name] = {
      price: menu.price,
      qty: 1
    };
  } else {
    selectedMenus[name].qty++;
  }

  renderSelected();
}

/* =========================
  수량 변경
========================= */
function changeQty(name, delta) {
  selectedMenus[name].qty += delta;
  if (selectedMenus[name].qty <= 0) {
    delete selectedMenus[name];
  }
  renderSelected();
}

function removeMenu(name) {
  delete selectedMenus[name];
  renderSelected();
}

/* 최초 로딩 */
renderMenu();

function renderMenu() {
  const list = document.getElementById('menu_list');
  list.innerHTML = '';

  const filtered =
    currentCategory === 'all'
      ? menus
      : menus.filter(m => m.category === currentCategory);

  filtered.forEach(menu => {
    const html = `
      <div class="menu_card">
        <img src="/assets/images/${menu.img}.png" alt="${menu.name}">
        <h4>${menu.name}</h4>
        <p>${menu.price.toLocaleString()}원</p>
        <div class="menu_btns">
          <button onclick="openDetail('${menu.name}')">상세</button>
          <button onclick="addMenu('${menu.name}')">담기</button>
        </div>
      </div>
    `;
    list.insertAdjacentHTML('beforeend', html);
  });
}

function closeDetail() {
  document
    .getElementById('detail_modal')
    .classList.remove('is_open');
}
