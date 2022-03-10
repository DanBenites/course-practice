<template>
    <div class="citacao">
        <!--{{ texto }} Recebia o texto de props-->
        <slot name="Autor"></slot>
        <slot name="Texto"></slot>
        <slot name="Fonte"></slot>
    </div>
</template>

<script>
export default {
    //props:['texto'] recebedo de citações item o texto direto na box
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
