<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p> O nome do usuário é: {{ nome }} </p>
        <p>Idade: {{idade}} </p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <!--Fazendo uma comunicação Indireta com Eventos 
            @nomeMudou="nome = $event" //faz com que o nome receba a alteração de evento vindo da comunicação indireta
            -->
            <app-usuario-info 
            :nome="nome"
            :idade="idade"
            @nomeMudou="nome = $event"
            :reiniciarFn="reiniciarNome"
            />
            <app-usuario-editar 
            :idade="idade"
            @idadeMudou="idade = $event"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return{
            nome:'Pedro Ligeirinho',
            idade: 25
        }
    },
    methods:{
        alterarNome(){
            this.nome='Ana Silva'
        },
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
