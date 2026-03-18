$(document).ready(function () {
  const playBar = `
    <button class="player_toggle" aria-label="toggle player"></button>
    <div class="player_track">
      <img src="/assets/img/sage_logo.svg" alt="album">
      <h3>곡 제목</h3>
    </div>
    <div class="player_controls">
      <button class="ctrl prev">⏮</button>
      <button class="ctrl play">▶</button>
      <button class="ctrl next">⏭</button>
    </div>
    <div class="player_progress">
      <div class="progress_bg">
        <div class="progress_fill"></div>
      </div>
    </div>
    <div class="player_right">
      <svg class="volume_icon" viewBox="0 0 24 24">
        <path d="M4 9h4l5-4v14l-5-4H4z" />
      </svg>
      <input type="range" min="0" max="1" step="0.01" value="0.7" class="volume_bar">
    </div>
  `;

  $(".player_bar").append(playBar);

  const playerBar = document.querySelector(".player_bar");
  const toggleBtn = document.querySelector(".player_toggle");

  const isOpen = localStorage.getItem("player_open") === "true";
  if (isOpen) {
    playerBar.classList.add("is_open");
  }

  toggleBtn.addEventListener("click", () => {
    playerBar.classList.toggle("is_open");

    localStorage.setItem(
      "player_open",
      playerBar.classList.contains("is_open")
    );
  });
});
