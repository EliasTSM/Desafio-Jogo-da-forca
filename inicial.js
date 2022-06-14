var inicio = document.querySelector(".botao-c");
var adiciona = document.querySelector(".botao-a");

inicio.addEventListener("click", function(){
    event.preventDefault();
    window.location.href = "jogo.html";
})

adiciona.addEventListener("click", function(){
    event.preventDefault();
    window.location.href = "adiciona.html";
})