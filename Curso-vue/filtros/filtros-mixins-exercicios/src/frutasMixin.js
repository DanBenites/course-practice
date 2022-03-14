export default {
    data(){
        return{
            fruta: '',
            frutas: ['banana', 'abacaxi', 'maça', 'laranja']
        }
    },
    methods:{
        add(){
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}