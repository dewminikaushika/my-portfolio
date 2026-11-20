
// Smooth Scrolling

document.querySelectorAll('nav a, #home a').forEach(function(link) {

    link.addEventListener('click', function(event) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// Contact Me Button

const contactButton = document.querySelector('#about button');

contactButton.addEventListener('click', function() {

    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });

});


// Contact Form

const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function(event) {

    event.preventDefault();

    alert('Thank you! Your message has been received.');

    contactForm.reset();

});


// Dark / Light Theme Toggle

const themeToggle = document.querySelector('#themeToggle');

themeToggle.addEventListener('click', function() {

    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {

        themeToggle.textContent = '☀️ Light Mode';

    } else {

        themeToggle.textContent = '🌙 Dark Mode';

    }

});
