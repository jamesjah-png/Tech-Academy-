// Aether Tech Academy - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Basic confirmation that JS is linked correctly
    console.log("Aether Tech Academy Scripts Loaded.");

    // Functionality 1: Simple Contact Form Confirmation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // In production, don't prevent default
            alert('Thank you! Your message has been sent to Aether Academy.');
            // Here, you would typically add code to send the form data to a server
        });
    }

    // Functionality 2: Smooth Scrolling (Optional addition)
    // You could add smooth scrolling for anchored links if you had any.
    /*
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    */
});
