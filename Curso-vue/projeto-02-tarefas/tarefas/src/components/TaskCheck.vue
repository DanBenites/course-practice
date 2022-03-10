<template>
  <div @click="$emit('taskStateChanged', task)" 
  class="task-check" :class="stateClass">
      <span class="close" @click.stop="$emit('taskDeleted', task)">x</span>
      <p>{{ task.name}} </p>
  </div>
</template>

<script>
export default {
    //Espero receber uma propriedade chamada task do tipo objeto e que required seje true
    props: {
        task: { type: Object, required: true}
    }, computed:{
        //Verifica o estado da tarefaa, se ela estiver pendente, marca como 'pending', caso contrario, sera 'done'
        stateClass(){
            return {
                //pending e done serão classes css, cujo estado será refletido lá
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }
}
</script>

<style>
    .task-check {
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 1.5rem;
        font-weight: 200;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pending {
        border-left: 12px solid rgb(165, 0, 0);
        background-color:  rgb(233, 41, 41);
    }

    .done{
        color: rgba(255, 255, 255, 0.863);
        border-left: 12px solid green;
        background-color: rgb(21, 253, 21);
        text-decoration: line-through;
    }
    .pending .close{
        background-color: red;
    }
    .done .close{
        background-color: green;
    }

    .close{
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    height: 20 px;
    width: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    }
</style>