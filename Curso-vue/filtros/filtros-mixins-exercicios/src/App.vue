<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ usuarioLogado}}</p>
		<p>{{cpf | cpf | inverter}}</p>
		<hr>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
            <input type="text" v-model="fruta" @keydown.enter="add">
        </ul>
		<frutas-array/>
	</div>
</template>

<script>
import frutasMixin from './frutasMixin.js'
import FrutasArray from './FrutasArray.vue'
import usuarioMixin from './usuarioMixin.js'

export default {
  components: { FrutasArray },
  mixins:[frutasMixin, usuarioMixin],
	/*Para o caso de filtros, os valores devem ser do tipo string. 
	Vc pode forcar que os valores sejam deste tipo usando `$valor` no lugar onde hà valor.'algumacoisa' */
	filters:{
		cpf(valor){
			const arr = valor.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
	data(){
		return{
			cpf: '60070080090',
			//frutas:['abacate'] o que está dendo da página tem prioridade sobre o mixin
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
