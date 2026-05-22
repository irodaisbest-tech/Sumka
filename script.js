// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

function reveal() {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
// Trigger once on load
reveal();

// Configurator Logic
const configImage = document.getElementById('config-image');

// Map configurations to some luxury Unsplash images to simulate the bespoke experience
const configImages = {
    'atlas': 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=2940&auto=format&fit=crop',
    'suzani': 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2676&auto=format&fit=crop',
    'bukhara': 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2669&auto=format&fit=crop',
    'matte': 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=2738&auto=format&fit=crop',
    'glossy': 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=2574&auto=format&fit=crop',
    'hardware': 'https://images.unsplash.com/photo-1614179689702-355944cd0918?q=80&w=2673&auto=format&fit=crop'
};

window.updateConfig = function(type) {
    // Basic effect to fade out, change source, fade in
    configImage.style.opacity = '0';
    
    // Update active button states within the parent
    event.target.parentElement.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    setTimeout(() => {
        configImage.src = configImages[type] || configImages['atlas'];
        configImage.style.opacity = '1';
    }, 500);
};
