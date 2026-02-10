setTimeout(() => {
  const modal = document.getElementById("adModal");
  const video = document.getElementById("adVideo");

  modal.style.display = "grid";
  video.play();
}, 5000);

function closeAd() {
  document.getElementById("adModal").style.display = "none";
}
