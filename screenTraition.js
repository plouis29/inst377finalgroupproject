document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');

            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href;
            }, 1000); // Duration should match the transition duration
        });
    });
});