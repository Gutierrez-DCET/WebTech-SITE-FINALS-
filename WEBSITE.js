/* Smooth Scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Back to Top Button */
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.display = 'none';
backToTopButton.style.padding = '10px';
backToTopButton.style.fontSize = '18px';
backToTopButton.style.backgroundColor = '#5c6ac4';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.cursor = 'pointer';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Form Validation */
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (event) => {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    if (!name.value || !email.value || !message.value) {
        event.preventDefault();
        alert('Please fill in all fields!');
    }
});
