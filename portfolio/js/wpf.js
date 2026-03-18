$(document).ready(function () {
  const $grid = $('.web_portfolio_grid');

  wpfs.forEach(item => {
    const rollText = `${item.roll} · `.repeat(10);

    const wpf = `
      <a class="wpf_portfolio_card" href="${item.link}" target="_black">
        <div class="card_inner">
          <div class="card_front">
            <h3>${item.title}</h3>
            <div class="portfolio_images">
              <img src="${item.img}" alt="PC, Mobile View">
            </div>
            <p class="roll">
              <span>${rollText}</span>
              <span>${rollText}</span>
            </p>
          </div>

          <div class="card_back">
            <p>${item.text}</p>
            <span class="view_more">View Project →</span>
          </div>
        </div>
      </a>
    `;

    $grid.append(wpf);
  });

  $('.wpf_portfolio_card').each(function (idx) {
    setTimeout(() => {
      $(this).addClass('visible');
    }, idx * 150);
  });
});
