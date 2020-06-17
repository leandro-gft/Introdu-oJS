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

    pesoValido = validaPeso(peso);
    alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido"
        // paciente.style.backgroundColor = "lightcoral"
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaValida) {
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        // paciente.style.backgroundColor = "lightcoral"
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso,altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function validaPeso(peso){
    if (peso>=0 && peso <600){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if (altura>=0 && altura <3){
        return true;
    } else {
        return false;
    }
}