window.onload = setupPortfolioLink;

function setupPortfolioLink() {
    let link = document.querySelector('.collection-nav a');
    link.addEventListener('click', returnToPortfolio);
}

function returnToPortfolio(event) {
    event.preventDefault();
    window.location.href = '../../index.html#assignments';
}
