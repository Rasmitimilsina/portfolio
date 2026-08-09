import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations(sceneInstance) {
  // 1. Initialize Lenis Smooth Scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smoothTouch: false,
    touchMultiplier: 2
  });

  lenis.on('scroll', (e) => {
    ScrollTrigger.update();
    if (sceneInstance && typeof sceneInstance.setScrollOffset === 'function') {
      const scrollY = e.scroll || window.scrollY || 0;
      sceneInstance.setScrollOffset(scrollY);
    }
  });

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // Direct scroll listener fallback
  const handleScroll = () => {
    if (sceneInstance && typeof sceneInstance.setScrollOffset === 'function') {
      sceneInstance.setScrollOffset(window.scrollY || 0);
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });

  // 2. Control 3D Image Visibility strictly to Home section
  ScrollTrigger.create({
    trigger: '#home',
    start: 'top top',
    end: 'bottom 20%',
    onLeave: () => {
      if (sceneInstance) {
        sceneInstance.scrollState.hidden = true;
      }
    },
    onEnterBack: () => {
      if (sceneInstance) {
        sceneInstance.scrollState.hidden = false;
        sceneInstance.scrollState.destruction = 0;
      }
    }
  });

// 3. Section Reveal Animations for Projects, Certificates, Experiences, Skills, and About
  const animateSectionCards = (selector, triggerId) => {
    const cards = document.querySelectorAll(selector);
    if (cards.length > 0) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: triggerId,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          onEnter: () => gsap.to(cards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' })
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "transform"
      });
    }
  };

  animateSectionCards('#certificates .group', '#certificates');
  animateSectionCards('#experiences .group', '#experiences');
  animateSectionCards('#education .group', '#education');
  animateSectionCards('#skills .group', '#skills');

  // Refresh ScrollTrigger after DOM setup
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);

  return { lenis };
}
