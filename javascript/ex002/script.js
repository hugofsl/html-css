function verificar() {
    console.log("Button clicked"); //Para debug do acionamento da função pelo botão
    const dataatual = new Date();
    let res = document.getElementById("res");
    let idade = document.querySelector("input[name='txtdata']").value;
    let resIdade = dataatual.getFullYear() - Number(idade);
    let sexo = document.querySelector("input[name='txtsexo']:checked");
    let foto = document.getElementById("foto");
    if (sexo == null || idade == "" || idade == null) {
        res.textContent = "Preencha os campos antes de verificar!";
        foto.style.display = "none";
    } else {
        sexo = sexo.value;

        try {
            if (resIdade <= 0 || resIdade > 120 || isNaN(idade)) {
                res.textContent = "Idade inválida (menor que zero, vazia ou NaN)";
                foto.style.display = "none";
            } 
            else if (sexo == "M") {
                if (resIdade == 1) {
                    res.textContent = `Você é um bebê de ${resIdade} ano.`;
                    foto.style.display = "block";
                    foto.src = "imgs/bebe.png";
                } else if (resIdade <= 5) {
                    res.textContent = `Você é um bebê de ${resIdade} anos.`;
                    foto.style.display = "block";
                    foto.src = "imgs/bebe.png";
                } else if (resIdade <= 12) {
                    res.textContent = `Você é um menino de ${resIdade} anos.`;
                    foto.style.display = "block";
                    foto.src = "imgs/crianca_M.png";
                } else if (resIdade <= 18) {
                    res.textContent = `Você é um adolescente de ${resIdade} anos.`;
                    foto.style.display = "block";
                    foto.src = "imgs/adole_M.png";
                } else if (resIdade <= 38) {
                    res.textContent = `Você é um rapaz de ${resIdade} anos.`;
                    foto.style.display = "block";
                    foto.src = "imgs/rapaz.png";
                } else if (resIdade <= 50) {
                    res.textContent = `Você é um homem de ${resIdade} anos.`;
                    foto.style.display = "block";
                    foto.src = "imgs/homem.png";
                } else {
                    res.textContent = `Você é um senhor de ${resIdade} anos.`;
                    foto.style.display = "block";
                    foto.src = "imgs/idoso.png";
                }
            }

            else if (sexo == "F") {
                if (resIdade <= 5) {
                    res.textContent = `Você é uma bebê de ${resIdade} ano.`;
                    foto.style.display = "block";
                    foto.src = "imgs/bebe.png";
                } else if (resIdade <= 5) {
                    res.textContent = `Você é uma bebê de ${resIdade} anos.`;
                    foto.style.display = "block";
                    foto.src = "imgs/bebe.png";
                } else if (resIdade <= 12) {
                    res.textContent = `Você é uma menina de ${resIdade} anos.`;
                    foto.style.display = "block";
                    foto.src = "imgs/crianca_F.png";
                } else if (resIdade <= 18) {
                    res.textContent = `Você é uma adolescente de ${resIdade} anos.`;
                    foto.style.display = "block";
                    foto.src = "imgs/adole_F.png";
                } else if (resIdade <= 38) {
                    res.textContent = `Você é uma moça de ${resIdade} anos.`;
                    foto.style.display = "block";
                    foto.src = "imgs/moca.png";
                } else if (resIdade <= 50) {
                    res.textContent = `Você é uma mulher de ${resIdade} anos.`;
                    foto.style.display = "block";
                    foto.src = "imgs/mulher.png";
                } else {
                    res.textContent = `Você é uma senhora de ${resIdade} anos.`;
                    foto.style.display = "block";
                    foto.src = "imgs/idosa.png";
                }
            }

        } catch (error) {
            res.textContent = `Erro: ${error}`;
            foto.style.display = "block";
        }
    }
}

