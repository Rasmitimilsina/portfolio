// Interactive Project Flashcard Module with Double-Click Card Switching

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "CityPulse",
    tag: "CIVIC WEB APP",
    description: "A map-based civic reporting platform that empowers citizens to report issues, track city problems, and stay informed through automated local news insights.",
    github: "https://github.com/Rasmitimilsina/CityPulse",
    demo: "https://city-pulse-pink.vercel.app",
    techLeft: "TypeScript · React",
    techRight: "Mapbox / Maps",
    theme: "cyan",
    icon: "🗺️"
  },
  {
    id: 2,
    title: "Jarvis Voice Assistant",
    tag: "VOICE AI AUTOMATION",
    description: "Python-based voice-controlled assistant inspired by Jarvis from Iron Man. Recognizes wake word (\"Jarvis\"), processes voice commands, and automates web and desktop tasks.",
    github: "https://github.com/Rasmitimilsina/Jarvis-voice-assistant",
    demo: null,
    techLeft: "Python",
    techRight: "speech_recog · pyttsx3",
    theme: "cyan",
    icon: "🎙️"
  },
  {
    id: 3,
    title: "Gym Membership System",
    tag: "DESKTOP OOP APP",
    description: "A Java-based application that manages gym members, memberships, attendance, and payments using OOP principles and a GUI (AWT & Swing) with file-based data storage.",
    github: "https://github.com/Rasmitimilsina/Gym-Membership-System",
    demo: null,
    techLeft: "Java",
    techRight: "AWT / Swing · File Storage",
    theme: "purple",
    icon: "🏋️"
  },
  {
    id: 4,
    title: "WeCare Skincare System",
    tag: "RETAIL & INVENTORY",
    description: "Python inventory and sales system for skincare products with automated sales processing ('Buy 3 Get 1 Free'), invoice generation, and transaction file handling.",
    github: "https://github.com/Rasmitimilsina/WeCare-Skin-Care-Product-Sale-System",
    demo: null,
    techLeft: "Python",
    techRight: "File Handling · Retail",
    theme: "pink",
    icon: "🛍️"
  },
  {
    id: 5,
    title: "Nepal Trek Live",
    tag: "TRAVEL PLATFORM",
    description: "Interactive web application discovering trekking routes across Nepal with route mapping, elevation insights, and trekking recommendations.",
    github: "https://github.com/Rasmitimilsina/nepal-Trek-live",
    demo: null,
    techLeft: "TypeScript",
    techRight: "Vite · Trekking Maps",
    theme: "cyan",
    icon: "🏔️"
  },
  {
    id: 6,
    title: "Lumo Mental Health",
    tag: "DIGITAL WELLNESS",
    description: "Digital mental health companion platform designed for mood tracking, guided self-care reflections, mindfulness tracking, and supportive AI interactions.",
    github: "https://github.com/Rasmitimilsina/Lumo-mental-health",
    demo: null,
    techLeft: "TypeScript · React",
    techRight: "Digital Health",
    theme: "purple",
    icon: "🧘"
  },
  {
    id: 7,
    title: "AI Playground & Code Tutor",
    tag: "AI & MACHINE LEARNING",
    description: "TypeScript & React AI experiment hub for smart code explanations, prompt engineering exploration, debugging assistance, and AI interactions.",
    github: "https://github.com/Rasmitimilsina/AI-",
    demo: null,
    techLeft: "TypeScript · React",
    techRight: "AI Model Integration",
    theme: "purple",
    icon: "🤖"
  }
];

export function initProjectFlashcards() {
  const container = document.getElementById('flashcard-container');
  if (!container) return;

  let currentIndex = 0;

  const counterEl = document.getElementById('fc-counter');
  const progressBar = document.getElementById('fc-progress');
  const cardSlot = document.getElementById('fc-card-slot');

  const getThemeClasses = () => {
    return {
      glass: 'glass-card',
      tagText: 'text-zinc-300',
      titleHover: 'group-hover:text-white',
      footerText: 'text-zinc-400',
      githubBg: 'bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black',
    };
  };

  const renderFlashcard = (direction = 1) => {
    if (!cardSlot) return;
    const project = PROJECTS_DATA[currentIndex];
    const styles = getThemeClasses(project.theme);

    // Update Counter & Progress Bar
    if (counterEl) {
      counterEl.textContent = `CARD ${String(currentIndex + 1).padStart(2, '0')} / ${String(PROJECTS_DATA.length).padStart(2, '0')}`;
    }

    if (progressBar) {
      const percentage = ((currentIndex + 1) / PROJECTS_DATA.length) * 100;
      progressBar.style.width = `${percentage}%`;
    }

    // Animate card transition
    cardSlot.style.opacity = '0';
    cardSlot.style.transform = 'translateY(15px) scale(0.98)';

    setTimeout(() => {
      cardSlot.innerHTML = `
        <div class="group p-8 sm:p-12 rounded-3xl ${styles.glass} relative overflow-hidden transition-all duration-500 border border-white/15 shadow-2xl flex flex-col justify-between min-h-[380px] max-w-3xl mx-auto select-none hover:border-white/40">
          <!-- Background Ambient Glow -->
          <div class="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-white/5 blur-3xl pointer-events-none group-hover:bg-white/10 transition-all duration-500"></div>

          <div>
            <!-- Header Row -->
            <div class="flex items-center justify-between mb-6 flex-wrap gap-3">
              <div class="flex items-center gap-3">
                <span class="text-2xl">${project.icon}</span>
                <span class="text-xs font-mono ${styles.tagText} font-bold tracking-wider">[ ${project.tag} ]</span>
              </div>

              <div class="flex items-center gap-2">
                ${project.demo ? `
                  <a href="${project.demo}" target="_blank" onclick="event.stopPropagation()" class="px-3 py-1.5 rounded-full text-xs font-mono bg-white text-black font-bold uppercase hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-center gap-1.5 cursor-hover">
                    <span>Live Demo</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                ` : ''}

                <a href="${project.github}" target="_blank" onclick="event.stopPropagation()" class="px-4 py-1.5 rounded-full text-xs font-mono ${styles.githubBg} uppercase transition-all duration-300 font-bold flex items-center gap-1.5 cursor-hover">
                  <span>GitHub Repo</span>
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
              </div>
            </div>

            <!-- Title & Description -->
            <h3 class="text-2xl sm:text-4xl font-extrabold font-display text-white mb-4 ${styles.titleHover} transition-colors tracking-tight">
              ${project.title}
            </h3>
            <p class="text-sm sm:text-base text-zinc-200 leading-relaxed font-light mb-8">
              ${project.description}
            </p>
          </div>

          <!-- Footer Metadata -->
          <div class="pt-6 border-t border-white/10 flex justify-between items-center text-xs font-mono ${styles.footerText}">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>${project.techLeft}</span>
            </div>
            <span class="bg-white/5 px-3 py-1 rounded-full border border-white/10 text-zinc-300">${project.techRight}</span>
          </div>
        </div>
      `;

      cardSlot.style.opacity = '1';
      cardSlot.style.transform = 'translateY(0) scale(1)';
    }, 150);
  };

  const nextCard = () => {
    currentIndex = (currentIndex + 1) % PROJECTS_DATA.length;
    renderFlashcard(1);
  };

  // Double Click (and Click) Listener on Card Slot to display next card
  if (cardSlot) {
    cardSlot.addEventListener('dblclick', (e) => {
      // Don't trigger if user double clicked an anchor tag (Live Demo / GitHub link)
      if (e.target.closest('a')) return;
      nextCard();
    });

    cardSlot.addEventListener('click', (e) => {
      // Don't trigger if user clicked an anchor tag
      if (e.target.closest('a')) return;
      nextCard();
    });
  }

  // Keyboard Navigation Support (Left/Right Arrow Keys)
  document.addEventListener('keydown', (e) => {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;
    const rect = projectsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextCard();
      } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
        renderFlashcard(-1);
      }
    }
  });

  // Initial render
  renderFlashcard(1);
}
