$(upgradeDatas).each((idx, data) => {
  const upgrade = `
      <div class="plan_card">
        <div class="card_description">
          <h2>${data.title}</h2>
          <p>${data.description}</p>
        </div>
        <div>
          <h1>${data.price}</h1>
          <p>per month</p>
        </div>
        <button class="card_btn">Get started</button>
        <ul class="card_features">
          <li><p>${data.features1}</p></li>
          <li><p>${data.features2}</p></li>
          <li><p>${data.features3}</p></li>
        </ul>
        <div class="card_includes">
          <p>Free includes:</p>
          <div class="includes_list">
            <p>${data.includes1}</p>
            <p>${data.includes2}</p>
            <p>${data.includes3}</p>
          </div>
        </div>
      </div>
  `;

  $(".plan_track").append(upgrade);
});

const slider = document.getElementById('slider');
const cards = document.querySelectorAll('.plan_card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function moveTo(i) {
  cards[i].scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest'
  });

  cards.forEach(card => card.classList.remove('active'));
  cards[i].classList.add('active');

  index = i; // ⭐ 이 줄 중요
}

prevBtn.onclick = () => {
  if (index > 0) moveTo(--index);
};

nextBtn.onclick = () => {
  if (index < cards.length - 1) moveTo(++index);
};

cards.forEach((card, i) => {
  card.addEventListener('click', () => {
    moveTo(i);
  });
});
moveTo(0); // 첫 카드부터 시작