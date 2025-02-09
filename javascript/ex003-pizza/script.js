var c = 0;

function comerPizza() {  
    console.log("Comendo pizza...");  
    animateSlice();
}

function animateSlice() {
    if (c < 8) {
        let mordida = new Audio("mordida.mp3");        
        document.getElementsByClassName("slice")[c].style.animation = "slice 1s forwards";
        mordida.currentTime = 0;
        mordida.volume = 0.3;
        mordida.play();
        c++;
        setTimeout(animateSlice, 1000);
    }
}

function resetar(){
    for (let i = 0; i < 8; i++) {
        document.getElementsByClassName("slice")[i].style.animation = "none";
    }
    c = 0;
}