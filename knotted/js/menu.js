document.addEventListener("DOMContentLoaded", () => {
  const menuGrid = document.querySelector(".menu_grid");
  const tabs = document.querySelectorAll(".category_item");

  /* 🔽 fixed header 고려한 스크롤 이동 */
  function scrollToMenuTop() {
    if (!menuGrid) return;

    const HEADER_HEIGHT = 100; // ⚠️ 헤더 높이에 맞게 조절
    const y =
      menuGrid.getBoundingClientRect().top +
      window.scrollY -
      HEADER_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }

  /* 메뉴 렌더링 */
  function renderMenu(category, sub = null) {
    menuGrid.innerHTML = "";
    let items = [];

    if (category === "all") {
      Object.values(menuList).forEach(list => {
        if (Array.isArray(list)) {
          items = items.concat(list);
        } else {
          Object.values(list).forEach(subList => {
            items = items.concat(subList);
          });
        }
      });
    } else if (category === "beverage" && sub) {
      items = menuList.beverage[sub];
    } else if (category === "beverage") {
      Object.values(menuList.beverage).forEach(list => {
        items = items.concat(list);
      });
    } else {
      items = menuList[category];
    }

    if (!items || items.length === 0) {
      menuGrid.innerHTML = "<div class='null'><img src='/assets/images/null.png'><p>해당 카테고리에 상품이 없습니다.</p></div>";
      return;
    }

    items.forEach(item => {
      menuGrid.insertAdjacentHTML(
        "beforeend",
        `
    <div class="menu_card"
      data-info="/assets/images/${item.image}-info.png">
      <img src="/assets/images/${item.image}.png" alt="${item.name}">
      <h4>${item.name}</h4>
    </div>
    `
      );
    });

  }

  /* 탭 클릭 */
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.category;
      const sub = tab.dataset.sub;
      const isParent = tab.dataset.type === "parent";

      // 전체 active 제거
      tabs.forEach(t => t.classList.remove("is_active"));

      // 클릭한 탭 active
      tab.classList.add("is_active");

      // 🔥 beverage 서브 클릭 시
      if (category === "beverage" && sub) {
        document
          .querySelector(
            '.category_item[data-category="beverage"][data-type="parent"]'
          )
          ?.classList.add("is_active");

        renderMenu("beverage", sub);
        scrollToMenuTop();
        return;
      }

      // BEVERAGE 부모 클릭
      if (isParent) {
        document.querySelectorAll(".category_item.beverage").forEach(el => {
          el.classList.toggle("is_open");
        });

        renderMenu("beverage");
        scrollToMenuTop();
        return;
      }

      // 일반 카테고리
      document.querySelectorAll(".category_item.beverage").forEach(el => {
        el.classList.remove("is_open");
      });

      renderMenu(category);
      scrollToMenuTop();
    });
  });

  /* 최초 전체 */
  renderMenu("all");

  const imageModal = document.getElementById("image_modal");
  const modalImg = document.getElementById("image_modal_img");
  const modalClose = document.querySelector(".image_close");
  const modalDim = document.querySelector(".image_dim");

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".menu_card");
    if (!card) return;

    const infoImage = card.dataset.info;
    if (!infoImage) return;

    modalImg.src = infoImage;
    modalImg.alt = card.querySelector("h4")?.innerText || "";

    imageModal.classList.add("is_open");
    document.body.style.overflow = "hidden";
  });

  function closeImageModal() {
    imageModal.classList.remove("is_open");
    modalImg.src = "";
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeImageModal);
  modalDim.addEventListener("click", closeImageModal);


});
