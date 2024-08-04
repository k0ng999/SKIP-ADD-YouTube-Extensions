function checkAndClickButtons() {
  const buttons = document.querySelectorAll('.ytp-skip-ad-button');


  buttons.forEach(button => {
    if (button) {
      button.click();
      console.log('Реклама успешно пропущена!');
    }
  });


  if (document.querySelector('.ytp-preview-ad__text')) {
    var video = document.querySelector('video');

    if (video.duration) {
      video.currentTime = video.duration;
    } else {
      console.log('Продолжительность видео неизвестна.');
    }
  }

}

function startClicking() {
  setInterval(checkAndClickButtons, 1000);
}


window.addEventListener('load', () => {
  startClicking();
});
