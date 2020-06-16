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
    var form = document.querySelector("#form-adiciona");
    
    var nome = form.nome.value;
    var altura = form.altura.value;
    var peso = form.peso.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = (peso/(altura*altura)).toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});





