<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" 
					v-model="usuario.nome" placeholder="Informe o Nome">
				</b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg" 
					v-model="usuario.email" placeholder="Informe o E-mail">
				</b-form-input>
			</b-form-group>
			<hr>
			<!--Size:"lg" é uma class de bootstrap, que é abreviação para large-->
			<b-button @click="salvar"
				size="lg" variant="primary">Salvar</b-button><!--Se estivesse encapsulado dentro de um form, poderia usar @click.prevent, para prevenir um envio acidental-->
			<b-button @click="obterUsuarios" size="lg" variant="success"
				class="ml-2"> Obter Usuarios</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong>{{usuario.nome}}<br>
				<strong>E-mail: </strong>{{usuario.email}}<br>
				<strong>ID: </strong>{{id}}<br> <!--Posso usar usuario.id para obter o id verdadeiro dele -->
				<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2" @click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
//import axios from 'axios' caso quisesse acessar o axios localmente

export default {
	data(){
		return{
			usuarios:[],
			id: null,
			usuario: {
				nome:'',
				email:''
			}
		}
	},
	methods: {
		//Limpa os dados que estão nos campos de formularios
		limpar(){
			this.usuario.nome=''
			this.usuario.email=''
			this.id=null
		},
		carregar(id){
			this.id = id
			this.usuario = { ...this.usuarios[id]}
		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`)
			.then(() => {this.limpar(),this.obterUsuarios()})
		},
		salvar(){
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario).then(() => this.limpar())
		},
		obterUsuarios(){
			//$htytp.get('https://curso-vue-61741-default-rtdb.firebaseio.com/')... Caso fosse acessar o axios localmente
			this.$http.get('usuarios.json').then(res =>{
				this.usuarios = res.data
			})
			//this.$http.defaults.headers.common['Authorization'] = 'abc123' //Essa instância que seria global só será chamada se essa função for chamada
		}
	}


	// created(){
	// 	this.$http.post('usuarios.json',{
	// 		nome: 'Maria',
	// 		email: 'maria_maria@email.com'
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
