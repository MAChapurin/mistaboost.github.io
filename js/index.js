const LINKS = document.querySelectorAll(
  '.header__link'
);

LINKS.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});