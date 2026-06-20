const header = document.querySelector('.header');
const toggleHeader = () => header.classList.toggle('header--scrolled', window.scrollY > 40);
window.addEventListener('scroll', toggleHeader);
toggleHeader();
