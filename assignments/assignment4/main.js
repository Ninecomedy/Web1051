window.onload = setupIngredients;

function setupIngredients() {
    let ingredients = document.querySelectorAll('input[name="ingredient"]');
    for (let i = 0; i < ingredients.length; i++) {
        ingredients[i].addEventListener('change', updateIngredients);
    }
    updateIngredients();
}

function updateIngredients() {
    let ingredients = document.querySelectorAll('input[name="ingredient"]');
    let ready = 0;
    for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i].checked) {
            ready++;
            ingredients[i].parentNode.classList.add('ingredient-ready');
        } else {
            ingredients[i].parentNode.classList.remove('ingredient-ready');
        }
    }
    document.getElementById('ingredient-progress').textContent = ready + ' / ' + ingredients.length + ' ingredients ready';
}
