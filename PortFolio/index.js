
// Smooth scrolling when clicking on header links
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('header .list a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offsetTop = targetElement.offsetTop;
            const scrollOptions = {
                top: offsetTop,
                behavior: 'smooth'
            };
            window.scrollTo(scrollOptions);
        });
    });
});


