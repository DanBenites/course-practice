<template>
	<div id="app">
		<!-- <citacoes-item /><sobre-item /> -->
	<span>
		<button @click="componente = 'CitacoesItem'">Citações</button>
		<button @click="componente = 'SobreItem'">Sobre</button>
	</span>
	<keep-alive>
	<component :is="componente"/>
	</keep-alive>
	<!-- Digo que "componente será um component e referencio elas no botão, para que o usuario selecione
	o componete que sera exibido
	keep-alive faz com que meu componente não seja destruindo pelo ciclo de vida-->
	</div>
</template>

<script>
//import Citacoes from './components/Citacoes'
import CitacoesItem from './components/CitacoesItem.vue'
//import Sobre from './components/Sobre'
import SobreItem from './components/SobreItem.vue'

export default {
	components: { CitacoesItem, SobreItem },
	//Para alternar entre Múltiplos componentes e Componentes dinâmicos
	data(){
		return{
			componente: 'SobreItem'//A página comecerá exibindo está página mencionada
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>