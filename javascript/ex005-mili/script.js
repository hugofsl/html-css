function calcular(){
    let num = document.querySelector("input[name='txtnum']").value;
    let resultado = document.querySelector("div#res");
    num = Number(num);
    let bilhao = 1000000000;

    if (isNaN(num)){
        alert("Número inválido!");} 
        else {
            let meses = Math.floor(bilhao / num);
            let anos = Math.floor(meses / 12);
            let geracoes = Math.floor(anos / 30);    
            if(anos >= 11500 && anos <= 115000){       
            resultado.innerHTML = `Você levaria <strong>${meses.toLocaleString("pt-BR")}</strong> meses, que são <strong>${anos.toLocaleString("pt-BR")}</strong> anos para juntar 1 bilhão de reais. Ou seja, você precisaria ter nascido no <strong>Pleistoceno (última era glacial) 🥶</strong>. Sua família teria passado por aproximadamente <strong>${geracoes.toLocaleString("pt-BR")}</strong> gerações. Sem contar que seria necessário guardar cada centavo.`;
            }
            else{
                resultado.innerHTML = `Você levaria <strong>${meses.toLocaleString("pt-BR")}</strong> meses, que são <strong>${anos.toLocaleString("pt-BR")}</strong> anos para juntar 1 bilhão de reais. Sua família teria passado por aproximadamente <strong>${geracoes.toLocaleString("pt-BR")}</strong> gerações. Sem contar que seria necessário guardar cada centavo.`;	
            }
        }   
    
}
