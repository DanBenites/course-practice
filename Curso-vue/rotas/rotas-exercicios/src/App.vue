<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<router-view name="menu"></router-view>
		<transition mode="out-in"
			enter-active-class="animated fadeInLeft"
			leave-active-class="animated fadeOut"
			>
			<router-view/>
		</transition>
	</div>
</template>

<script>
//import Menu from './components/template/Menu.vue' //Foi importado para router.js, logo, não preciso mais dessa importação

export default {
	// components: { Menu } //Foi importado para router.js, logo, não preciso mais dessa declaração
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
