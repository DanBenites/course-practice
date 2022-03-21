<template>
  <nav class="menu">
      <ul>
        <!--O router-lik Indica a rota de destino do link. Quando clicado, o valor do 'to' prop será passado para 'router.push()' internamente, que chamara a rota por "baixo dos panos" -->
        <router-link to='/' tag="li" active-class="active" exact>
            <a>Início</a></router-link>
        <router-link to='/usuario' tag="li" active-class="active">
            <a>Usuários</a></router-link>
        
      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>