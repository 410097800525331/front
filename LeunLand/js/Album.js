// page 스크롤
const main = document.querySelector(".main");
const pages = document.querySelectorAll(".page");

let currentPage = 0;
let isScrolling = false;

// 모바일 여부 체크
function isDesktop() {
  return window.matchMedia("(min-width: 769px)").matches;
}

function scrollToPage(index) {
  if (!isDesktop()) return;

  main.scrollTo({
    left: index * main.clientWidth,
    behavior: "smooth"
  });
}

// wheel 스크롤
main.addEventListener(
  "wheel",
  function (e) {
    if (!isDesktop()) return; // 📱 모바일이면 무시

    e.preventDefault();
    if (isScrolling) return;
    isScrolling = true;

    if (e.deltaY > 0) {
      currentPage = Math.min(currentPage + 1, pages.length - 1);
    } else {
      currentPage = Math.max(currentPage - 1, 0);
    }

    scrollToPage(currentPage);

    setTimeout(() => {
      isScrolling = false;
    }, 600);
  },
  { passive: false }
);

// 리사이즈 대응
window.addEventListener("resize", () => {
  if (isDesktop()) {
    scrollToPage(currentPage);
  } else {
    // 모바일에서는 스크롤 위치 초기화
    main.scrollTo({ left: 0 });
  }
});


// 앨범 열림/닫힘
const albums = document.querySelectorAll(".album_book");

albums.forEach(album => {
  album.addEventListener("click", () => {
    albums.forEach(a => {
      if (a !== album) a.classList.remove("open");
    });
    album.classList.toggle("open");
  });
});

// 동영상 재생
const video = document.querySelector(".page2 video");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // 모바일에서 자동재생 막힐 경우 대비
          console.log("Autoplay blocked");
        });
      }
    } else {
      video.pause();
    }
  },
  { threshold: 0.6 }
);

observer.observe(video);
