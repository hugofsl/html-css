
function pageLoad(){
const data = new Date(); 
let hora = data.getHours();
if (hora < 12) {
    document.querySelector("body").style.backgroundColor = "rgb(238, 230, 182)";
    document.querySelector("h1").style.color = "var(--cor_titulo_p)"; 
    document.getElementById("texto").innerHTML = `<p>Bom dia! Agora são ${hora} horas.</p>`;
    document.getElementsByClassName("imagem")[0].src = "imgs/manha.jpg";
} else if (hora < 18) {
    document.querySelector("body").style.backgroundColor = "rgb(214, 173, 119)";
    document.getElementById("texto").innerHTML = `<p>Boa Tarde! Agora são ${hora} horas.</p>`;
    document.getElementsByClassName("imagem")[0].src = "imgs/tarde.jpg"; 
} else if (hora < 24) {
    document.querySelector("body").style.backgroundColor = "var(--cor_fundo_01)"; 
    document.getElementById("texto").innerHTML = `<p>Boa Noite! Agora são ${hora} horas.</p>`;
    document.getElementsByClassName("imagem")[0].src = "imgs/noite.png";
} else {
    document.querySelector("body").style.backgroundColor = "rgb(42, 28, 65)";
    document.getElementById("texto").innerHTML = `<p>Boa Madrugada! Agora são ${hora} horas.</p>`;
    document.getElementsByClassName("imagem")[0].src = "imgs/madrugada.PNG";
}
}

