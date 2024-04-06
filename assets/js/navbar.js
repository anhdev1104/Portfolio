const navbar = () => {
  const navbarIcon = document.querySelector('.navbar-icon');
  const overlay = document.querySelector('.overlay');
  const navbarMenu = document.querySelector('.navbar-menu');
  const navbarClose = document.querySelector('.navbar-close');
  const navbarLink = document.querySelectorAll('.navbar-menu-link');

  navbarIcon.addEventListener('click', () => {
    overlay.classList.toggle('active');
    navbarMenu.style = 'transform: translate(0)';
  });

  navbarLink.forEach(item =>
    item.addEventListener('click', () => {
      navbarMenu.style = 'transform: translate(100%)';
      overlay.classList.remove('active');
    })
  );

  navbarClose.addEventListener('click', () => {
    navbarMenu.style = 'transform: translate(100%)';
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
  });
};

export default navbar;
