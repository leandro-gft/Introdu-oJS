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
    var pacienteTr = montaTr(paciente);
    
    //adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});

function obtemPacientedoFormulario(form) {

    var paciente = { 
        nome: form.nome.value, 
        peso: form.peso.value, 
        altura: form.altura.value, 
        gordura: form.gordura.value, 
        imc: calculaImc(form.peso.value,form.altura.value)
    }

    return paciente; //catacteristicas do objeto paciente
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso,"info-peso");
    var alturaTd = montaTd(paciente.altura,"info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.gordura, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

