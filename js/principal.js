var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < 5; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    pesoValido = true;
    alturaValida = true;

    if (peso <= 0 || peso > 600) {
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido"
        // paciente.style.backgroundColor = "lightcoral"
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura > 3) {
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        // paciente.style.backgroundColor = "lightcoral"
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

/*
titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("Fui clicado");  
}

//função anonima
titulo.addEventListener("click", function(){
    console.log("Fui clicado")    
});*/

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    console.log("Botao clicado");
    
});





