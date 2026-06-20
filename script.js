const CAREER_START_YEAR = 2016;
const careerYears = new Date().getFullYear() - CAREER_START_YEAR + 1;
document.querySelectorAll('.career-years').forEach((el) => {
  el.textContent = careerYears;
});

const header = document.querySelector('.header');
const toggleHeader = () => header.classList.toggle('header--scrolled', window.scrollY > 40);
window.addEventListener('scroll', toggleHeader);
toggleHeader();
