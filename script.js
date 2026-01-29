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
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';