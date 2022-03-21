<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr>
        <router-view/>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        irParaInicio(){
            //this.$router.push('/') //Também pode ser esse
            this.$router.push({ path: '/'})
        }
    }
}
</script>

<style>

</style>