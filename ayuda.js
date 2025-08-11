document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para las preguntas frecuentes
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
            
            // Cerrar otros items abiertos
            if (item.classList.contains('active')) {
                document.querySelectorAll('.faq-item').forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // Funcionalidad para las pestañas
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remover clase active de todos los botones
            tabBtns.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            btn.classList.add('active');
            
            // Ocultar todos los paneles
            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            
            // Mostrar el panel correspondiente
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Funcionalidad de búsqueda (simulada)
    const searchBox = document.querySelector('.search-box button');
    
    searchBox.addEventListener('click', function(e) {
        e.preventDefault();
        const searchTerm = this.previousElementSibling.value.trim();
        
        if (searchTerm) {
            // Simular búsqueda
            alert(`Buscando: "${searchTerm}"\n\nEsta funcionalidad puede conectarse a un sistema de búsqueda real.`);
        }
    });
    
    // Menú hamburguesa para móviles (si no lo tienes ya)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
});