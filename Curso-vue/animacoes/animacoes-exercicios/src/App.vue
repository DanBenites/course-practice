<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-3" @click="exibir = !exibir">Mostrar Mensagem?</b-button>
		<transition name="fade">
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>

		<transition name="slide">
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>
	</div>
</template>

<script>

export default {
	data(){
		return {
			msg: 'Uma mensagem para ser exibida para o usuário!',
			exibir: false
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from { transform: translateY(40px);
	opacity: 0;}
	to {transform: translateY(0);}
}
@keyframes slide-out {
	from{ transform: translateY(0);}
	to { transform: translateY(40px);
	opacity: 0;}
}

.slide-enter-active {
	animation: slide-in 2s ease-in;
}

.slide-leave-active{
	animation: slide-out 2s ease-out;
}

/*
--Transição de entrada
Os valores vão de 0 a 1. Por padrão, eles já são 1, logo, vc pode resumir o código como o exemplo acima
.fade-enter{
	opacity: 0;
}
.fade-enter-active{
	transition: opacity 2s;
}

.fade-enter-to {
	opacity: 1;
}
--Transição de saida
.fade-leave {
	opacity: 1;
}
.fade-leave-active {
	transition: opacity 2s;
}

.fade-leave-to{
	opacity: 0;
}
*/

</style>
