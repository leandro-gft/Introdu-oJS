var botao = document.querySelector("#buscar-paciente");

botao.addEventListener("click", function () {
    console.log("Buscando pacientes...")
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pcientes");
    xhr.addEventListener("load", function () {
        if(xhr.status == 200){
            erro.classList.add("invisivel");
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);           
        });
    } else {
        console.log(xhr.status);
        console.log(xhr.responseText);
        var erro = document.querySelector("#erro-ajax");
        erro.classList.remove("invisivel");
    }


    });

    xhr.send();
});