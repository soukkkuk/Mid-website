const btn = document.getElementById('hamburgerBtn');
const links = document.getElementById('navLinks');
btn.addEventListener('click', () => links.classList.toggle('open'));