/* ============================================
   PORTFOLIO JAVASCRIPT
   Handles mobile navigation, form submission,
   and dynamic footer year.
   ============================================ */

// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MOBILE NAVIGATION TOGGLE
    // ============================================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle the mobile menu when hamburger button is clicked
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close the mobile menu when a navigation link is clicked
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // ============================================
    // NAVBAR BACKGROUND ON SCROLL
    // ============================================
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    });

    // ============================================
    // CONTACT FORM HANDLING
    // ============================================
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the form from actually submitting (for demo purposes)
            event.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple validation
            if (name === '' || email === '' || message === '') {
                formStatus.textContent = 'Please fill in all fields.';
                formStatus.style.color = '#dc2626';
                return;
            }

            // Show success message (replace this with real form handling later)
            formStatus.textContent = 'Thank you for your message, ' + name + '! I will get back to you soon.';
            formStatus.style.color = '#16a34a';

            // Clear the form
            contactForm.reset();

            // Clear the status message after 5 seconds
            setTimeout(function() {
                formStatus.textContent = '';
            }, 5000);
        });
    }

    // ============================================
    // DYNAMIC FOOTER YEAR
    // ============================================
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS (fallback)
    // ============================================
    // Modern browsers support CSS scroll-behavior: smooth,
    // but this provides a fallback for older browsers.
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // SCROLL REVEAL ANIMATION
    // ============================================
    // Add a simple fade-in effect when sections come into view
    const sections = document.querySelectorAll('.section');

    const revealOnScroll = function() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        sections.forEach(function(section) {
            const elementTop = section.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    sections.forEach(function(section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run on load and scroll
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on page load
});
