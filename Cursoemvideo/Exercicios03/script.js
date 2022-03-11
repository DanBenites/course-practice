function contar(){
     
     var init = document.getElementById('txtini')
     var fim = document.getElementById('txtfim')//document.querySelector('div#res')
     var passo = document.getElementById('txtpas')
     var result = document.getElementById('res')

    if(passo.value <= 0){//Caso passo seja zero
        window.alert('[ERRO] - O passo inválido. Sendo substituido pelo valor 1!')
        passo = 1
    }
    if(init.value == NaN || init.value == ''){
        result.innerHTML=`Dados Inválidos`
    }else if(fim.value == NaN || fim.value == ''){//verifica se é vazio ou nulo
        result.innerHTML=`Dados Inválidos`
    }else{ //Contando do inicio até fim
        result.innerHTML = `Contando:<br>`
        let i = Number(init.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(f > i){
            for(let j = i; j<= f; j+= p){
                result.innerHTML+= `${j} \u{1F449}`// \u{code} é o comando javascript para add figuras ou caracteres especiais por comando
            }
        }else{
            for(let j = i; j>= f; j-= p){
                result.innerHTML+= `${j} \u{1F449}`
            }
        }
        result.innerHTML+=`\u{1F3C1}`        

    }

}