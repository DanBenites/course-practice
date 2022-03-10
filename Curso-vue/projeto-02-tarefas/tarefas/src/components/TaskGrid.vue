<template>
    <div class="task-grid">
        <!--task: é atributo do laço, poderia ser i, j. tasks é o vetor que o laço está percorrendo
        task.name é a chave primaria, logo, o proprio programa impedira que exista outra igual-->
        <template v-if="tasks.length">
            <task-check v-for="(task, i) in tasks" :key="task.name"
            @taskDeleted="$emit('taskDeleted', i)"
            @taskStateChanged="$emit('taskStateChanged', i)"
            :task="task">
            </task-check>
        </template>
        <p v-else class="no-task">Sua tarefas estão em dia :)</p>
    </div>
  
</template>

<script>
import TaskCheck from "./TaskCheck.vue"

export default {
  components: { TaskCheck },
    props:{
        tasks: { type: Array, required: true}
    }
        
}
</script>

<style>
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task-check{
        margin: 10px;
    }

    .no-task {
        color: #aaa;
        font-size: 1.7rem;
    }
</style>