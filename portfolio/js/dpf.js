$(document).ready(function () {
  const $grid = $('.dpf_portfolio_grid');

  dpfs.forEach(item => {
    const dpf = `
      <div class="dpf_portfolio_item" data-info="${item.imgInfo}" data-aos="fade-up" data-aos-delay="${item.num}00">
        <img src="${item.img}" alt="Work ${item.num}">
        <div class="portfolio_overlay">
          <h3>${item.title}</h3>
          <h4>More View +</h4>
        </div>
      </div>
    `;
    $grid.append(dpf);
  });

  // 카드 클릭 → 모달
  $(document).on('click', '.dpf_portfolio_item', function () {
    const infoImg = $(this).data('info');
    if (!infoImg) return; // info 없으면 아무것도 안 함

    $('#infoModal img').attr('src', infoImg);
    $('#infoModal').addClass('active');
    $('body').css('overflow', 'hidden');
  });

  // 닫기 버튼 / 배경 클릭
  $('.info_modal_close, .info_modal_overlay').on('click', function () {
    $('#infoModal').removeClass('active');
    $('#infoModal img').attr('src', '');
    $('body').css('overflow', '');
  });
});
