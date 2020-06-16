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
botaoAdicionar.addEventListener("click", function () {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    //extraindo indormacoes do paciente do form
    var paciente = obtemPacientedoFormulario(form);

    //cria tr e td do paciente
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
    imcTd.textContent = calculaImc(peso,altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    //adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});

function obtemPacientedoFormulario(form) {
    var nome = form.nome.value;
    var altura = form.altura.value;
    var peso = form.peso.value;
    var gordura = form.gordura.value;
    var imc = calculaImc(peso,altura);
    return { nome, peso, altura, gordura, imc}; //catacteristicas do objeto paciente
}

