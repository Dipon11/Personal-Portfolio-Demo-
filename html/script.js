// Toggle the navigation menu on small screens
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu--visible');
});

// Smooth scroll to section when clicking on a navigation link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        const offset = 60; // adjust this value to offset the scroll position
        const position = target.offsetTop - offset;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    });
});

// Show the contact form when clicking on the contact button
const contactButton = document.querySelector('#contact-button');
const contactForm = document.querySelector('#contact-form');

contactButton.addEventListener('click', () => {
    contactForm.classList.toggle('contact-form--visible');
});

// Submit the contact form and show a success message
const form = document.querySelector('#contact-form');
const submitButton = document.querySelector('#submit-button');
const successMessage = document.querySelector('#success-message');

submitButton.addEventListener('click', e => {
    e.preventDefault();
    const formData = new FormData(form);

    // Replace this with your own form submission code
    // You can use a library like axios or fetch to make an AJAX request
    // to your server and handle the form submission there
    console.log('Form data:', formData);

    // Show a success message
    successMessage.classList.add('success-message--visible');
    form.reset();
});
