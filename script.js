const menuOpen = ((event) => {
  const menuSettings = document.querySelector('.menu-settings');
  const menuApplications = document.querySelector('.menu-applications');

  const settingsBlock = event.target.closest('.footer-content__menu-item--settings');
  const applicationsBtn = event.target.closest('.main-nav__content--applications');

  settingsBlock ? menuSettings.classList.toggle('hide') : menuSettings.classList.add('hide');
  applicationsBtn ? menuApplications.classList.toggle('hide') : menuApplications.classList.add('hide');
});

document.addEventListener('click', menuOpen);