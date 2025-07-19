// Smooth scroll navigation
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    const headerHeight = 80; // Header height in pixels
    const elementPosition = section.offsetTop - headerHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
  // Close mobile nav after navigation
  if (window.innerWidth <= 700) {
    document.getElementById('mobileNav').classList.remove('open');
    document.getElementById('hamburger').classList.remove('active');
  }
}
// Navigation event listeners
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', e => {
    const target = btn.getAttribute('data-scroll');
    scrollToSection(target);
  });
});
// Hamburger menu toggle
function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  const hamburger = document.getElementById('hamburger');
  nav.classList.toggle('open');
  hamburger.classList.toggle('active');
}
// Hide mobile nav on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    document.getElementById('mobileNav').classList.remove('open');
    document.getElementById('hamburger').classList.remove('active');
  }
});
// Modal/lightbox for menu images
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');
document.querySelectorAll('.see-img').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const card = btn.closest('.menu-card');
    const imgSrc = card.getAttribute('data-img');
    modalImg.src = imgSrc;
    modal.classList.add('open');
  });
});
document.querySelectorAll('.menu-card img').forEach(img => {
  img.addEventListener('click', e => {
    const card = img.closest('.menu-card');
    const imgSrc = card.getAttribute('data-img');
    modalImg.src = imgSrc;
    modal.classList.add('open');
  });
});
closeModal.addEventListener('click', () => {
  modal.classList.remove('open');
  modalImg.src = '';
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    modalImg.src = '';
  }
});
// Trigger animations on scroll/entrance
function animateOnScroll() {
  document.querySelectorAll('.section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      section.style.animationPlayState = 'running';
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll); 