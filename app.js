// Vasanthan K - Video Editor Portfolio JS

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. STICKY HEADER
  // ==========================================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ==========================================
  // 2. MOBILE MENU TOGGLE
  // ==========================================
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(5, 5, 7, 0.95)';
        navLinks.style.padding = '2rem';
        navLinks.style.borderBottom = '1px solid var(--border-color)';
      }
    });
  }

  // ==========================================
  // 3. CONTACT FORM SUBMISSION & TOAST
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const successToast = document.getElementById('successToast');
  const toastMessage = document.getElementById('toastMessage');

  if (contactForm && successToast) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const details = document.getElementById('contactDetails').value;

      console.log("Project form submitted for Vasanthan K:", { name, email, details });

      // Display notification toast
      toastMessage.textContent = `Thanks, ${name}! I will reach out to you shortly.`;
      successToast.classList.add('active');

      // Clear form
      contactForm.reset();

      // Fade toast
      setTimeout(() => {
        successToast.classList.remove('active');
      }, 4500);
    });
  }

  // ==========================================
  // 4. HOVER SILENT PREVIEWS FOR SHOWCASE VIDEOS
  // ==========================================
  const cards = document.querySelectorAll('.portfolio-card');
  cards.forEach(card => {
    const media = card.querySelector('.card-media');
    const video = card.querySelector('video');
    
    if (video && media) {
      // Mouse hover starts playing video silently
      card.addEventListener('mouseenter', () => {
        video.play().then(() => {
          media.classList.add('playing');
        }).catch(err => console.log("Autoplay preview failed:", err));
      });
      
      // Mouse leave pauses and resets video frame
      card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
        media.classList.remove('playing');
      });
    }
  });

  // ==========================================
  // 5. HERO VIDEO MUTE/UNMUTE CONTROLLER
  // ==========================================
  const heroVideo = document.getElementById('heroVideo');
  const heroMuteBtn = document.getElementById('heroMuteBtn');
  const heroMuteIcon = document.getElementById('heroMuteIcon');

  if (heroMuteBtn && heroVideo && heroMuteIcon) {
    heroMuteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      
      const shouldMute = !heroVideo.muted;
      heroVideo.muted = shouldMute;
      
      if (shouldMute) {
        heroVideo.setAttribute('muted', 'muted');
        // Mute icon (speaker with cross)
        heroMuteIcon.innerHTML = `<path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM13.5 8l2-2L14 4.5l-2 2-2-2L8.5 6l2 2-2 2 1.5 1.5 2-2 2 2 1.5-1.5-2-2z"/>`;
        heroMuteBtn.style.color = 'var(--text-secondary)';
      } else {
        heroVideo.removeAttribute('muted');
        heroVideo.volume = 1.0;
        // Unmute icon (speaker with waves)
        heroMuteIcon.innerHTML = `<path d="M11.536 14.01A8.473 8.473 0 0 0 14 10a8.47 8.47 0 0 0-2.464-4.01l-.707.707A7.473 7.473 0 0 1 13 10a7.47 7.47 0 0 1-2.172 3.303l.707.707zm-2.122-2.122A5.474 5.474 0 0 0 11 10c0-1.206-.39-2.32-1.05-3.228l-.712.71c.52.748.835 1.656.835 2.637 0 .979-.313 1.885-.83 2.63l.707.709zm-2.122-2.122A3.483 3.483 0 0 0 8 10a3.48 3.48 0 0 0-.707-2.12l-.708.707c.365.48.585 1.07.585 1.713a2.63 2.63 0 0 1-.58 1.705l.71.707zm-4.308-3.32-.477-.287H2v4h1.764l.477.287L6.8 13.568V6.432L2.984 8.746z"/>`;
        heroMuteBtn.style.color = 'var(--accent-cyan)';
      }
    });
  }
});
