document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa para móviles
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Dropdown para móviles
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.parentElement;
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Animación al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-image, .about-mission, .value-item, .timeline-item, .team-member');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializar elementos con opacidad 0 para la animación
    document.querySelectorAll('.about-image, .about-mission, .value-item, .timeline-item, .team-member').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Ejecutar al cargar y al hacer scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});