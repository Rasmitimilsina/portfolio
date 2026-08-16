import { CoasterScene } from './three/CoasterScene.js';
import { initScrollAnimations } from './animations/scrollTimeline.js';
import { initProjectFlashcards } from './utils/flashcards.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize WebGL 3D Scene (Plain User Portrait Frame)
  const canvas = document.getElementById('webgl-canvas');
  const sceneInstance = new CoasterScene(canvas);

  // 2. Initialize GSAP ScrollTrigger & Lenis Smooth Scroll
  const scrollEngine = initScrollAnimations(sceneInstance);

  // 3. Initialize Interactive Project Flashcard Deck Carousel
  initProjectFlashcards();

  // 4. Interactive Hero Text Morphing on 3D Card Image Click
  const badgeText = document.getElementById('hero-badge-text');
  const heroTitle = document.getElementById('hero-title');
  const heroDesc = document.getElementById('hero-desc');

  let isAboutState = false;

  const updateHeroText = (flipped) => {
    isAboutState = flipped !== undefined ? flipped : sceneInstance.scrollState.isFlipped;

    // Smooth HTML Text Morph
    if (heroTitle && heroDesc && badgeText) {
      heroTitle.style.opacity = '0';
      heroDesc.style.opacity = '0';
      badgeText.parentElement.style.opacity = '0';

      setTimeout(() => {
        if (isAboutState) {
          // ABOUT ME STATE
          badgeText.innerText = 'ABOUT RASMI TIMILSINA';
          heroTitle.innerHTML = 'ABOUT<br/>ME.';
          heroDesc.innerHTML = `<span class="block mb-2">I'm a Computing student with a strong passion for <strong class="text-white font-bold">Software Engineering and Quality Assurance</strong>. I'm dedicated to building robust, reliable applications through comprehensive testing strategies and best practices.</span><span class="block mb-2">I'm developing my expertise in <strong class="text-white font-bold">QA automation, test planning, performance testing, and software development</strong>, while working on projects that ensure quality at every level and deliver exceptional user experiences.</span><span class="block">I'm detail-oriented, methodical, and passionate about growing as a <strong class="text-white font-bold">Software Engineer and QA Specialist</strong>.</span>`;
        } else {
          // INTRO STATE
          badgeText.innerText = 'Software Engineer | QA Enthusiast';
          heroTitle.innerHTML = 'RASMI<br/>TIMILSINA.';
          heroDesc.innerText = 'Passionate about ensuring software quality through comprehensive testing strategies and best practices. Building robust applications with a focus on reliability, performance, and user experience.';
        }

        heroTitle.style.opacity = '1';
        heroDesc.style.opacity = '1';
        badgeText.parentElement.style.opacity = '1';
      }, 250);
    }
  };

  // Register image click callback from 3D scene raycaster
  sceneInstance.onPictureClick = (isFlipped) => {
    updateHeroText(isFlipped);
  };

  // 5. Active Section Header Highlight Tracker
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section[id]');

  const highlightActiveNav = () => {
    let currentSection = 'home';
    const scrollPos = window.scrollY + 250;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = section.getAttribute('id');
      }
    });

    navItems.forEach((item) => {
      item.classList.remove('text-white', 'font-extrabold', 'border-b', 'border-white');
      item.classList.add('text-zinc-400');
      if (item.getAttribute('href') === `#${currentSection}`) {
        item.classList.remove('text-zinc-400');
        item.classList.add('text-white', 'font-extrabold', 'border-b', 'border-white');
      }
    });
  };

  window.addEventListener('scroll', highlightActiveNav, { passive: true });
  highlightActiveNav();

  // 6. Mobile Menu Toggle Logic
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileMenu = (e) => {
    if (e) e.stopPropagation();
    if (mobileMenu) {
      mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
    }
  };

  const closeMobileMenu = (e) => {
    if (e) e.stopPropagation();
    if (mobileMenu) {
      mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    }
  };

  const toggleMobileMenu = (e) => {
    if (e) e.stopPropagation();
    if (!mobileMenu) return;
    if (mobileMenu.classList.contains('opacity-100')) {
      closeMobileMenu(e);
    } else {
      openMobileMenu(e);
    }
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
  if (closeMobileMenuBtn) {
    closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
  }
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 7. Minimal Black Welcome Screen & Smooth Home Page Fade-In
  const welcomeScreen = document.getElementById('welcome-screen');
  const pageContent = document.getElementById('page-content');
  const mainHeader = document.getElementById('main-header');
  let isWelcomeDismissed = false;

  const dismissWelcomeScreen = () => {
    if (isWelcomeDismissed) return;
    isWelcomeDismissed = true;

    if (welcomeScreen) {
      welcomeScreen.classList.add('opacity-0', 'pointer-events-none', 'scale-105');
      setTimeout(() => welcomeScreen.remove(), 1000);
    }

    if (pageContent) {
      pageContent.classList.remove('opacity-0', 'blur-md', 'scale-95');
      pageContent.classList.add('opacity-100', 'scale-100');
    }

    if (mainHeader) {
      mainHeader.classList.remove('opacity-0', 'pointer-events-none');
      mainHeader.classList.add('opacity-100', 'pointer-events-auto');
    }
  };

  if (welcomeScreen) {
    welcomeScreen.addEventListener('click', dismissWelcomeScreen);
    setTimeout(dismissWelcomeScreen, 1800);
  }

  // 8. Contact Form AJAX Submission & Thank You Modal Popup
  const contactForm = document.getElementById('portfolio-contact-form');
  const thankYouModal = document.getElementById('thank-you-modal');
  const closeThankYouModalBtn = document.getElementById('close-thank-you-modal');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'SENDING MESSAGE... ⏳';
      }

      const formData = new FormData(contactForm);

      const showThankYouModal = () => {
        contactForm.reset();
        if (thankYouModal) {
          thankYouModal.classList.remove('opacity-0', 'pointer-events-none');
          thankYouModal.classList.add('opacity-100', 'pointer-events-auto');
          const modalBox = thankYouModal.querySelector('div');
          if (modalBox) {
            modalBox.classList.remove('scale-95');
            modalBox.classList.add('scale-100');
          }
        }
      };

      try {
        const response = await fetch('https://formsubmit.co/ajax/timilsinarasmi0@gmail.com', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          showThankYouModal();
        } else {
          showThankYouModal();
        }
      } catch (err) {
        console.log('Contact Form Submit Notification:', err);
        showThankYouModal();
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = 'SEND MESSAGE DIRECTLY TO RASMI 🚀';
        }
      }
    });
  }

  const closeThankYouModal = () => {
    if (thankYouModal) {
      thankYouModal.classList.remove('opacity-100', 'pointer-events-auto');
      thankYouModal.classList.add('opacity-0', 'pointer-events-none');
    }
  };

  if (closeThankYouModalBtn) {
    closeThankYouModalBtn.addEventListener('click', closeThankYouModal);
  }
  if (thankYouModal) {
    thankYouModal.addEventListener('click', (e) => {
      if (e.target === thankYouModal) closeThankYouModal();
    });
  }

  console.log("Rasmi Timilsina 3D Portfolio Initialized Successfully.");
});
