import Vue from 'vue'
//importa os dados de barramento para onde é criado a primeira main,logo, é como se esses dados fossem gerados lá
export default new Vue({
    methods:{
        setUsuarioSelecionado(usuario){
            this.$emit('usuarioSelecionado', usuario)
        },
        onUsuarioSelecionado(callback){
            this.$on('usuarioSelecionado', callback)
        }
    }
})