function updateTime() {
  const timeElement = document.getElementById("current-time");
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

updateTime();
// Optionally update every second
setInterval(updateTime, 1000);
