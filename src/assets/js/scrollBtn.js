const scrollBtn = document.querySelector('[data-scroll-btn]');

scrollBtn.addEventListener('click', scrollHero);

function scrollHero() {
  const targetElement = document.querySelector('#about'); // Change this to the actual target element you want to scroll to
  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
