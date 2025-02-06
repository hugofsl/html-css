document.addEventListener('DOMContentLoaded', (event) => {
    let nome = window.prompt('Qual é o seu nome?');
    document.getElementById('ola').textContent = `Olá, ${nome}!`;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    } //Função que gera um número inteiro aleatório entre min e max

    function clicar(){
        const [x, y, z] = [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)]; //Gera um número aleatório entre 0 e 255 para cada cor
        const newColor = `rgb(${x}, ${y}, ${z})`;
        document.getElementById('botao').style.backgroundColor = newColor;
        document.getElementById('container').style.backgroundColor = newColor;

        const button = document.getElementById('container');
        const randomDirection = getRandomInt(0, 4);
        const moveDistance = 50;

        switch(randomDirection) {
            case 0:
                button.style.transform = `translateX(${moveDistance}px)`;
                break;
            case 1:
                button.style.transform = `translateX(-${moveDistance}px)`;
                break;
            case 2:
                button.style.transform = `translateY(${moveDistance}px)`;
                break;
            case 3:
                button.style.transform = `translateY(-${moveDistance}px)`;
                break;
        }
    }

    window.clicar = clicar;
});