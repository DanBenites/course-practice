var vetor = []

function contar(){
    var num = document.getElementById('txtnumber')
    var tab = document.getElementById('seltab')
    var test = document.getElementById('test')
    
    if(num.value.length == 0){
        window.alert('Por favor, informe um número!')
    }else if(num.value > 100 || num.value<0){
        window.alert('Número Inválido! Insira um valor válido.')
    }else{
        let n = Number(num.value)
        if(verifica(n)){
            vetor.push(n)
            let item = document.createElement('option')
            item.text = `Número ${n} adicionado`
            tab.appendChild(item)
        }else{
            test.innerHTML=`Esse número já foi adicionado!`
        }
    }
    
}

function verifica(n){
    if(vetor.length == 0){
        var tab = document.getElementById('seltab')
        tab.innerHTML= ''
    }
    for(var i=0; i < vetor.length; i++){
        if(n == vetor[i]){
            return false
        }
    }
    return true
}

function finalizar(){
    test.innerHTML=`Ao todo, temos ${vetor.length} números cadastrados.`
    let item =[3] 

    //Maior número
    let maior= vetor.reduce(function(a, b){ 
        return Math.max(a, b)
    }, -Infinity)
    item[0] = document.createElement('option')
    item[0].text = `O maior número é ${maior}`
    test.appendChild(item[0])

    //Menor número
    let menor = vetor.reduce(function(a, b){ 
        return Math.min(a, b)
    }, +Infinity)
    item[1] = document.createElement('option')
    item[1].text = `O menor número é ${menor}`
    test.appendChild(item[1])

    //Somando os números
    let soma = vetor.reduce(function(soma,i){
        return soma + i
    })
    item[2] = document.createElement('option')
    item[2].text = `Somando todos os valores, temos ${soma}`
    test.appendChild(item[2])

    //Média dos números
    let media = soma / vetor.length
    item[3] = document.createElement('option')
    item[3].text = `A média de todos os valores é ${media}`
    test.appendChild(item[3])
}