
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

const dropButtons = document.querySelectorAll('.dropdown-toggle');
dropButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdown = btn.parentElement.querySelector('.dropdown');
    if (dropdown) {
      const visible = getComputedStyle(dropdown).display !== 'none';
      dropdown.style.display = visible ? 'none' : 'block';
    }
  });
});
