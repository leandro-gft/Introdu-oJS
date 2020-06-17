var pacientes = document.querySelectorAll(".tabela-pacientes");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    var alvoEvento = event.target; //neste caso o TD
    var paiDoAlvo = alvoEvento.parentNode; //neste caso o TR
    paiDoAlvo.remove();
})

/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado");
        this.remove(); //this: a quem o evento está atrelado
    })
});*/
