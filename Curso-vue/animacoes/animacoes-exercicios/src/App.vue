<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		
		<b-button variant="primary" class="mb-3" @click="exibir = !exibir">Mostrar Mensagem?</b-button>
		<transition name="fade" appear><!--appear aplica as transições assim que a página for carregada-->
			<!--	<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
			v-show no lugar de v-if também seria suportado. A diferença é que o v-show suportaria condições simples. Se condições mais elaboradas, permaneça com v-if-->
		</transition>
		<!--
		<transition name="slide" appear>
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>

		<transition
		enter-active-class="animate__animated animate__bounce"
		leave-active-class="animate__animated animate__shakeX">
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition> -->
<!-- 
		<hr>
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name="tipoAnimacao" mode="out-in"><!--mode="out-in" Primeiro o elemento ira sair, para o proximo poder entrar
			<b-alert variant="info" show v-if="exibir" key="info">{{msg}}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{msg}}</b-alert>
		</transition>

		<hr>
		<b-button @click="exibir2 = !exibir2">Alternar</b-button>
		<transition
			@before-enter="beforeEnter"
			@enter="enter"
			@before-leave="beforeLeave"
			@leave="leave">
			<!-- @after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div v-if="exibir2" class="caixa"></div>
		</transition> -->

		<hr>
		<b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>
		<transition-group name="slide">
			<b-list-group v-for="(aluno,i) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(i)">{{aluno}} </b-list-group-item>
			</b-list-group>
		</transition-group>



	</div>
</template>

<script>

export default {
	data(){
		return {
			alunos:['Pedro Ligeirinho', 'Ana Luisa', 'Roberto', 'Jônathan Schutz Kronbauer'],
			msg: 'Uma mensagem para ser exibida para o usuário!',
			exibir: false, //Só está true para vizualizar o funcionamento de appear
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase: 0
		}
	},
	methods:{
		adicionarAluno(){
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno(indice){
			this.alunos.splice(indice, 1)
		},
		animar(el, done, sinal){
			let rodada= 1
			const temporizador = setInterval(() =>{
				const novaLargura= this.larguraBase +(sinal ? -rodada * 10 : rodada *10) 
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30){
					clearInterval(temporizador)
					done()//Done é nescessário para o javascript entender que a transição terminou
				}
			},20)
		},
		beforeEnter(el){
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done){
			this.animar(el,done, false)
		},
		// afterEnter(el){
		// 	console.log('afterEnter')
		// },
		// enterCancelled(){
		// 	console.log('enterCancelled')
		// },
		beforeLeave(el){
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done){
			this.animar(el,done, true)
		},
		// afterLeave(el){
		// 	console.log('afterLeave')
		// },
		// leaveCancelled(){
		// 	console.log('leaveCancelled')
		// },
		
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
.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: firebrick;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from { transform: translateY(40px);
	/*opacity: 0;*/}
	to {transform: translateY(0);}
}
@keyframes slide-out {
	from{ transform: translateY(0);}
	to { transform: translateY(40px);
	/*opacity: 0;*/}
}

.slide-enter-active {
	animation: slide-in 2s ease-in;
	transition: opacity 2s;
}

.slide-leave-active{
	position: absolute;
	width: 98%;
	animation: slide-out 2s ease-out;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to { 
	opacity: 0;
}
.slide-move {
	transition: transform 1s;
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
