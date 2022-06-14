var palavrasForca = ["ALURA", "FRONTEND", "HTML", "CSS", "JAVA"]
var cancela = document.querySelector(".botao-d");
var salva = document.querySelector(".botao-c");
var adicionando = document.querySelector(".adicionando");
var certo = 0;
var errado = 0;



cancela.addEventListener("click", function(){
    event.preventDefault();
    window.location.href = "index.html";
})

salva.addEventListener("click", function(){
    event.preventDefault();
    var forms = document.querySelector("#form");
    var texto = forms.adiciona.value;
    if(texto.length <= 8){
        adicionando.textContent = texto.toUpperCase();
        sessionStorage.test1 = adicionando.textContent;
        alert("Palavra Adicionada.")
    }else {
        alert("Máx. 8 letras.");
    }
    
    forms.reset();
    window.location.href = "jogo.html";
})

var x = sessionStorage.getItem("test1");
palavrasForca.push(x);

var desistir = document.querySelector(".botao-d");
var novo = document.querySelector(".botao-c");


desistir.addEventListener("click", function(){
    event.preventDefault();
    window.location.href = "index.html";
})

novo.addEventListener("click", function(){
    event.preventDefault();
    window.location.href = "jogo.html";
})

function pegaTecla(evt){
    var tecla = evt.keyCode;
    return String.fromCharCode(tecla);
}
var letraDigitada = [];






function sorteia(){

    return Math.floor(Math.random() * (palavrasForca.length - 0)) + 0;

}

var escolhida = sorteia();
palavraExibir = palavrasForca[escolhida];


var arrayPlavaraExibir = palavraExibir.split('');


function criaPalavraJogo(){
    var array = [];
    for(var i = 0; i< palavraExibir.length; i++){
        array.push(" ");
        var divi = document.createElement("div");
        divi.classList.add("indLetra");
        var divisao = document.querySelector("#criarPalvra");
        divisao.appendChild(divi);
        var span = document.createElement("span");
        span.classList.add("letter");
        span.textContent = array[i];
        divi.appendChild(span);
        const imagem = document.createElement("img");
        imagem.classList.add("palavra");
        imagem.src = "img/Rectangle6.png";
        divi.appendChild(imagem);
    }
    
}

criaPalavraJogo();

document.onkeypress = function(evt){
    var nao = 0;
    var existe = 0;
    var str = pegaTecla(evt);
    for(var w = 0; w < letraDigitada.length; w++){
        if(letraDigitada[w]==str.toUpperCase()){
            existe = 1;
        }
    }
    if(letraDigitada.length < 10 && existe == 0){
       letraDigitada.push(str.toUpperCase());
       document.getElementById("insere").innerHTML += str.toUpperCase() + "  ";
    }
    for (var j = 0; j < palavraExibir.length; j++){
        if(str.toUpperCase() == arrayPlavaraExibir[j]){
            var eleDiv = document.querySelector("#criarPalvra")
            var espaco = eleDiv.children[j]
            var spann = espaco.children[0]
            spann.textContent = str.toUpperCase();
            certo = certo + 1;
            if(certo == palavraExibir.length){
                document.getElementById('textoV').style.display = 'inline-block';
            }
        }if(str.toUpperCase() != arrayPlavaraExibir[j] && existe == 0){
            nao = nao +1;
            if(nao == palavraExibir.length){
                errado = errado + 1;
            }
            if(errado == 10){
                document.getElementById('textoP').style.display = 'inline-block';
            }
        }
        switch(errado){
            case 1:
                document.getElementById('base').style.display = 'inline-block';
                break;
            case 2:
                document.getElementById('traco').style.display = 'inline-block';
                break;
            case 3:
                document.getElementById('reto').style.display = 'inline-block';
                break;
            case 4:
                document.getElementById('forcaa').style.display = 'inline-block';
                break;
            case 5:
                document.getElementById('cabeca').style.display = 'inline-block';
                break;
            case 6:
                document.getElementById('bracoum').style.display = 'inline-block';
                break;
            case 7:
                document.getElementById('corpo').style.display = 'inline-block';
                break;
            case 8:
                document.getElementById('bracodois').style.display = 'inline-block';
                break;
            case 9:
                document.getElementById('pernaum').style.display = 'inline-block';
                break;
            case 10:
                document.getElementById('pernadois').style.display = 'inline-block';
                break;    

        }
    }
}