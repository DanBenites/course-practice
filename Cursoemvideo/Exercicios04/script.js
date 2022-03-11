function contar(){
    var num = document.getElementById('txtnumber')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor, informe um número!')
    }else{
        let n = Number(num.value)
        let i = 0
        tab.innerHTML=``
        for(i=0; i<=10;i++){
            let item = document.createElement('option') //Gera a tabela
            item.text = `${n} x ${i} = ${n*i}`//calcula e gera um texto neste formato
            item.value = `tab${i}`//Isso faz com q o elemento seja selecionavel
            tab.appendChild(item)//anda os valores para a tabela
        }
    }
    
    

}