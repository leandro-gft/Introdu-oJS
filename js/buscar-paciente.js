var botao = document.querySelector("#buscar-paciente");

botao.addEventListener("click",function(){
    console.log("Buscando pacientes...")
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
       console.log(xhr.responseText); 
    });
    
    xhr.send();
});