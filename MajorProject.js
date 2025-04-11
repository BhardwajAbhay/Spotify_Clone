// ===========================
// Simulated Music Player Controls
// ===========================
let isPlaying = false;

const playButton = document.getElementById("play-btn");

if (playButton) {
  playButton.addEventListener("click", () => {
    isPlaying = !isPlaying;
    playButton.src = isPlaying ? "pause_icon.png" : "play_icon.png";
  });
}

// ===========================
// Navigation Highlight on Click
// ===========================
const navOptions = document.querySelectorAll(".nav-option");

navOptions.forEach((option) => {
  option.addEventListener("click", () => {
    navOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");
  });
});

// ===========================
// Dynamically Load Cards (e.g. Playlists/Albums)
// ===========================
const cardContainer = document.querySelector(".card-container");

const playlists = [
  {
    title: "Top 50 Global",
    info: "Most played songs around the world",
    image: "top50.jpg",
  },
  {
    title: "Chill Vibes",
    info: "Relaxing and ambient tunes",
    image: "chill.jpg",
  },
  {
    title: "Workout Hits",
    info: "Pump up your energy",
    image: "workout.jpg",
  },
];

if (cardContainer) {
  playlists.forEach((playlist) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${playlist.image}" class="card-img" alt="${playlist.title}" />
      <p class="card-title">${playlist.title}</p>
      <p class="card-info">${playlist.info}</p>
    `;
    cardContainer.appendChild(card);
  });
}

// ===========================
// Toggle Sidebar (For Mobile View)
// ===========================
const toggleBtn = document.getElementById("toggle-sidebar");
const sidebar = document.querySelector(".sidebar");

if (toggleBtn && sidebar) {
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hide");
  });
}
