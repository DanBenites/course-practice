import Vue from 'vue'
import axios from 'axios'

//Instâncias do tipo Global
//axios.defaults.baseURL='https://curso-vue-61741-default-rtdb.firebaseio.com/' 
//axios.defaults.headers.common['Authorizathion'] = 'abc123' //Seria para qualquer tipo de requisição
//axios.defaults.headers.get['Accepts'] = 'application/json' //Só aceitaria requisições get se elas fossem do 'application/json'


Vue.use({
    install(Vue){
        //Vue.prototype.$http = axios //Chamada da Instância Global
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-61741-default-rtdb.firebaseio.com/',
            headers:{ "Authorizathion" : "abc123"} //Se estivesse aqui sem o get, seria do tipo global
            //     get:{ "Authorizathion" : "abc123"}
            // }
        })

        Vue.prototype.$http.interceptors.request.use((config) =>{
            // if(config.method == 'post'){
            //     config.method ='put' //Limpa todos os dados do firebase
            // }
            console.log(config.method)
            return config
        }, error => Promise.reject(error)) //error => Promise.reject(error) retorna o motivo pela qual o Promise foi rejeitado
        
        Vue.prototype.$http.interceptors.response.use(res => {
            //Antenção: Só usar esse cod caso queira trabalhar usando id numérico sequencial
            // const array=[]
            //Este for está percorrendo os dados de res, e atribuido um id com a posição deste elemento no dados de res
            // for(let chave in res.data){
            //     array.push({id: chave, ...res.data[chave]})
            // }
            // res.data = array
            return res
        }, error => Promise.reject(error))
        
    
    
    }
})