<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <!-- {{ numero }} {{ indice }}
        {{ citacoes[indice].texto }}
        <citacao-box :texto="citacoes[indice].texto">
            </citacao-box> Aqui está sendo passado através de um props -->
        
        <!-- Esses dados serão transmitidos para um slot-->
        <citacao-box>
            <h1 slot="Autor"> {{ citacoes[indice].autor }} </h1>
            <p slot="Texto"> {{ citacoes[indice].texto }} </p>
            <h6 slot="Fonte"> {{ citacoes[indice].fonte }} </h6>
        </citacao-box>

    </div>
</template>

<script>
import CitacaoBox from './CitacaoBox.vue'

export default {
    components: { CitacaoBox },
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    },
    created(){
        console.log('created')
    },
    destroyed(){
        console.log('destroyed')
    },
    activated(){
        console.log('activated')
    },
    deactivated(){
        console.log('deactivated')
    }
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
