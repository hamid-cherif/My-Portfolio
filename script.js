// Immediate loading screen hide as fallback
(function() {
  // Hide loading screen immediately when script loads
  const loading = document.getElementById('loading');
  if (loading) {
    loading.style.display = 'none';
  }

  // Also hide after 3 seconds as absolute fallback
  setTimeout(() => {
    const loadingFallback = document.getElementById('loading');
    if (loadingFallback) {
      loadingFallback.style.display = 'none';
    }
  }, 3000);
})();

// Translation system
const translations = {
  en: {
    nav: {
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    sections: {
      about: {
        title: "About Me"
      },
      education: {
        title: "Education"
      },
      experience: {
        title: "Professional Experience"
      },
      projects: {
        title: "Projects & Certifications"
      },
      contact: {
        title: "Get in Touch"
      }
    },
    hero: {
      greeting: "Hello,",
      introduction: "I'm",
      description: "Dedicated to fortifying digital infrastructures and advancing national resilience. I blend expertise in SOC operations and Security Research with my work in developing contextualize incident response and governance frameworks. Utilizing technical skills in Defensive Security and Security Research, I bridge the gap between real-time defense and strategic oversight to protect complex systems against evolving cyber risks.",
      contact: "Contact Me",
      projects: "View Projects",
      cv: "Download CV",
      cvButton: "CV_V1.0"
    },
    experience: {
      title: "Professional Experience",
      jobTitle: "Cybersecurity Intern",
      period: "Feb, 2025 - June, 2025",
      company: "SecIQ Technologies LLP, Bangalore, India",
      role: "Web Application VAPT & DevSecOps",
      bullet1: "Conducted vulnerability assessments based on OWASP - 2021 Top 10 methodology.",
      bullet2: "Performed penetration testing to identify system weaknesses.",
      bullet3: "Analyzed security incidents and drafted comprehensive remediation reports.",
      bullet4: "Automated security testing within CI/CD pipelines to enable DevSecOps practices."
    },
    research: {
      title: "OnGoing Research",
      status: "Current Research",
      projectTitle: "\"Cybersecurity Framework for Incident Response and Governance to Strengthen E-Government Resilience in Chad\"",
      description: "Developing a comprehensive framework tailored for national digital infrastructures. This research utilizes Design Science Research methodology to integrate international standards (NIST CSF, ISO 27001, ISO 27035) into a localized governance model for effective threat mitigation.",
      tag1: "Incident Response",
      tag2: "Governance",
      tag3: "Design Science Research"
    },
    projects: {
      title: "Projects & Certifications",
      subtitle: "Hands-on implementation of security concepts and industry-recognized qualifications.",
      project1: {
        title: "Web App Penetration Testing",
        description: "Comprehensive security audit of a mock financial application identifying critical OWASP Top 10 vulnerabilities including SQL Injection and Broken Access Control.",
        viewSource: "View Source"
      },
      project2: {
        title: "ARP Cache Poisoning Tool",
        description: "Developed a Python-based network utility to demonstrate Man-in-the-Middle (MitM) attacks and test network resilience against spoofing.",
        viewSource: "View Source"
      }
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Interested in collaboration or research ?",
      contactInfo: "Contact Information",
      email: "Email",
      linkedin: "LinkedIn",
      languages: "Languages",
      english: "English",
      french: "French",
      arabic: "Arabic",
      name: "Name",
      emailLabel: "Email",
      message: "Message",
      sendMessage: "Send Message",
      footer: "Securing the digital frontier, one packet at a time.",
      copyright: "© 2025 Hamid Cherif Issa. All rights reserved.",
      namePlaceholder: "Jean Dupont",
      emailPlaceholder: "jean@example.com",
      messagePlaceholder: "Comment puis-je vous aider ?",
      validationMessage: "Veuillez remplir tous les champs.",
      successMessage: "Merci pour votre message ! Je vous répondrai bientôt."
    },
    typewriter: {
      string1: "Cybersecurity Researcher",
      string2: "SOC Analyst",
      string3: "Incident Response & Governance Specialist",
      string4: "Digital Resilience Advocate"
    }
  },
  fr: {
    nav: {
      about: "À propos",
      education: "Éducation",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact"
    },
    sections: {
      about: {
        title: "À propos de moi"
      },
      skills: {
        title: "Arsenal Technique"
      },
      education: {
        title: "Éducation"
      },
      experience: {
        title: "Expérience Professionnelle"
      },
      projects: {
        title: "Projets & Certifications"
      },
      contact: {
        title: "Contactez-moi"
      }
    },
    about: {
      paragraph1: "Je suis un chercheur passionné en cybersécurité et un analyste SOC axé sur la technique, spécialisé dans la détection, l'analyse et la résolution des menaces multi-vecteurs. J'utilise des compétences pratiques en piratage éthique et sécurité réseau pour neutraliser de manière proactive les risques et renforcer les infrastructures critiques.",
      paragraph2: "Mon approche est axée sur la recherche, spécifiquement concentrée sur le développement d'un cadre de cybersécurité pour la réponse aux incidents et la gouvernance. Ce travail comble le fossé entre l'exécution technique et la supervision stratégique pour rationaliser la récupération et la résilience organisationnelles.",
      paragraph3: "Mes recherches actuelles se concentrent sur le renforcement de la résilience des e-gouvernements grâce à des cadres avancés de réponse aux incidents et de gouvernance, en appliquant et contextualisant des normes internationales comme NIST et ISO 27035 pour relever des défis nationaux concrets.",
      card1: {
        title: "Sécurité Nationale",
        subtitle: "Focus Recherche"
      },
      card2: {
        title: "Sécurité Défensive",
        subtitle: "Mentalité Technique"
      },
      mission: "\"Sécuriser les infrastructures numériques contre les menaces évolutives grâce à la recherche proactive et aux stratégies défensives.\""
    },
    skills: {
      category1: {
        title: "Domaines de Sécurité"
      },
      category2: {
        title: "Outils & Technologies"
      },
      category3: {
        title: "Cadres & Standards"
      },
      category4: {
        title: "Programmation & Systèmes"
      }
    },
    education: {
      msc: {
        description: "Programme de maîtrise avancé axé sur la recherche spécialisé en cybersécurité, se concentrant sur les menaces de pointe, les stratégies défensives et les solutions de sécurité innovantes.",
        research: "Projet de recherche sur \"Cadre de cybersécurité pour la réponse aux incidents et la gouvernance afin de renforcer la résilience des e-gouvernements au Tchad.\""
      },
      sme: {
        description: "Éducation commerciale complète axée sur la gestion des petites et moyennes entreprises, incluant la planification stratégique, les opérations, l'analyse financière et les compétences entrepreneuriales."
      },
      bsc: {
        description: "Licence en cybersécurité fournissant une base rigoureuse en piratage éthique et sécurité réseau, reliant l'architecture de sécurité technique à la gestion stratégique de la sécurité de l'information et à la confidentialité des données pour assurer une résilience organisationnelle complète."
      }
    },
    hero: {
      greeting: "Bonjour,",
      introduction: "Je suis",
      description: "Dédié au renforcement des infrastructures numériques et à l'avancement de la résilience nationale. Je combine une expertise en opérations SOC et recherche en sécurité avec mon travail dans le développement de réponses aux incidents contextualisées et de cadres de gouvernance. Utilisant des compétences techniques en sécurité défensive et recherche en sécurité, je comble le fossé entre la défense en temps réel et la supervision stratégique pour protéger les systèmes complexes contre les risques cyber évolutifs.",
      contact: "Me contacter",
      projects: "Voir les projets",
      cv: "Télécharger CV",
    },
    experience: {
      title: "Expérience Professionnelle",
      jobTitle: "Stagiaire en Cybersécurité",
      period: "2023 - Présent",
      company: "SecIQ Technologies LLP, Bangalore, Inde",
      role: "VAPT d'Applications Web & DevSecOps",
      bullet1: "Réalisation d'évaluations de vulnérabilités basées sur la méthodologie OWASP - Top 10 2021.",
      bullet2: "Exécution de tests de pénétration pour identifier les faiblesses des systèmes.",
      bullet3: "Analyse des incidents de sécurité et rédaction de rapports de remédiation complets.",
      bullet4: "Automatisation des tests de sécurité dans les pipelines CI/CD pour permettre les pratiques DevSecOps."
    },
    research: {
      title: "Recherche en Cours",
      status: "Recherche Actuelle",
      projectTitle: "\"Cadre de cybersécurité pour la réponse aux incidents et la gouvernance afin de renforcer la résilience des e-gouvernements au Tchad\"",
      description: "Développement d'un cadre complet adapté aux infrastructures numériques nationales. Cette recherche utilise la méthodologie de recherche en sciences du design pour intégrer les normes internationales (NIST CSF, ISO 27001, ISO 27035) dans un modèle de gouvernance localisé pour une atténuation efficace des menaces.",
      tag1: "Réponse aux Incidents",
      tag2: "Gouvernance",
      tag3: "Recherche en Sciences du Design"
    },
    projects: {
      title: "Projets & Certifications",
      subtitle: "Mise en œuvre pratique des concepts de sécurité et qualifications reconnues par l'industrie.",
      project1: {
        title: "Test de Pénétration d'Applications Web",
        description: "Audit de sécurité complet d'une application financière simulée identifiant les vulnérabilités critiques du Top 10 OWASP incluant l'injection SQL et le contrôle d'accès cassé.",
        viewSource: "Voir le Code Source"
      },
      project2: {
        title: "Outil d'empoisonnement du Cache ARP",
        description: "Développement d'un utilitaire réseau basé sur Python pour démontrer les attaques Man-in-the-Middle (MitM) et tester la résilience du réseau contre l'usurpation.",
        viewSource: "Voir le Code Source"
      }
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Intéressé par une collaboration, une recherche ou un conseil en sécurité ?",
      contactInfo: "Informations de Contact",
      email: "Email",
      linkedin: "LinkedIn",
      languages: "Langues",
      english: "Anglais",
      french: "Français",
      arabic: "Arabe",
      name: "Nom",
      emailLabel: "Email",
      message: "Message",
      sendMessage: "Envoyer le Message",
      footer: "Sécuriser la frontière numérique, un paquet à la fois.",
      copyright: "© 2025 Hamid Cherif Issa. Tous droits réservés.",
      namePlaceholder: "Jean Dupont",
      emailPlaceholder: "jean@example.com",
      messagePlaceholder: "Comment puis-je vous aider ?",
      validationMessage: "Veuillez remplir tous les champs.",
      successMessage: "Merci pour votre message ! Je vous répondrai bientôt."
    },
    typewriter: {
      string1: "Chercheur en Cybersécurité",
      string2: "Analyste des Opérations de Sécurité",
      string3: "Spécialiste en Réponse aux Incidents & Gouvernance",
      string4: "Avocat de la Résilience Numérique"
    }
  }
};

// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Language toggle functionality
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  localStorage.setItem('language', currentLang);
  updateLanguage();
  updateLanguageButtons();
}

// Update all text content based on current language
function updateLanguage() {
  // Update elements with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let translation = translations[currentLang];

    for (const k of keys) {
      translation = translation?.[k];
    }

    if (translation) {
      element.textContent = translation;
    }
  });

  // Update placeholders with data-i18n-placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    const keys = key.split('.');
    let translation = translations[currentLang];

    for (const k of keys) {
      translation = translation?.[k];
    }

    if (translation) {
      element.placeholder = translation;
    }
  });

  // Update typewriter strings if it exists
  if (typewriterElement && typewriterInstance) {
    const newStrings = [
      translations[currentLang].typewriter.string1,
      translations[currentLang].typewriter.string2,
      translations[currentLang].typewriter.string3,
      translations[currentLang].typewriter.string4
    ];
    typewriterInstance.updateStrings(newStrings);
  }
}

// Update language toggle buttons
function updateLanguageButtons() {
  const langText = currentLang === 'en' ? 'FR' : 'EN';
  document.getElementById('lang-text').textContent = langText;
  document.getElementById('lang-text-mobile').textContent = langText;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  try {
    console.log('DOMContentLoaded fired');
    updateLanguage();
    updateLanguageButtons();

    // Add event listeners to language toggle buttons
    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
    document.getElementById('lang-toggle-mobile').addEventListener('click', toggleLanguage);

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
      updateThemeIcon();
    }

    // Hide loading animation after page loads
    setTimeout(() => {
      const loading = document.getElementById('loading');
      if (loading) {
        console.log('Hiding loading screen');
        loading.style.opacity = '0';
        setTimeout(() => {
          loading.style.display = 'none';
        }, 500);
      }
    }, 1000);
  } catch (error) {
    console.error('Error in DOMContentLoaded:', error);
    // Hide loading screen immediately on error
    const loading = document.getElementById('loading');
    if (loading) {
      loading.style.display = 'none';
    }
  }
});

// Fallback: hide loading screen after 5 seconds regardless
setTimeout(() => {
  const loading = document.getElementById('loading');
  if (loading && loading.style.display !== 'none') {
    console.log('Fallback: Hiding loading screen after 5 seconds');
    loading.style.opacity = '0';
    setTimeout(() => {
      loading.style.display = 'none';
    }, 500);
  }
}, 5000);

// Additional fallback: hide loading on window load
window.addEventListener('load', () => {
  setTimeout(() => {
    const loading = document.getElementById('loading');
    if (loading && loading.style.display !== 'none') {
      console.log('Window load: Hiding loading screen');
      loading.style.opacity = '0';
      setTimeout(() => {
        loading.style.display = 'none';
      }, 500);
    }
  }, 500);
});

// Theme toggle functionality
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme') || 'light';

  if (currentTheme === 'light') {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }

  updateThemeIcon();
}

function updateThemeIcon() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const icon = themeToggle.querySelector('svg');

  if (currentTheme === 'light') {
    // Moon icon for dark mode (when clicking to switch to dark)
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>';
  } else {
    // Sun icon for light mode (when clicking to switch to light)
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>';
  }
}

// Initialize theme on page load
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileNav = document.getElementById('mobile-nav');

const menuIcon = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
const xIcon = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

mobileToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
  if (mobileNav.classList.contains('hidden')) {
    mobileToggle.innerHTML = menuIcon;
  } else {
    mobileToggle.innerHTML = xIcon;
  }
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add click event listeners to nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    scrollToSection(targetId);
    // Close mobile menu if open
    mobileNav.classList.add('hidden');
  });
});

// Touch gesture support for mobile navigation
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const swipeThreshold = 50;
  const verticalThreshold = 100;
  
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;
  
  // Only handle horizontal swipes (not vertical scrolls)
  if (Math.abs(deltaY) > verticalThreshold) return;
  
  if (Math.abs(deltaX) > swipeThreshold) {
    if (deltaX > 0) {
      // Swipe right - go to previous section
      navigateToPreviousSection();
    } else {
      // Swipe left - go to next section
      navigateToNextSection();
    }
  }
}

function navigateToNextSection() {
  const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];
  const currentSection = getCurrentSection();
  const currentIndex = sections.indexOf(currentSection);
  
  if (currentIndex < sections.length - 1) {
    scrollToSection(sections[currentIndex + 1]);
  }
}

function navigateToPreviousSection() {
  const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];
  const currentSection = getCurrentSection();
  const currentIndex = sections.indexOf(currentSection);
  
  if (currentIndex > 0) {
    scrollToSection(sections[currentIndex - 1]);
  }
}

function getCurrentSection() {
  const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];
  const scrollPosition = window.scrollY + 100;
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const element = document.getElementById(sections[i]);
    if (element && element.offsetTop <= scrollPosition) {
      return sections[i];
    }
  }
  return 'hero';
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let scrolled = false;

window.addEventListener('scroll', () => {
  const currentScrolled = window.scrollY > 50;
  if (currentScrolled !== scrolled) {
    scrolled = currentScrolled;
    if (scrolled) {
      navbar.classList.add('navbar-scrolled');
      navbar.classList.remove('navbar-transparent');
    } else {
      navbar.classList.remove('navbar-scrolled');
      navbar.classList.add('navbar-transparent');
    }
  }
});

// Typewriter effect - Simplified and robust implementation
class Typewriter {
  constructor(element, options = {}) {
    this.element = element;
    this.strings = options.strings || [];
    this.typeSpeed = options.typeSpeed || 100;
    this.deleteSpeed = options.deleteSpeed || 50;
    this.pauseDelay = options.pauseDelay || 2000;
    this.loop = options.loop !== false;

    this.currentStringIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.isRunning = false;
    this.timeoutId = null;

    if (this.strings.length > 0) {
      this.start();
    }
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.type();
  }

  stop() {
    this.isRunning = false;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  reset() {
    this.stop();
    this.currentStringIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.element.textContent = '';
  }

  type() {
    if (!this.isRunning) return;

    const currentString = this.strings[this.currentStringIndex];

    if (!this.isDeleting) {
      // Typing phase
      this.currentCharIndex++;
      this.element.textContent = currentString.substring(0, this.currentCharIndex);

      if (this.currentCharIndex === currentString.length) {
        // Finished typing current string, pause before deleting
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.type(), this.pauseDelay);
        return;
      }
    } else {
      // Deleting phase
      this.currentCharIndex--;
      this.element.textContent = currentString.substring(0, this.currentCharIndex);

      if (this.currentCharIndex === 0) {
        // Finished deleting, move to next string
        this.isDeleting = false;
        this.currentStringIndex = (this.currentStringIndex + 1) % this.strings.length;

        // Brief pause before starting next string
        this.timeoutId = setTimeout(() => this.type(), 500);
        return;
      }
    }

    // Continue typing or deleting
    const speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
    this.timeoutId = setTimeout(() => this.type(), speed);
  }

  updateStrings(newStrings) {
    this.stop();
    this.strings = newStrings;
    this.reset();
    if (this.strings.length > 0) {
      this.start();
    }
  }
}

// Initialize typewriter
const typewriterElement = document.getElementById('typewriter');
let typewriterInstance;
if (typewriterElement) {
  typewriterInstance = new Typewriter(typewriterElement, {
    strings: [
      translations[currentLang].typewriter.string1,
      translations[currentLang].typewriter.string2,
      translations[currentLang].typewriter.string3,
      translations[currentLang].typewriter.string4
    ],
    typeSpeed: 100,
    deleteSpeed: 50,
    pauseDelay: 3000, // 3 seconds to read full text
    loop: true
  });
}

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
      alert(translations[currentLang].contact.validationMessage);
      return;
    }

    // In a real application, you would send this data to a server
    alert(translations[currentLang].contact.successMessage);
    contactForm.reset();
  });
}

// Intersection Observer for animations (optional enhancement)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe elements that should animate on scroll
document.querySelectorAll('section > div, .card, .skill-item').forEach(el => {
  observer.observe(el);
});

// Scroll reveal functionality
const scrollRevealOptions = {
  threshold: 0.05, // Lower threshold to trigger earlier
  rootMargin: '0px 0px -50px 0px' // More generous margin
};

const scrollRevealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      // Once revealed, stop observing this element
      scrollRevealObserver.unobserve(entry.target);
    }
  });
}, scrollRevealOptions);

// Observe all elements with scroll-reveal class
document.querySelectorAll('.scroll-reveal').forEach(el => {
  scrollRevealObserver.observe(el);
});

// Handle page visibility changes to pause/resume typewriter
document.addEventListener('visibilitychange', () => {
  if (typewriterInstance) {
    if (document.hidden) {
      typewriterInstance.stop();
    } else {
      typewriterInstance.start();
    }
  }
});

// Error handling
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error);
  // In production, you could send this to an error tracking service
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});

// Performance monitoring
window.addEventListener('load', () => {
  // Measure page load time
  if (performance.timing) {
    const loadTime = performance.timing.loadEventEnd - performance.timing.fetchStart;
    console.log('Page load time:', loadTime, 'ms');
  }

  // Monitor Core Web Vitals (simplified)
  if ('PerformanceObserver' in window) {
    try {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime, 'ms');
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime, 'ms');
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.log('Performance monitoring not fully supported');
    }
  }
});