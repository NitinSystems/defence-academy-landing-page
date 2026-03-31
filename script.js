document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainMenu = document.querySelector('.main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    const menuLinks = document.querySelectorAll('.main-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainMenu.classList.contains('active')) {
                mainMenu.classList.remove('active');
            }
        });
    });

    // 2. Sticky Header shadow on scroll
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // 3. Smooth Scrolling for Anchor Links (fallback if CSS scroll-behavior is not supported)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Testimonials Carousel
    const track = document.getElementById('testimonial-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (track && prevBtn && nextBtn) {
        // Calculate scroll amount based on card width
        const getScrollAmount = () => {
            const card = track.querySelector('.testimonial-card');
            return card ? card.offsetWidth + 30 : 0; // 30 is var(--gap-medium)
        };

        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });
    }
});
