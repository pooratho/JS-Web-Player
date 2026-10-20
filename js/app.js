const volumeSlider = document.getElementById("volume-slider");
const muteBtn = document.getElementById("mute-btn");

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
}

const audio = document.getElementById("audio-element");
const playPauseBtn = document.getElementById("play-pause-btn");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Pause";
  } else {
    audio.pause();
    playPauseBtn.textContent = "Play";
  }
});

const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");

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

volumeSlider.addEventListener("input", () => {
    audio.volume = event.target.value;

    if (audio.volume === 0) {
        muteBtn.textContent = "Unmute";
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