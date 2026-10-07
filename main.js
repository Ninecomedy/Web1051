window.onload = setupLinks;

function setupLinks() {
    let links = document.querySelectorAll('.text-link');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseenter', highlightLink);
        links[i].addEventListener('mouseleave', resetLink);
    }
}

function highlightLink(event) {
    event.target.textContent = 'Open assignment →';
}

function resetLink(event) {
    event.target.textContent = 'View assignment →';
}
