function showInfo(section) {
    const infoBox = document.getElementById('info-box');
    const sections = document.querySelectorAll('.info-text');
    const heroText = document.getElementById('hero-text');

    sections.forEach((el) => {
        el.style.display = 'none';
    });

    document.getElementById(section).style.display = 'block';
    infoBox.style.display = 'block';
    heroText.style.display = 'none';

    document.addEventListener('click', closeInfoOutside);
}

function closeInfo() {
    const infoBox = document.getElementById('info-box');
    const heroText = document.getElementById('hero-text');
    infoBox.style.display = 'none';
    heroText.style.display = 'block';

    document.removeEventListener('click', closeInfoOutside);
}

function closeInfoOutside(event) {
    const infoBox = document.getElementById('info-box');
    if (!infoBox.contains(event.target) && !event.target.closest('nav ul li a')) {
        closeInfo();
    }
}
