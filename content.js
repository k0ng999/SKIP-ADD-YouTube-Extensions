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

function startObserver() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' || mutation.type === 'subtree') {
        checkAndClickButtons();
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

window.addEventListener('load', () => {
  startObserver();
});

