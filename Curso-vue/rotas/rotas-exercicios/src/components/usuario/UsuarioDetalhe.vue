<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código:</strong> {{id}}</p>
        <!--:to="`/usuario/${id}/editar`" -->
        <router-link tag="button" primario 
            :to="{name: 'editarUsuario', params: {id},
            query:{completo: true, lingua: 'pt-br'} }">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id'], 

    /* Essa seria o código nescessário para navegar entre as paginas usando id sem o props
     data(){
            return{
                id: this.$route.params.id
            }
    },
    watch:{
        //Agora se tornou uma propriedade reativa, ou seja, ele vê qual era o valor antigo e muda para o novo
        $route(to){
            this.id = to.params.id
        }
     }, */

}
</script>

<style>

</style>