function chooseFrango() {
    const frango = document.getElementById("frango");
    frango.classList.toggle("selected");
    yesfrango.classList.toggle("icon");
    yesstrogonofe.classList.add("icon");
    yespratofeito.classList.add("icon");
    strogonofe.classList.remove("selected");
    pratofeito.classList.remove("selected");
}

function chooseStrogonofe() {
    const strogonofe = document.getElementById("strogonofe");    
    strogonofe.classList.toggle("selected");
    yesstrogonofe.classList.toggle("icon");
    yesfrango.classList.add("icon");
    yespratofeito.classList.add("icon");
    frango.classList.remove("selected"); 
    pratofeito.classList.remove("selected");   
}

function choosePratoFeito() {
    const pratofeito = document.getElementById("pratofeito");   
    pratofeito.classList.toggle("selected");
    yespratofeito.classList.toggle("icon");
    yesstrogonofe.classList.add("icon");
    yesfrango.classList.add("icon"); 
    strogonofe.classList.remove("selected");
    frango.classList.remove("selected");
}

function chooseCoquinha() {
    const coquinha = document.getElementById("coquinha");
    coquinha.classList.toggle("selected");
    yescoquinha.classList.toggle("icon");
    yesmatte.classList.add("icon");
    yesagua.classList.add("icon");
    matte.classList.remove("selected");
    agua.classList.remove("selected");
}

function chooseMatte() {
    const matte = document.getElementById("matte");
    matte.classList.toggle("selected");
    yesmatte.classList.toggle("icon");
    yescoquinha.classList.add("icon");
    yesagua.classList.add("icon");
    coquinha.classList.remove("selected");
    agua.classList.remove("selected");
}

function chooseAgua() {
    const agua = document.getElementById("agua");
    agua.classList.toggle("selected");
    yesagua.classList.toggle("icon");
    yescoquinha.classList.add("icon");
    yesmatte.classList.add("icon");
    matte.classList.remove("selected");
    coquinha.classList.remove("selected");
}

function chooseTorta() {
    const torta = document.getElementById("torta");
    torta.classList.toggle("selected");
    yestorta.classList.toggle("icon");
    yespudim.classList.add("icon");
    yesbrigadeiro.classList.add("icon");
    pudim.classList.remove("selected");
    brigadeiro.classList.remove("selected");
}

function choosePudim() {
    const pudim = document.getElementById("pudim");
    pudim.classList.toggle("selected");
    yespudim.classList.toggle("icon");
    yestorta.classList.add("icon");
    yesbrigadeiro.classList.add("icon");
    torta.classList.remove("selected");
    brigadeiro.classList.remove("selected");
}

function chooseBrigadeiro() {
    const brigadeiro = document.getElementById("brigadeiro");
    brigadeiro.classList.toggle("selected");
    yesbrigadeiro.classList.toggle("icon");
    yestorta.classList.add("icon");
    yespudim.classList.add("icon");
    torta.classList.remove("selected");
    pudim.classList.remove("selected");
}