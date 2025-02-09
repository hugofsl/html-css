function OnLoad(){
    
    }

function verificar(){
    console.log("Button clicked");
    const dataatual = new Date();
    let sexo = document.querySelector("input[type='radio']").value

    let idade = document.querySelector("input[name='txtdata']").value

    let res = document.getElementById("res");

    let resIdade = dataatual.getFullYear() - Number(idade);
    
    try {
        if (sexo != "F" && sexo != "M" || sexo == "") {
            throw "Sexo inválido";
        }
        if (resIdade < 0 || idade == "" || isNaN(idade)){
            throw "Idade inválida (menor que zero ou NaN)";
        }

        if (resIdade > 120){
            throw "Idade inválida (provavelmente)";
        }

        if (sexo == "M" && resIdade >= 18){
            res.innerHTML = "Você é um homem maior de idade.";
        } 
        else if (sexo == "M" && resIdade < 18){
            res.innerHTML = "Você é um homem menor de idade.";
        } 
        else if (sexo == "F" && resIdade >= 18){
            res.innerHTML = "Você é uma mulher maior de idade.";
        } 
        else {
            res.innerHTML = "Você é uma mulher menor de idade.";
        }
    } catch (error) {
        res.innerHTML = `Erro: ${error}`;
    }

}

