// Smooth animations on load
document.addEventListener('DOMContentLoaded', () => {
    // Fade in elements
    const elements = document.querySelectorAll('.profile-container, .social-icon');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        const profileContainer = document.querySelector('.profile-container');
        if (profileContainer) {
            profileContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });

    // Social media click tracking
    const socialLinks = document.querySelectorAll('.social-icon');
    socialLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const platforms = ['Instagram', 'Facebook', 'TikTok', 'YouTube', 'Twitter/X', 'Google', 'WhatsApp'];
            console.log(`Clicked: ${platforms[index]}`);
            
            // Add a click animation
            link.style.transform = 'scale(0.9)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Auto-show WhatsApp tooltip every 10 seconds
    const whatsappTooltip = document.querySelector('.whatsapp-tooltip');
    if (whatsappTooltip) {
        setInterval(() => {
            // Show tooltip
            whatsappTooltip.classList.add('show-tooltip');
            
            // Hide tooltip after 5 seconds
            setTimeout(() => {
                whatsappTooltip.classList.remove('show-tooltip');
            }, 5000);
        }, 10000);
    }

    // Unified scroll navigation button
    const scrollBtn = document.getElementById('scrollNextBtn');
    const sections = ['services', 'about', 'social-stats', 'videography', 'photography', 'top-video', 'packages', 'testimonials'];
    
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            let currentSectionIndex = -1;
            
            // Find current section
            sections.forEach((sectionId, index) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        currentSectionIndex = index;
                    }
                }
            });
            
            // Scroll to next section or back to top
            if (currentSectionIndex === -1 || currentSectionIndex < sections.length - 1) {
                const nextSectionId = sections[currentSectionIndex + 1];
                const nextSection = document.getElementById(nextSectionId);
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Last section, scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        
        // Hide button on last section (testimonials)
        window.addEventListener('scroll', () => {
            const testimonials = document.getElementById('testimonials');
            if (testimonials) {
                const rect = testimonials.getBoundingClientRect();
                const isInTestimonials = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
                
                if (isInTestimonials) {
                    scrollBtn.style.opacity = '0.3';
                } else {
                    scrollBtn.style.opacity = '1';
                }
            }
        });
    }
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';