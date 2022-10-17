    let chosen_food;
    let chosen_drink;
    let chosen_desert;
    let food_name = document.querySelector(".selected-food");
    let drink_name = document.querySelector(".selected-drink");
    let desert_name = document.querySelector(".selected-desert");
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
    }
    }
    }
}

function makeOrder() {
    const name = prompt("Qual o seu nome?");
    const address = prompt ("E o seu endereço?");
    const food_name = (document.querySelector(".selected-food>h1")).innerHTML;
    const drink_name = (document.querySelector(".selected-drink>h1")).innerHTML;
    const desert_name = (document.querySelector(".selected-desert>h1")).innerHTML;
    let total = 0;
    
    cost1 = (document.querySelector(".selected-food>h3")).innerHTML.replace("R$ ", "");
    cost1 = cost1.replace(",", ".");
    cost1 = Number(cost1);
    total += cost1;

    cost2 = (document.querySelector(".selected-drink>h3")).innerHTML.replace("R$ ", "");
    cost2 = cost2.replace(",", ".");
    cost2 = Number(cost2);
    total += cost2;

    cost3 = (document.querySelector(".selected-desert>h3")).innerHTML.replace("R$ ", "");
    cost3 = cost3.replace(",", ".");
    cost3 = Number(cost3);
    total += cost3;

    let msg = `Olá, gostaria de fazer o seguinte pedido:\n- Prato: ${food_name}\n- Bebida: ${drink_name}\n- Desert: ${desert_name}\n- Total: R$ ${total.toFixed(2)}\n- Nome: ${name}\n- Endereço: ${address}`;
    msg = encodeURIComponent(msg);
    window.open("https://wa.me/5521996790244?text=" + msg);
}