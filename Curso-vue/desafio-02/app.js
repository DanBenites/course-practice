new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },
    methods:{
        exibirAlerta(event){
            alert('Esse é um Alerta!')
        },
        escutarTecla(event){
            this.valor = event.target.value
        }
    }
})