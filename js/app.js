const playlist = [
  {
    title: "Goodby To A Lover Again",
    artist: "Isak Danielson",
    src: "assets\\audio\\Goodbye To A Lover Again   Isak Danielson.m4a",
  },
  {
    title: "Happens All the Time",
    artist: "Depeche Mode",
    src: "assets\\audio\\Delta Machine CD 2 TRACK 2 (320).mp3",
  },
  {
    title: "Goodbye",
    artist: "Depeche Mode",
    src: "assets\\audio\\Delta Machine CD 1 TRACK 13 (320).mp3",
  },
];

let currentSongIndex = 0;

const audio = document.getElementById("audio-element");
const playPauseBtn = document.getElementById("play-pause-btn");
const volumeSlider = document.getElementById("volume-slider");
const muteBtn = document.getElementById("mute-btn");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");

// اصلاح آیدی‌ها برای همخوانی با HTML
const titleDisplay = document.getElementById("song-title");
const artistDisplay = document.getElementById("song-artist");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

function formatTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
}

function loadSong(song) {
  titleDisplay.textContent = song.title;
  artistDisplay.textContent = song.artist;
  audio.src = song.src;
}

function playNextSong() {
  currentSongIndex++;

  if (currentSongIndex >= playlist.length) {
    currentSongIndex = 0;
  }

  loadSong(playlist[currentSongIndex]);
  audio.play();
  playPauseBtn.textContent = "Pause";
}
// بارگذاری اولین آهنگ هنگام لود شدن صفحه
loadSong(playlist[currentSongIndex]);

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Pause";
  } else {
    audio.pause();
    playPauseBtn.textContent = "Play";
  }
});

audio.addEventListener("loadedmetadata", () => {
  progressBar.max = Math.floor(audio.duration);
  durationDisplay.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  progressBar.value = Math.floor(audio.currentTime);
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

volumeSlider.addEventListener("input", (event) => {
  audio.volume = event.target.value;
  if (audio.volume == 0) {
    muteBtn.textContent = "Unmute";
    audio.muted = true;
  } else {
    muteBtn.textContent = "Mute";
    audio.muted = false;
  }
});

muteBtn.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
    muteBtn.textContent = "Mute";
    volumeSlider.value = audio.volume;
  } else {
    audio.muted = true;
    muteBtn.textContent = "Unmute";
    volumeSlider.value = 0;
  }
});

nextBtn.addEventListener("click", () => {
  playNextSong();
});

prevBtn.addEventListener("click", () => {
  currentSongIndex--;
  // خطای شکسته شدن کد در این قسمت برطرف شد
  if (currentSongIndex < 0) {
    currentSongIndex = playlist.length - 1;
  }
  loadSong(playlist[currentSongIndex]);
  audio.play();
  playPauseBtn.textContent = "Pause";
});

audio.addEventListener("ended", () => {
  playNextSong();
});