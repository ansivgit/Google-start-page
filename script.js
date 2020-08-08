const menuSettings = document.querySelector('.menu-settings');

const menuSettingsOpen = ((event) => {
  const settingsBlock = event.target.closest('.footer-content__menu-item--settings');

  settingsBlock ? menuSettings.classList.toggle('hide') : menuSettings.classList.add('hide');
});

document.addEventListener('click', menuSettingsOpen);