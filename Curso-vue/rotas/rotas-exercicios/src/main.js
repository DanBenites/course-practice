import './style.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  //No mode: 'history' (comumente usado), se deve configurar o servidor para que ele possa interpretar essas
  //requisições e não dê erro na hora de carregar a página
  mode: 'hash', //No curso vamos usar o modo hash para não gerar problema em nossas requisições
  router,
  render: h => h(App),
}).$mount('#app')
