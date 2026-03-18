$(playlistDatas).each((idx, data) => {
  const playlist = `
    <a href="${data.link}" class="card">
      <img src="${data.album}" alt="album">
      <div class="title">${data.title}</div>
      <div class="meta">${data.txt}</div>
    </a>
  `;

  $(".playlist_card_grid").append(playlist);
});

$(byGenreDatas).each((idx, data) => {
  const byGenre = `
    <a href="${data.link}" class="card">
      <img src="${data.album}" alt="album">
      <div class="title">${data.title}</div>
      <div class="meta">${data.txt}</div>
    </div>
  `;

  $(".byGenre_card_grid").append(byGenre);
});