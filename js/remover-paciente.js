var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
    var alvoEvento = event.target; //neste caso o TD
    var paiDoAlvo = alvoEvento.parentNode; //neste caso o TR

    paiDoAlvo.classList.add("fadeOut"); //leva a opacidade 0 em meio segundo, ver no css
    
    setTimeout(function () {
        paiDoAlvo.remove();
    }, 500); //espera meio segundo pra remover
})


