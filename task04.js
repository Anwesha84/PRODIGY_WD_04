// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.innerHTML = navMenu.classList.contains('open')
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// Close menu on link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// Active link on scroll
const sections = [...document.querySelectorAll('section[id]')];
const links = document.querySelectorAll('.nav-link');
const activate = (id) => {
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
};

const onScroll = () => {
  const scrollY = window.pageYOffset + 90; // header height offset
  for (const sec of sections) {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      activate(sec.id);
      break;
    }
  }
};
window.addEventListener('scroll', onScroll);
onScroll();

// Back to top button + year
const toTop = document.getElementById('to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) toTop.classList.add('show');
  else toTop.classList.remove('show');
});
toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form -> open mail app with prefilled content
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const fromEmail = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(
    `Hi Anwesha,\n\n${message}\n\n— ${name}\n${fromEmail}`
  );

  window.location.href = `mailto:anweshanath008@gmail.com?subject=${subject}&body=${body}`;
});
