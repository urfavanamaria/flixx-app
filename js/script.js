const global = {
  currentPage: window.location.pathname,
};

//hilight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('nav a');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

//init App
function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      loadHome();
      break;
    case '/shows.html':
      loadAbout();
      break;
    case '/movie-details.html':
      loadContact();
      break;
    case '/tv-details.html':
      loadContact();
      break;
    case '/search.html':
      loadContact();
      break;
    default:
      loadNotFound();
  }
  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', () => init());
