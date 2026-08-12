// Horizontal Projects Showcase Module with Motion Scroll

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "CityPulse",
    tag: "CIVIC WEB APP",
    description: "A map-based civic reporting platform that empowers citizens to report infrastructure issues, track city problems in real-time, and stay informed through automated local news insights.",
    github: "https://github.com/Rasmitimilsina/CityPulse",
    demo: "https://city-pulse-pink.vercel.app",
    techLeft: "TypeScript · React",
    techRight: "Mapbox API / News Integration",
    theme: "cyan",
    icon: "🗺️",
    highlights: ["Interactive map issue reporting", "Real-time civic status tracking", "Automated local news integration"]
  },
  {
    id: 2,
    title: "Jarvis Voice Assistant",
    tag: "VOICE AI AUTOMATION",
    description: "Python-based voice-controlled assistant inspired by Jarvis. Recognizes wake words, processes natural spoken commands, and automates web searches and desktop application tasks.",
    github: "https://github.com/Rasmitimilsina/Jarvis-voice-assistant",
    demo: null,
    techLeft: "Python",
    techRight: "speech_recognition · pyttsx3",
    theme: "cyan",
    icon: "🎙️",
    highlights: ["Custom wake word detection ('Jarvis')", "Automated desktop & web workflows", "Voice feedback & task synthesis"]
  },
  {
    id: 3,
    title: "Gym Membership System",
    tag: "DESKTOP OOP APP",
    description: "A Java enterprise application that manages gym memberships, attendance logs, and automated billing schedules using OOP design patterns, Swing GUI, and file storage.",
    github: "https://github.com/Rasmitimilsina/Gym-Membership-System",
    demo: null,
    techLeft: "Java",
    techRight: "AWT / Swing · OOP Architecture",
    theme: "purple",
    icon: "🏋️",
    highlights: ["Full OOP inheritance & polymorphism", "Interactive Java Swing GUI", "File-based transaction log storage"]
  },
  {
    id: 4,
    title: "WeCare Skincare System",
    tag: "RETAIL & INVENTORY",
    description: "Python inventory and point-of-sale system for skincare product management featuring automated promotional sales rules ('Buy 3 Get 1 Free'), invoice generation, and file storage.",
    github: "https://github.com/Rasmitimilsina/WeCare-Skin-Care-Product-Sale-System",
    demo: null,
    techLeft: "Python",
    techRight: "File I/O · Retail Logic",
    theme: "pink",
    icon: "🛍️",
    highlights: ["Automated discount & promo calculation", "Custom formatted invoice generation", "Real-time inventory file updates"]
  },
  {
    id: 5,
    title: "Nepal Trek Live",
    tag: "TRAVEL PLATFORM",
    description: "Interactive web application discovering trekking routes across Nepal with elevation profiles, trail difficulties, GPS route maps, and weather/trekking recommendations.",
    github: "https://github.com/Rasmitimilsina/nepal-Trek-live",
    demo: null,
    techLeft: "TypeScript",
    techRight: "Vite · Route Mapping",
    theme: "cyan",
    icon: "🏔️",
    highlights: ["Interactive elevation profile charts", "Comprehensive Himalayan trail maps", "Trek difficulty & gear guidelines"]
  },
  {
    id: 6,
    title: "Lumo Mental Health",
    tag: "DIGITAL WELLNESS",
    description: "Digital wellness companion platform designed for daily mood tracking, guided self-care reflections, mindfulness tracking, and supportive conversational AI interactions.",
    github: "https://github.com/Rasmitimilsina/Lumo-mental-health",
    demo: null,
    techLeft: "TypeScript · React",
    techRight: "Digital Health & Wellness",
    theme: "purple",
    icon: "🧘",
    highlights: ["Daily mood & reflection journal", "Guided mindfulness reflection exercises", "Privacy-focused personal analytics"]
  },
  {
    id: 7,
    title: "AI Playground & Code Tutor",
    tag: "AI & MACHINE LEARNING",
    description: "TypeScript & React AI experiment hub built for intelligent code explanations, prompt engineering testing, debugging assistance, and interactive LLM interactions.",
    github: "https://github.com/Rasmitimilsina/AI-",
    demo: null,
    techLeft: "TypeScript · React",
    techRight: "LLM Model Integration",
    theme: "purple",
    icon: "🤖",
    highlights: ["Smart code explanation generator", "Prompt engineering playground", "Interactive AI code tutor"]
  }
];

export function initProjectFlashcards() {
  const container = document.getElementById('fc-flashcard-deck');
  if (!container) return;

  container.innerHTML = `
    <div class="relative w-full space-y-6">
      <!-- Horizontal Scroll Track with Controls -->
      <div class="relative group">

        <!-- Motion Scroll Left Arrow Button -->
        <button id="proj-scroll-left" class="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md opacity-80 hover:opacity-100 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 shadow-2xl cursor-pointer" aria-label="Scroll Left">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
        </button>

        <!-- Motion Scroll Right Arrow Button -->
        <button id="proj-scroll-right" class="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md opacity-80 hover:opacity-100 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 shadow-2xl cursor-pointer" aria-label="Scroll Right">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
        </button>

        <!-- Horizontal Row Container with Snap Motion -->
        <div id="projects-horizontal-track" class="flex gap-6 overflow-x-auto py-6 px-4 scroll-smooth snap-x snap-mandatory no-scrollbar" style="scrollbar-width: none; -ms-overflow-style: none;">
          ${PROJECTS_DATA.map((project) => `
            <div class="w-[320px] sm:w-[370px] flex-shrink-0 snap-center p-7 rounded-3xl glass-card border border-white/15 hover:border-white/40 shadow-2xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 group">
              <div>
                <!-- Top Tag & Icon -->
                <div class="flex items-center justify-between gap-2 mb-4">
                  <div class="flex items-center gap-2.5">
                    <span class="text-2xl">${project.icon}</span>
                    <span class="text-[11px] font-mono text-zinc-300 font-bold uppercase tracking-wider">[ ${project.tag} ]</span>
                  </div>
                </div>

                <!-- Title -->
                <h3 class="text-2xl font-bold font-display text-white mb-3 group-hover:text-zinc-200 transition-colors">
                  ${project.title}
                </h3>

                <!-- Description -->
                <p class="text-xs text-zinc-300 font-light leading-relaxed mb-5">
                  ${project.description}
                </p>

                <!-- Key Highlights List -->
                <ul class="space-y-1.5 mb-6">
                  ${project.highlights.map(h => `
                    <li class="flex items-start gap-2 text-[11px] text-zinc-300 font-mono">
                      <span class="text-white mt-0.5">▹</span>
                      <span>${h}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- Card Footer & Action Links -->
              <div class="pt-4 border-t border-white/10 space-y-4">
                <div class="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
                  <span class="flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>${project.techLeft}</span>
                  </span>
                  <span class="px-2 py-0.5 rounded bg-white/10 text-white border border-white/15 text-[10px]">${project.techRight}</span>
                </div>

                <div class="flex items-center gap-2 pt-1">
                  ${project.demo ? `
                    <a href="${project.demo}" target="_blank" class="flex-1 py-2.5 px-3 rounded-full bg-white text-black text-center font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-1 shadow-[0_0_12px_rgba(255,255,255,0.2)] cursor-pointer">
                      <span>Demo</span>
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </a>
                  ` : ''}

                  <a href="${project.github}" target="_blank" class="flex-1 py-2.5 px-3 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white text-center font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer">
                    <span>GitHub</span>
                    <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Motion Scroll Control Logic
  const track = document.getElementById('projects-horizontal-track');
  const scrollLeftBtn = document.getElementById('proj-scroll-left');
  const scrollRightBtn = document.getElementById('proj-scroll-right');

  if (track && scrollLeftBtn && scrollRightBtn) {
    scrollLeftBtn.addEventListener('click', () => {
      track.scrollBy({ left: -390, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
      track.scrollBy({ left: 390, behavior: 'smooth' });
    });
  }
}
