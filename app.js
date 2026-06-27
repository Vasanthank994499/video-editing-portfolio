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
});
