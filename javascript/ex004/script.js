var listanum = [];

function adcnum(){
    let num = document.querySelector("input[name='txtnum']").value;
    let select = document.querySelector("select[name='lista']");
    let item = document.createElement("option");
    
    num = Number(num);
    
    if (num < 1 || num > 100 || isNaN(num) || listanum.includes(num)) {
        alert("Número inválido (menor que 1, maior que 100 ou NaN)ou repetido, insira outro valor");} 
        else {
        item.text = `Número ${num} adicionado`;
        select.appendChild(item);
        listanum.push(num);}

    let resultado = document.querySelector("div#res");
    if(resultado.innerHTML != ""){
        resultado.innerHTML = "";
    }
    let resetnum = document.querySelector("input[name='txtnum']");
    resetnum.value = "";
    resetnum.focus();
}


function finalizar(){
    if(listanum.length == 0){
        alert("Adicione números antes de analisar!");
    }
    else{
    let resultado = document.querySelector("div#res");    
    listanum.sort();

    resultado.innerHTML += `<p>Ao todo, temos ${listanum.length} números cadastrados.</p>`;
    resultado.innerHTML += `<p>O maior valor informado foi ${listanum[listanum.length - 1]}.</p>`;
    resultado.innerHTML += `<p>O menor valor informado foi ${listanum[0]}.</p>`;
    let soma = 0;
    for (let i in listanum){soma += listanum[i];}
    resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    resultado.innerHTML += `<p>A média dos valores digitados é ${soma / listanum.length}.</p>`;
    listanum = [];
    }
}

function limpar(){
    let resultado = document.querySelector("div#res");    
    resultado.innerHTML = "";
    let select = document.querySelector("select[name='lista']");
    select.innerHTML = "";
    listanum = [];
}