<template>
  <div class="new-task">
      <input type="text" v-model="name" @keydown.enter="add" class="form-element">
      <button @click="add" class="form-element" >+</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name: ''
        }
    },
    methods: {
        add(){
            this.$emit('taskAdded', {name: this.name})
            this.name = ''
        }
    }

}
</script>

<style>
    .new-task {
        margin: 35px;
    }

    .form-element {
        outline: none;
        font-size: 2rem;
        border: 1px solid #FFF;
        padding: 5px 10px 8px;
        color:#FFF;
    }

    input.form-element{
        width: 500px;
        background: #FFF4;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element{
        text-align: center;
        border-left: none;
        background-color: rgb(6, 153, 211);
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
</style>