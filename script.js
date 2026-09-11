const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Smooth reveal on scroll
const revealTargets = document.querySelectorAll(
  '.content-card, .competency-card, .timeline-card, .project-case, .education-card, .process-step'
);

revealTargets.forEach(el => el.classList.add('reveal-item'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => observer.observe(el));

const copyEmailButton = document.getElementById('copyEmailButton');

if (copyEmailButton) {
  copyEmailButton.addEventListener('click', async () => {
    const email = 'sgcnascimento@gmail.com';

    try {
      await navigator.clipboard.writeText(email);
      const originalText = copyEmailButton.textContent;
      copyEmailButton.textContent = 'E-mail copiado';
      copyEmailButton.classList.add('copied');

      setTimeout(() => {
        copyEmailButton.textContent = originalText;
        copyEmailButton.classList.remove('copied');
      }, 1800);
    } catch (error) {
      window.prompt('Copie o e-mail abaixo:', email);
    }
  });
}
