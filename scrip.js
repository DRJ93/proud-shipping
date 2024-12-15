const menuHamburguesa = document.getElementById('menu-hamburguesa');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const closeDrawer = document.getElementById('close-drawer');

menuHamburguesa.addEventListener('click', () => {
  drawer.classList.add('drawer-open');
  overlay.classList.add('overlay-active');
});

overlay.addEventListener('click', () => {
  drawer.classList.remove('drawer-open');
  overlay.classList.remove('overlay-active');
});

closeDrawer.addEventListener('click', () => {
  drawer.classList.remove('drawer-open');
  overlay.classList.remove('overlay-active');
});

const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});