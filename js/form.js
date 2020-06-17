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

    var erro = validaPaciente(paciente);

    //validando paciente
    if (erro != "") {
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erro;
        return; //sai da função e interrompe a sequencia de comandos
    }
    //adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();


});

function obtemPacientedoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente; //catacteristicas do objeto paciente
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (!validaPeso(paciente.peso)) {
        erros.push("O peso é inválido"); //função push coloca dentro do array
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("A altura é inválida");
    }

    return erros;
}
