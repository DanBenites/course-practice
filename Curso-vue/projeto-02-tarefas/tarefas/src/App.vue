<template>
	<div id="app">
		<h1>Tarefas</h1>
		<tasks-progress :progress="progress"/>
		<new-task @taskAdded ="addTask"/>
		<task-grid :tasks="tasks" @taskStateChanged="toggleTaskState" 
		@taskDeleted="deleteTask"></task-grid>
	</div>
</template>

<script>
import NewTask from './components/NewTask.vue'
import TaskGrid from './components/TaskGrid.vue'
import TasksProgress from './components/TasksProgress.vue'

export default {
  components: { TaskGrid, NewTask, TasksProgress },
	data(){
		return {
			tasks:[
				{name: 'Lavar a Louça', pending: false},
				{name: 'Comprar blusa', pending:true}
				]
		}
	},
	computed:{
		progress(){
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done/total * 100) || 0 
			/*
			total está recebendo o tamanho total de elementos em tasks
			done está recebendo o filtro da função que verifica quantas tasks não estão pendentes e retorna a quantidade
			math.round é uma função que retorna o numero inteiro arrendondado mais proximo
			tasks feitas / pelo total de tasks * 100 que é o valor maximo da porcentagem
			|| 0 como a função math retorna undefined se o valor da função chegar a 0, então...
			pedimos para a função retornar 0 em vez de undefined
			*/
		}
	},
	watch:{
		tasks: {
			deep: true,
			handler(){
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
		/*
		watch: assistindo/monitorando alterações em.. tasks
		deep: monitoramento profundo ligado
		handler(){} quando deep: true, o que ele vai monitorar profundamente
		localStorage mantém o dado gravado mesmo se o browser é fechado e reaberto.
		localStorage.setItem() para criar um novo par de chave: valor;
		JSON.stringify() converte valores em javascript para uma String  JSON
		Em resumo, está criando um arquivo local do tipo json, que terá como chave a 'tasks' e..
		receberá todos os dados através de this.tasks
		*/
	},
	methods: {
		addTask(task){
			const sameName = t => t.name === task.name //Cria uma const onde funciona como uma função arrow que verifica uma condição estrita
			const reallyNew = this.tasks.filter(sameName).length == 0 
			//reallyNew será verdadeiro caso  filtro de sameName tenha tamanho igual a 0, ou seja,
			//quando o texto passar pelo filtro, se tiver uma frase igual, ele retornaria 1, se não, 0
			if(reallyNew){
				this.tasks.push({
					name:task.name,
					pending: task.pending || true
				})
			}
		},
		deleteTask(i){
			this.tasks.splice(i,1)
		},
		toggleTaskState(i){
			this.tasks[i].pending= !this.tasks[i].pending
		}
	},
	created(){
		const json = localStorage.getItem('tasks')
		this.tasks = JSON.parse(json) || []
		/* Poderia ser também
		const array = JSON.parse(json)
		if(Array.isArray(array)){
			this.array = array
		}else{
			this.tasks=[]
		}
		.. ou ..
		this.tasks = Array.isArray(array) ? array : []
		*/
	}

}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
