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

    var erros = validaPaciente(paciente);
    //validando paciente
    if (erros.length > 0) {
        exibeMensagemErro(erros);
        return; //sai da função e interrompe a sequencia de comandos
    }

    adicionaPacienteNaTabela(paciente);

    form.reset(); //limpa formulario

    var mensagensErro = document.querySelector("#mensagem-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {
    //cria tr e td do paciente
    var pacienteTr = montaTr(paciente);
    //adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obtemPacientedoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente; //retorna objeto paciente
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

function exibeMensagemErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = ""; //innerHtml controla HTML interno do elemento;

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) erros.push("Preencha o campo nome ")

    if (paciente.peso.length == 0) erros.push("Preencha o campo peso ")

    if (paciente.altura.length == 0) erros.push("Preencha o campo altura ")

    if (!validaPeso(paciente.peso)) erros.push("O peso é inválido"); //função push coloca dentro do array

    if (!validaAltura(paciente.altura)) erros.push("A altura é inválida");

    if (paciente.gordura.length == 0) erros.push("Preencha o campo gordura ")

    return erros;
}
