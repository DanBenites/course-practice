<template>

    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <!--<p>Nome do Usuário: <strong>{{ nome }}</strong></p> -->
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <!-- Para retornar a alteração para a pagina PAI, devemos mandar($emit) um evento(event)
        informando a tag(nomeMudou) e quem recebera do outro lado @nomeMudou -->
        <button @nomeMudou="$emit('nomeMudou', $event.target.value)" @click="reiniciarNome()">reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome(Callback)</button>
    </div>
</template>

<script>
export default {
    //props: ['nome']
    props:{
        nome:{
            type: String,
            //required: true, //Obrigo que a funcao deva receber o nome para o component funcionar
            default: 'Anônimo' //Caso não receba nome, ele define como Anônimo
            /*
            default: function(){ //Outro tipo de declaracao usando default
                return Array(5).fill(0).join(',')
            }
            */
           
        },
        reiniciarFn:Function,
        idade: Number
        
    },
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.$emit('nomeMudou', 'Pedro')//Comunicação indireta por evento
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
