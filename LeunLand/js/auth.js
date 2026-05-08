// --- 마우스 원 로직 (Page 1 영역 한정) ---
const cursor1 = document.getElementById('cursor-1');
const cursor2 = document.getElementById('cursor-2');

let mouseX = 0;
let mouseY = 0;
let cursor2X = 0;
let cursor2Y = 0;

// 마우스 위치 추적 (전체 화면)
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor1.style.left = `${mouseX}px`;
  cursor1.style.top = `${mouseY}px`;
});

// 부드러운 추격
function animate() {
  cursor2X += (mouseX - cursor2X) * 0.12;
  cursor2Y += (mouseY - cursor2Y) * 0.12;

  cursor2.style.left = `${cursor2X}px`;
  cursor2.style.top = `${cursor2Y}px`;

  requestAnimationFrame(animate);
}

animate();

// auth.js
document.addEventListener("DOMContentLoaded", () => {
  const idInput = document.getElementById("auth_id");
  const pwInput = document.getElementById("auth_pw");
  const enterBtn = document.querySelector(".heart_btn");

  enterBtn.addEventListener("click", () => {
    const id = idInput.value.trim();
    const pw = pwInput.value.trim();

    if (id === "leun" && pw === "410") {
      window.location.href = "/main/Home.html";
    } else {
      alert("아이디 또는 비밀번호가 달라요!");
    }
  });

  // 엔터키 입장
  pwInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      enterBtn.click();
    }
  });
});