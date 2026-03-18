// --- 스크롤 로직 (기존 유지) ---
const container = document.getElementById('scroll-container');
let target = container.scrollLeft;
let current = target;
let isMoving = false;

container.addEventListener("wheel", e => {
  e.preventDefault();
  if (!isMoving) target = current = container.scrollLeft;
  target = Math.max(
    0,
    Math.min(container.scrollWidth - container.clientWidth, target + e.deltaY)
  );
  if (!isMoving) {
    isMoving = true;
    scrollAnimate();
  }
}, { passive: false });

function scrollAnimate() {
  current += (target - current) * 0.05;
  container.scrollLeft = current;
  if (Math.abs(target - current) < 0.5) {
    isMoving = false;
  } else {
    requestAnimationFrame(scrollAnimate);
  }
}


// ===============================
// 🌙 다크모드 토글 공통 함수
// ===============================
const themeToggle = document.querySelector('.theme_toggle');
const themeImg = themeToggle.querySelector('.cloud_img_1');
const themeText = themeToggle.querySelector('.speech');
const mainBg = document.getElementById('main_bg');

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');

  if (isDark) {
    // 🌙 다크모드
    themeImg.src = themeImg.dataset.moon;
    themeText.textContent = '라이트모드 (Light Mode)';
    mainBg.src = mainBg.dataset.night;
  } else {
    // ☀️ 라이트모드
    themeImg.src = themeImg.dataset.sun;
    themeText.textContent = '다크모드 (Dark Mode)';
    mainBg.src = mainBg.dataset.day;
  }
}

// 구름 버튼
themeToggle.addEventListener('click', toggleTheme);

// 사이드 메뉴 다크모드 버튼
const sideThemeBtn = document.querySelector('.theme_btn');
sideThemeBtn.addEventListener('click', toggleTheme);


// ===============================
// ☰ 사이드 메뉴 토글
// ===============================
const sideMenu = document.querySelector('.side_menu');
const sideToggle = document.querySelector('.side_toggle');

sideToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});


// ===============================
// 🐶 로운 위치로 이동
// ===============================
const scrollContainer = document.getElementById('scroll-container');
const rowoonBtn = document.querySelector('.goto_rowoon');
const rowoonSection = document.getElementById('rowoon');

rowoonBtn.addEventListener('click', () => {
  const targetX = rowoonSection.offsetLeft;

  scrollContainer.scrollTo({
    left: targetX - 120,
    behavior: 'smooth'
  });
});
