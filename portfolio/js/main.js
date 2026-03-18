// 햄버거 토글
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// ### about ###
// 스킬 애니메이션
const skillFills = document.querySelectorAll('.skill_fill');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.getAttribute('data-width');
      entry.target.style.width = width;
    }
  });
}, { threshold: 0.5 });
skillFills.forEach(fill => observer.observe(fill));

// 스크롤 시 헤더 배경색
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ### 웹 포트폴리오 스크롤 시 fade-in ###
const portfolioCards = document.querySelectorAll('.portfolio-card');
const observerPortfolio = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // progress bar 애니메이션
      const fill = entry.target.querySelector('.progress-fill');
      fill.style.width = fill.style.width || '100%';
    }
  });
}, { threshold: 0.3 });

portfolioCards.forEach(card => observerPortfolio.observe(card));

// ### 탑 버튼 요소 ###
const topBtn = document.getElementById("topBtn");

// 스크롤 시 버튼 표시
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.opacity = "1";
  } else {
    topBtn.style.opacity = "0";
  }
};

// 버튼 클릭 시 부드럽게 스크롤
topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});