document.addEventListener("DOMContentLoaded", () => {
  const shopGrid = document.querySelector(".shop_grid");
  const tabs = document.querySelectorAll(".category_item");

  // 🔽 fixed header 고려한 스크롤 이동
  function scrollToShopTop() {
    if (!shopGrid) return;

    const HEADER_HEIGHT = 100; // ⚠️ 헤더 높이에 맞게 조절
    const y =
      shopGrid.getBoundingClientRect().top +
      window.scrollY -
      HEADER_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }

  function renderMenu(category, sub = null) {
    shopGrid.innerHTML = "";
    let items = [];

    // ===== 전체 =====
    if (category === "all") {
      Object.values(shopList).forEach(group => {
        Object.values(group).forEach(subGroup => {
          items = items.concat(subGroup);
        });
      });
    }

    // ===== 서브 =====
    else if (sub) {
      items = shopList[category]?.[sub] || [];
    }

    // ===== 부모 (food / living) =====
    else {
      Object.values(shopList[category] || {}).forEach(subGroup => {
        items = items.concat(subGroup);
      });
    }

    if (!items.length) {
      shopGrid.innerHTML = "<div class='null'><img src='/assets/images/null.png'><p>해당 카테고리에 상품이 없습니다.</p></div>";
      return;
    }

    items.forEach(item => {
      shopGrid.insertAdjacentHTML(
        "beforeend",
        `
        <div class="shop_card">
          <img src="/assets/images/${item.image}.webp" alt="${item.name}">
          <h4>${item.name}</h4>
          <p>${item.price}원</p>
          <button class="btn">담기</button>
        </div>
        `
      );
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", e => {
      if (tab.tagName === "A") {
        return; // preventDefault 안 함
      }

      e.preventDefault();

      const category = tab.dataset.category;
      const sub = tab.dataset.sub;

      if (!category) return;

      // ===== 서브 클릭 =====
      if (sub) {
        tabs.forEach(t => t.classList.remove("is_active"));

        // 부모 active 유지
        document
          .querySelector(`.category_item[data-category="${category}"]`)
          ?.classList.add("is_active");

        tab.classList.add("is_active");

        renderMenu(category, sub);
        scrollToShopTop();
        return;
      }

      // ===== 부모 / 전체 클릭 =====
      tabs.forEach(t => t.classList.remove("is_active"));
      tab.classList.add("is_active");

      // 서브 닫기
      document
        .querySelectorAll(".category_item.food")
        .forEach(el => el.classList.remove("is_open"));
      document
        .querySelectorAll(".category_item.living")
        .forEach(el => el.classList.remove("is_open"));

      // ===== 푸드 =====
      if (category === "food") {
        document
          .querySelectorAll(".category_item.food")
          .forEach(el => el.classList.add("is_open"));

        renderMenu("food");
        scrollToShopTop();
        return;
      }

      // ===== 리빙 =====
      if (category === "living") {
        document
          .querySelectorAll(".category_item.living")
          .forEach(el => el.classList.add("is_open"));

        renderMenu("living");
        scrollToShopTop();
        return;
      }

      // ===== 전체 =====
      renderMenu(category);
      scrollToShopTop();
    });
  });

  // 최초 진입
  renderMenu("all");
});
