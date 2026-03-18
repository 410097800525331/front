$(document).ready(function () {

  /* ---------- Sidebar / Top ---------- */

  const leftSidebar = `
    <button id="left_sidebar_toggle">☰</button>

    <div class="ico_nav">
      <a href="/basic/Home.html"><img src="/assets/img/ico-Home.svg" alt="Home"></a>
      <a href="/basic/Profile.html"><img src="/assets/img/ico-For-you.svg" alt="Profile"></a>
      <a href="/basic/Diary.html"><img src="/assets/img/ico-Diary.png" alt="Diary"></a>
      <a href="/basic/Album.html"><img src="/assets/img/ico-Library.svg" alt="Album"></a>
      <a href="/basic/MiniGame.html"><img src="/assets/img/ico-minigame.png" alt="Min iGame"></a>
    </div>

    <nav class="nav">
      <a href="/basic/Home.html">Home</a>
      <a href="/basic/Profile.html">Profile</a>
      <a href="/basic/Diary.html">Diary</a>
      <a href="/basic/Album.html">Album</a>
      <a href="/basic/MiniGame.html">Mini Game</a>
    </nav>
  `;
  $(".left_sidebar").append(leftSidebar);

  const top = `
    <input class="search" placeholder="Search" />
    <div>
      <ul class="user_menu">
        <li><button id="signup_btn">Sign Up</button></li>
        <li><button id="signin_btn">Sign In</button></li>
      </ul>
    </div>
  `;
  $(".top").append(top);

  /* ---------- Sidebar state restore ---------- */

  const sidebarState = localStorage.getItem("sidebar_collapsed");
  if (sidebarState === "1") {
    $(".left_sidebar").addClass("is_collapsed");
    $(".layout").addClass("sidebar_collapsed");
    $("#left_sidebar_toggle").text("✕");
  }

  /* ---------- Sidebar toggle ---------- */

  $(document).on("click", "#left_sidebar_toggle", function () {
    $(".left_sidebar").toggleClass("is_collapsed");
    $(".layout").toggleClass("sidebar_collapsed");

    const isCollapsed = $(".left_sidebar").hasClass("is_collapsed");
    localStorage.setItem("sidebar_collapsed", isCollapsed ? "1" : "0");

    $(this).text(isCollapsed ? "✕" : "☰");
  });

  /* ---------- Active menu ---------- */

  const currentPath = window.location.pathname;

  $(".left_sidebar a").removeClass("active");

  $(".left_sidebar a").each(function () {
    const linkPath = $(this).attr("href");
    if (linkPath === currentPath) {
      $(this).addClass("active");
    }
  });

});
