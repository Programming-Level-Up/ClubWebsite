const header = document.querySelector('.header');

function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 450) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
}

handleScroll(); // Call handleScroll on page load
window.addEventListener('scroll', handleScroll);
