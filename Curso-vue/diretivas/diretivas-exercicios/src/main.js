import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque',{
	//Apesar de no curso o não uso de binding e vnode não apresentar erro, provavelmente na atualização
	//faz com que apresente erro por não definição: bind(el, binding, vnode)
	bind(el, binding){
		//el.style.backgroundColor = 'lightgreen'
		//el.style.backgroundColor = binding.value
		
		let atrasar = 0
		if(binding.modifiers['atrasar']) atrasar = 3000


		setTimeout(() => {
			if(binding.arg === 'fundo'){
				el.style.backgroundColor = binding.value
			}else{
				el.style.color = binding.value
			}
		},atrasar)
	}

})


new Vue({
	render: h => h(App),
}).$mount('#app')
