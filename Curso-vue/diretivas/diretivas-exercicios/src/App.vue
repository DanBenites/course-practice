<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Essa é uma diretiva usando v-text'"></p>
		<hr>
		<p v-html="'Essa é uma diretiva usando <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque="'lightgreen'">Usando diretiva personalizada v-destaque</p>
		<!-- <p v-teste:argumento.mod1.mod2.mod3="'valor'"></p> -->
		<p v-destaque:fundo="'lightblue'">Usando diretiva personalizada com argumento</p>
		<p v-destaque="'red'">Usando diretiva personalizada com argumento exemplo 2</p>
		<p v-destaque:fundo.atrasar="cor">Usando diretiva personalizada com modificador</p>
		<hr>
		<p v-destaque-local:fundo.atrasar="'purple'">Usando diretiva personalizada local</p>
		<p v-destaque-local:fundo.atrasar.alternar="cor">Usando diretiva personalizada com multiplos modificadores</p>
		<hr>
		<p v-destaque-local-complexo:fundo.atrasar.alternar="{cor1: 'green', cor2:'red', atrasar:2000, intervalo: 200 }">Diretivas Complexas</p>
	
	</div>
</template>

<script>
export default {
	data(){
		return{
			cor: 'lightyellow'
		}
	},
	directives:{
		'destaque-local':{
				bind(el, binding){
					const aplicarCor = cor =>{
						if(binding.arg === 'fundo'){
							el.style.backgroundColor = cor
						}else{
							el.style.color = cor
						}
					}

					let atrasar = 0
					if(binding.modifiers['atrasar']) atrasar = 3000

					const cor1 = binding.value
					const cor2 = 'orange'
					let corAtual = cor1


					setTimeout(() => {
						if(binding.modifiers['alternar']){
							setInterval(() =>{
								corAtual = corAtual === cor1 ? cor2 : cor1
								aplicarCor(corAtual)
							}, 1000)
						}else{
							aplicarCor(binding.value)
						}
					},atrasar)
			}
		},
		'destaque-local-complexo':{
			bind(el, binding){
					const aplicarCor = cor =>{
						if(binding.arg === 'fundo'){
							el.style.backgroundColor = cor
						}else{
							el.style.color = cor
						}
					}

					let atrasar = 0
					if(binding.modifiers['atrasar']) atrasar = binding.value.atrasar

					const cor1 = binding.value.cor1
					const cor2 = binding.value.cor2
					let corAtual = cor1


					setTimeout(() => {
						if(binding.modifiers['alternar']){
							setInterval(() =>{
								corAtual = corAtual === cor1 ? cor2 : cor1
								aplicarCor(corAtual)
							}, binding.value.intervalo)
						}else{
							aplicarCor(binding.value.cor1)
						}
					},atrasar)
			}
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
	font-size: 2.5rem;
}
</style>
