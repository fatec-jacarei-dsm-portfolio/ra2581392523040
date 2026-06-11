const video = document.getElementById('agrirsVideo');

const startTime = 10;
const endTime = 28;

video.addEventListener('loadedmetadata', () => {
  video.currentTime = startTime;
});

video.addEventListener('timeupdate', () => {
  if (video.currentTime >= endTime) {
    video.currentTime = startTime;
    video.play();
  }
});
