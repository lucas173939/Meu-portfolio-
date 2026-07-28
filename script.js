// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Efeito de scroll na navbar
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Animação de entrada dos elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar cards de projetos
document.querySelectorAll('.project-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Observar skill categories
document.querySelectorAll('.skill-category').forEach(skill => {
  skill.style.opacity = '0';
  skill.style.transform = 'translateY(20px)';
  skill.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(skill);
});

// Form de contato
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    // Aqui você pode adicionar lógica para enviar o email
    // Por enquanto, apenas mostramos uma mensagem
    alert('Obrigado pela mensagem! Em breve você receberá uma resposta.');
    this.reset();
  });
}

// Efeito parallax suave no hero
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrollY = window.pageYOffset;
    hero.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
  }
});

// Log para desenvolvimento
console.log('%cPortfólio Desenvolvedor Full Stack', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cBem-vindo! Este é um portfólio moderno e responsivo.', 'font-size: 14px; color: #cbd5e1;');
