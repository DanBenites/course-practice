import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Menu from './components/template/Menu.vue'

import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'

//Registrando o Router no Vue. Isso siginica que posso acessar esse plugins das paginas filhas de main usando
//classes, funções e prefixos que estiverem presentes nesta
Vue.use(Router)//função construtora

//Definições que terão na rota. New Router está criando apartir de uma função contrutora, passando esses objetos   
export default new Router({
    routes: [{
        path: '/',
        // component: Inicio
        components:{
          default: Inicio,
          menu: Menu
        } 
    },{
        path: '/usuario', // :id estou fazendo uma passagem de parametros
        components:{
            default: Usuario,
            menu: Menu
        },
        props: true, //Estou informando que os parametros de id serão passadas para o props
        children: [
            { path: '', component: UsuarioLista},
            { path: ':id', component: UsuarioDetalhe, props: true},
            { path: ':id/editar', component: UsuarioEditar, props: true,
                name:'editarUsuario'},
        ]
    },{
        //Quando o usuario tentar acessar qualquer pagina não registrada, ele sera redirecionado para o inicio
        path:'*',
        redirect: '/'
    }]
})