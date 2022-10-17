    let chosen_food;
    let chosen_drink;
    let chosen_desert;
    let name;
    let address;
    let deactivated_button = document.getElementById("unclick")

function chooseFood(food) {
    const food_selected = document.querySelector(".selected-food");
    if (food_selected !== null){
        food_selected.classList.remove("selected-food");
    }    
        food.classList.add("selected-food");

        chosen_food = food.innerHTML;
        activatePayment();
}

function chooseDrink(drink) {
    const drink_selected = document.querySelector(".selected-drink")

    if (drink_selected !== null){
        drink_selected.classList.remove("selected-drink");
    }    
        drink.classList.add("selected-drink");

        chosen_drink = drink.innerHTML;
        activatePayment();
}

function chooseDesert(desert) {
    const desert_selected = document.querySelector(".selected-desert")

    if (desert_selected !== null){
        desert_selected.classList.remove("selected-desert");
    }    
        desert.classList.add("selected-desert");

        chosen_desert = desert.innerHTML;
        activatePayment();
}

function activatePayment() {
    if (chosen_food !== undefined){
    if (chosen_drink !== undefined){
    if (chosen_desert !== undefined){
        const confirmOrderText = document.querySelector(".button");
        confirmOrderText.innerHTML ="Fechar pedido";
        confirmOrderText.classList.add("button-selected");
        deactivated_button.classList.remove("button-off");
    }
    }
    }
}

function makeOrder() {
    const name = prompt("Qual o seu nome?");
    const address = prompt ("E o seu endereço?");

}