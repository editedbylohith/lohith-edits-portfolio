/* ============================================================
   LOHITH EDITS — Portfolio Interactivity
   Scroll animations, filtering, modal routing, nav, form
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     PROJECT DATA
     Each project's metadata for the modal detail view.
     Update this array to add/remove/edit projects.
     ---------------------------------------------------------- */
  const projects = [
    {
      id: 0,
      slug: 'vfx-showreel-2026',
      title: 'VFX Showreel 2026',
      category: 'Showreel',
      categorySlug: 'showreel',
      year: '2026',
      client: 'Lohith Gadam / Showreel',
      role: 'VFX Artist & Compositor',
      tools: 'Nuke, After Effects, Mocha Pro',
      image: 'assets/images/thumb-vfx-showreel.jpg',
      videoId: 'TJ8uO3Q2w60',
      isVertical: false,
      videoUrl: 'https://www.youtube.com/watch?v=TJ8uO3Q2w60',
      description: `<p>A high-impact showcase of advanced visual effects, rotoscoping, clean plating, digital environment integration, set extensions, and seamless composites executed with Foundry Nuke and Adobe After Effects.</p>
      <p>Demonstrates mastery of photorealistic camera tracking, color matching, keying, deep compositing, and visual storytelling for cinematic productions.</p>`
    },
    {
      id: 1,
      slug: 'video-editing-showreel-2026',
      title: 'Video Editing Showreel 2026',
      category: 'Showreel',
      categorySlug: 'showreel',
      year: '2026',
      client: 'Lohith Gadam / Showreel',
      role: 'Lead Video Editor & Colorist',
      tools: 'Premiere Pro, DaVinci Resolve, After Effects',
      image: 'assets/images/thumb-editing-showreel.jpg',
      videoId: 'xF5pGebx37U',
      isVertical: false,
      videoUrl: 'https://www.youtube.com/watch?v=xF5pGebx37U',
      description: `<p>A curated compilation of fast-paced narrative cuts, dynamic match cuts, sound-designed rhythm, and stylized color grades across commercial, narrative, and digital content.</p>
      <p>Highlights invisible cutting, precision timing, multi-cam pacing, and immersive audiovisual flow that keeps audiences gripped from start to finish.</p>`
    },
    {
      id: 2,
      slug: 'promo',
      title: 'Promo',
      category: 'Commercial & Promo',
      categorySlug: 'commercial',
      year: '2026',
      client: 'Commercial Client',
      role: 'Video Editor & Sound Designer',
      tools: 'Premiere Pro, After Effects, DaVinci Resolve',
      image: 'assets/images/thumb-promo.jpg',
      videoId: 'bi1Fvno1-fs',
      isVertical: false,
      videoUrl: 'https://www.youtube.com/watch?v=bi1Fvno1-fs',
      description: `<p>Energetic commercial promo cut engineered for maximum impact and viewer retention. Features punchy sound design accents, kinetic typography, sharp pacing, and modern color treatment.</p>`
    },
    {
      id: 3,
      slug: 'ai-generated',
      title: 'AI Generated',
      category: 'Shorts & Reels',
      categorySlug: 'shorts',
      year: '2026',
      client: 'Creative AI Project',
      role: 'AI Video Creator & Editor',
      tools: 'Generative AI, Premiere Pro, After Effects',
      image: 'assets/images/thumb-ai-generated.jpg',
      videoId: 'U1tFImOfxsU',
      isVertical: true,
      videoUrl: 'https://youtube.com/shorts/U1tFImOfxsU',
      description: `<p>Next-generation short combining cutting-edge AI video generation workflows with cinematic post-production, audio layering, and seamless transitions.</p>`
    },
    {
      id: 4,
      slug: 'teaser',
      title: 'Teaser',
      category: 'Shorts & Reels',
      categorySlug: 'shorts',
      year: '2026',
      client: 'Production Teaser',
      role: 'Editor & Sound Designer',
      tools: 'Premiere Pro, After Effects',
      image: 'assets/images/thumb-teaser.jpg',
      videoId: 'vgToGHzROT0',
      isVertical: true,
      videoUrl: 'https://youtube.com/shorts/vgToGHzROT0',
      description: `<p>Suspenseful vertical teaser created to build anticipation and captivate mobile viewers within the first 3 seconds, utilizing tension-building audio cues and abrupt cuts.</p>`
    },
    {
      id: 5,
      slug: 'face-recording-short',
      title: 'Face Recording Short',
      category: 'Shorts & Reels',
      categorySlug: 'shorts',
      year: '2026',
      client: 'Creator Content',
      role: 'Short-Form Video Editor',
      tools: 'Premiere Pro, DaVinci Resolve, Audition',
      image: 'assets/images/thumb-face-recording.jpg',
      videoId: 'dE84xWLXmoI',
      isVertical: true,
      videoUrl: 'https://youtube.com/shorts/dE84xWLXmoI',
      description: `<p>Clean, high-retention vertical short-form edit featuring crisp vocal leveling, dynamic zoom-ins, graphic pop-ups, and pacing crafted for high audience engagement.</p>`
    },
    {
      id: 6,
      slug: 'instagram-reel',
      title: 'Instagram Reel',
      category: 'Shorts & Reels',
      categorySlug: 'shorts',
      year: '2026',
      client: 'Social Campaign',
      role: 'Motion & Reel Editor',
      tools: 'Premiere Pro, After Effects',
      image: 'assets/images/thumb-instagram-reel.jpg',
      videoId: '2hqQYfAq8zs',
      isVertical: true,
      videoUrl: 'https://youtube.com/shorts/2hqQYfAq8zs',
      description: `<p>High-energy Instagram Reel designed with seamless loop transitions, rhythmic sound sync, and vibrant color grading tailored to social feeds.</p>`
    },
    {
      id: 7,
      slug: 'information-reel',
      title: 'Information Reel',
      category: 'Shorts & Reels',
      categorySlug: 'shorts',
      year: '2026',
      client: 'Educational / Info Content',
      role: 'Editor & Motion Designer',
      tools: 'Premiere Pro, After Effects',
      image: 'assets/images/thumb-information-reel.jpg',
      videoId: 'Vs64KOvysBo',
      isVertical: true,
      videoUrl: 'https://youtube.com/shorts/Vs64KOvysBo',
      description: `<p>Educational and informative vertical video blending clear vocal narration, kinetic graphics, lower thirds, and B-roll overlays to make complex ideas digestible and engaging.</p>`
    }
  ];

  /* ----------------------------------------------------------
     DOM REFERENCES
     ---------------------------------------------------------- */
  const dom = {
    nav:             document.getElementById('nav'),
    navBrand:        document.getElementById('nav-brand'),
    navHamburger:    document.getElementById('nav-hamburger'),
    navMobileOverlay: document.getElementById('nav-mobile-overlay'),
    workFilters:     document.getElementById('work-filters'),
    workGrid:        document.getElementById('work-grid'),
    modalBackdrop:   document.getElementById('modal-backdrop'),
    projectModal:    document.getElementById('project-modal'),
    modalClose:      document.getElementById('modal-close'),
    modalPlayer:     document.getElementById('modal-player'),
    modalCategory:   document.getElementById('modal-category'),
    modalTitle:      document.getElementById('modal-title'),
    modalClient:     document.getElementById('modal-client'),
    modalRole:       document.getElementById('modal-role'),
    modalYear:       document.getElementById('modal-year'),
    modalTools:      document.getElementById('modal-tools'),
    modalDescription:document.getElementById('modal-description'),
    modalPrev:       document.getElementById('modal-prev'),
    modalNext:       document.getElementById('modal-next'),
    contactForm:     document.getElementById('contact-form'),
    formStatus:      document.getElementById('form-status'),
  };

  /* ----------------------------------------------------------
     SCROLL REVEAL (Intersection Observer)
     ---------------------------------------------------------- */
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
  }

  /* ----------------------------------------------------------
     NAVBAR — scroll background + hamburger
     ---------------------------------------------------------- */
  function initNavbar() {
    // Scroll state
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          dom.nav.classList.toggle('scrolled', window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    });

    // Hamburger toggle
    dom.navHamburger.addEventListener('click', () => {
      const isOpen = dom.navMobileOverlay.classList.contains('open');
      dom.navHamburger.classList.toggle('active', !isOpen);
      dom.navMobileOverlay.classList.toggle('open', !isOpen);
      document.body.classList.toggle('modal-open', !isOpen);
    });

    // Close mobile nav on link click
    document.querySelectorAll('[data-mobile-link]').forEach((link) => {
      link.addEventListener('click', () => {
        dom.navHamburger.classList.remove('active');
        dom.navMobileOverlay.classList.remove('open');
        document.body.classList.remove('modal-open');
      });
    });
  }

  /* ----------------------------------------------------------
     PORTFOLIO FILTERING
     ---------------------------------------------------------- */
  function initFiltering() {
    const pills = dom.workFilters.querySelectorAll('.filter-pill');
    const cards = dom.workGrid.querySelectorAll('.project-card');

    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        // Update active pill
        pills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');

        const filter = pill.dataset.filter;

        cards.forEach((card) => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ----------------------------------------------------------
     PROJECT MODAL
     ---------------------------------------------------------- */
  let currentProjectIndex = 0;

  function openProject(index) {
    const project = projects[index];
    if (!project) return;
    currentProjectIndex = index;

    // Populate video player or thumbnail fallback
    if (project.videoId) {
      if (project.isVertical) {
        dom.modalPlayer.classList.add('vertical');
      } else {
        dom.modalPlayer.classList.remove('vertical');
      }
      dom.modalPlayer.innerHTML = `
        <iframe
          src="https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&rel=0&modestbranding=1"
          title="${project.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      `;
    } else {
      dom.modalPlayer.classList.remove('vertical');
      dom.modalPlayer.innerHTML = `<img src="${project.image}" alt="${project.title}" />`;
    }

    dom.modalCategory.textContent = project.category;
    dom.modalTitle.textContent = project.title;
    dom.modalClient.textContent = project.client;
    dom.modalRole.textContent = project.role;
    dom.modalYear.textContent = project.year;
    dom.modalTools.textContent = project.tools;
    dom.modalDescription.innerHTML = project.description + `
      <div class="project-modal__actions">
        <a href="${project.videoUrl}" target="_blank" rel="noopener noreferrer" class="btn--youtube">
          <svg viewBox="0 0 24 24"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.67 31.67 0 0 0 0 12a31.67 31.67 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.67 31.67 0 0 0 24 12a31.67 31.67 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12 9.55 15.57z"/></svg>
          Watch on YouTube
        </a>
      </div>
    `;

    // Show modal
    dom.modalBackdrop.classList.add('active');
    dom.projectModal.classList.add('active');
    document.body.classList.add('modal-open');

    // Scroll modal to top
    dom.projectModal.scrollTop = 0;

    // Update URL hash
    history.pushState(null, '', `#project/${project.slug}`);
  }

  function closeProject() {
    dom.modalBackdrop.classList.remove('active');
    dom.projectModal.classList.remove('active');
    document.body.classList.remove('modal-open');

    // Stop video playback and reset sizing
    dom.modalPlayer.innerHTML = '';
    dom.modalPlayer.classList.remove('vertical');

    // Clear hash without scrolling
    history.pushState(null, '', window.location.pathname);
  }

  function navigateProject(direction) {
    let newIndex = currentProjectIndex + direction;
    if (newIndex < 0) newIndex = projects.length - 1;
    if (newIndex >= projects.length) newIndex = 0;
    openProject(newIndex);
  }

  function initModal() {
    // Card clicks
    dom.workGrid.querySelectorAll('.project-card').forEach((card) => {
      card.addEventListener('click', () => {
        const index = parseInt(card.dataset.project, 10);
        openProject(index);
      });
    });

    // Close button
    dom.modalClose.addEventListener('click', closeProject);

    // Backdrop click
    dom.modalBackdrop.addEventListener('click', closeProject);

    // Prev/Next
    dom.modalPrev.addEventListener('click', () => navigateProject(-1));
    dom.modalNext.addEventListener('click', () => navigateProject(1));

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dom.projectModal.classList.contains('active')) {
        closeProject();
      }
      if (e.key === 'ArrowLeft' && dom.projectModal.classList.contains('active')) {
        navigateProject(-1);
      }
      if (e.key === 'ArrowRight' && dom.projectModal.classList.contains('active')) {
        navigateProject(1);
      }
    });

    // Handle hash on load (deep link to project)
    handleHashRoute();
  }

  /* ----------------------------------------------------------
     HASH ROUTING
     ---------------------------------------------------------- */
  function handleHashRoute() {
    const hash = window.location.hash;
    if (hash.startsWith('#project/')) {
      const slug = hash.replace('#project/', '');
      const project = projects.find((p) => p.slug === slug);
      if (project) {
        // Small delay to ensure page has rendered
        setTimeout(() => openProject(project.id), 300);
      }
    }
  }

  window.addEventListener('popstate', () => {
    const hash = window.location.hash;
    if (!hash.startsWith('#project/')) {
      closeProject();
    } else {
      handleHashRoute();
    }
  });

  /* ----------------------------------------------------------
     CONTACT FORM
     ---------------------------------------------------------- */
  function initContactForm() {
    if (!dom.contactForm) return;

    // Clear errors on input
    const inputs = dom.contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        input.classList.remove('input-error');
        if (dom.formStatus.querySelector('.form__status-error')) {
          dom.formStatus.innerHTML = '';
        }
      });
      input.addEventListener('change', () => {
        input.classList.remove('input-error');
      });
    });

    dom.contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput    = document.getElementById('contact-name');
      const emailInput   = document.getElementById('contact-email-input');
      const typeInput    = document.getElementById('contact-type');
      const messageInput = document.getElementById('contact-message');
      const submitBtn    = document.getElementById('contact-submit');

      const name    = nameInput.value.trim();
      const email   = emailInput.value.trim();
      const type    = typeInput.value;
      const typeLabel = typeInput.options[typeInput.selectedIndex]?.text || type;
      const message = messageInput.value.trim();

      // Reset previous error styles
      inputs.forEach(inp => inp.classList.remove('input-error'));

      function showError(inputEl, msg) {
        inputEl.classList.add('input-error');
        inputEl.focus();
        dom.formStatus.innerHTML = `
          <div class="form__status-error">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span>${msg}</span>
          </div>
        `;
      }

      // Basic validation
      if (!name) {
        showError(nameInput, 'Please enter your name.');
        return;
      }
      if (!email) {
        showError(emailInput, 'Please enter your email address.');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showError(emailInput, 'Please enter a valid email address.');
        return;
      }
      if (!type) {
        showError(typeInput, 'Please select a project type.');
        return;
      }
      if (!message) {
        showError(messageInput, 'Please tell me about your project.');
        return;
      }

      // Prepare email
      const recipient = 'editedbylohith@gmail.com';
      const subject = `Project Inquiry: ${typeLabel} — ${name}`;
      const body = `Hi Lohith,\n\nI would like to discuss a project with you:\n\n• Name: ${name}\n• Email: ${email}\n• Project Type: ${typeLabel}\n\nMessage:\n${message}\n\n---\nSent via portfolio website`;
      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Submission UI state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="spin-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="32" stroke-linecap="round" /></svg>
        Sending...
      `;

      setTimeout(() => {
        // Trigger mailto
        window.location.href = mailtoUrl;

        // Escape helper
        const safeName = name.replace(/[&<>"']/g, (m) => ({
          '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
        }[m]));

        dom.formStatus.innerHTML = `
          <div class="form__success-card">
            <div class="form__success-title">
              <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>Thank you, ${safeName}!</span>
            </div>
            <p class="form__success-desc">Opening your email app to send your inquiry to <strong>${recipient}</strong>.</p>
            <p class="form__success-fallback">Didn't open automatically? <a href="${mailtoUrl}">Click here to compose email</a> or reach out directly at <a href="mailto:${recipient}"><strong>${recipient}</strong></a>.</p>
          </div>
        `;

        dom.contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
          Sent!
        `;

        setTimeout(() => {
          submitBtn.innerHTML = `
            <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
            Send Message
          `;
        }, 3500);
      }, 600);
    });
  }

  /* ----------------------------------------------------------
     SMOOTH SCROLL for anchor links
     ---------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#' || href.startsWith('#project/')) return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = dom.nav.offsetHeight + 20;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  /* ----------------------------------------------------------
     HERO SCROLL FADE
     Fade out hero content slightly as user scrolls down
     ---------------------------------------------------------- */
  function initHeroParallax() {
    const hero = document.getElementById('hero');
    const heroContent = hero.querySelector('.hero__content');
    const heroScroll = hero.querySelector('.hero__scroll');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroH = hero.offsetHeight;
      if (scrollY > heroH) return;

      const progress = scrollY / heroH;
      const opacity = 1 - progress * 1.5;
      const translateY = scrollY * 0.3;

      heroContent.style.opacity = Math.max(0, opacity);
      heroContent.style.transform = `translateY(${translateY}px)`;

      if (heroScroll) {
        heroScroll.style.opacity = Math.max(0, 1 - progress * 3);
      }
    });
  }

  /* ----------------------------------------------------------
     TESTIMONIAL CAROUSEL
     ---------------------------------------------------------- */
  function initCarousel() {
    const track = document.getElementById('carousel-track');
    const dots  = document.querySelectorAll('.carousel-dot');
    const prev  = document.getElementById('carousel-prev');
    const next  = document.getElementById('carousel-next');
    if (!track || !prev || !next) return;

    const slides = track.querySelectorAll('.carousel-slide');
    const total  = slides.length;
    let current  = 0;
    let autoplayTimer = null;

    function goToSlide(index) {
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;
      current = index;
      track.style.transform = `translateX(-${current * 100}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === current);
      });
    }

    // Arrow clicks
    prev.addEventListener('click', () => { goToSlide(current - 1); resetAutoplay(); });
    next.addEventListener('click', () => { goToSlide(current + 1); resetAutoplay(); });

    // Dot clicks
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.dataset.slide, 10));
        resetAutoplay();
      });
    });

    // Auto-play every 5 seconds
    function startAutoplay() {
      autoplayTimer = setInterval(() => goToSlide(current + 1), 5000);
    }

    function resetAutoplay() {
      clearInterval(autoplayTimer);
      startAutoplay();
    }

    // Pause on hover
    const carousel = document.getElementById('testimonial-carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
    carousel.addEventListener('mouseleave', () => startAutoplay());

    // Touch / swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToSlide(current + 1);
        else goToSlide(current - 1);
        resetAutoplay();
      }
    }, { passive: true });

    startAutoplay();
  }

  /* ----------------------------------------------------------
     INITIALIZE EVERYTHING
     ---------------------------------------------------------- */
  function init() {
    initNavbar();
    initScrollReveal();
    initFiltering();
    initModal();
    initContactForm();
    initSmoothScroll();
    initHeroParallax();
    initCarousel();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
