
<script setup lang="ts">
    import { computed, ref } from 'vue';
    import TaskForm from './components/TaskForm.vue';
    import type { FilterTypeTask, Task } from './interfaces/task.interface';
    import TaskList from './components/TaskList.vue';
    import ButtonFilter from './components/ButtonFilter.vue';


    const completedTask = computed(() =>{
      return tasks.value.reduce((count,task) => {
          return task.done? count+1:count
      },0)
    })

    const filteTask = computed(() =>{
      switch(filter.value){
        case "all":
            return tasks.value
        case 'todo':
          return tasks.value.filter(task => task.done)
        case 'done':
          return tasks.value.filter(task => !task.done)
      }
      return tasks.value
    })
    const message = ref<string>('Task App');

    const tasks = ref<Task[]>([]);
    // ref es un estado reactivo que cuando cambia → la UI se vuelve a renderizar.

    const filter = ref<FilterTypeTask>('all');

    const addTask = (newTask:string) =>{
      tasks.value.push({
        id: crypto.randomUUID(),
        title: newTask,
        done: false
      });
    }
    function toogleDone(id:string){
      const task = tasks.value.find((task) => task.id === id);
      if(task){
        task.done = !task?.done;
      }
    }
  function removeTask(idTask:string){
    tasks.value = tasks.value.filter(task => task.id !== idTask)
  }
  function setFilter(taskFilter:FilterTypeTask){
    filter.value = taskFilter;
    console.log(filter.value)
  }
</script>

<template>
  <main>
    <h1>{{ message }}</h1>
    <TaskForm @add-task="addTask"/>
    <h3 v-if="!tasks.length">Agrega una tarea para comenzar</h3>
    <h3 v-else>{{completedTask}}/{{ tasks.length }} tareas completadas</h3>
    <div v-if="tasks.length > 0" class="button-container">
      <ButtonFilter filter="all" @set-filter="setFilter" :current-filter="filter"></ButtonFilter>
      <ButtonFilter filter="todo" @set-filter="setFilter" :current-filter="filter"></ButtonFilter>
      <ButtonFilter filter="done" @set-filter="setFilter" :current-filter="filter"></ButtonFilter>
    </div>
    <TaskList :tasks = "filteTask" @toogle-done="toogleDone" @remove-task="removeTask"></TaskList>
</main>
</template>

<style>
  main {
    margin: 0 auto;
    max-width: 800px;
  }

  .button-container {
    margin-top: 1rem;
    display: flex;
    justify-content: end;
    gap: .5rem;
    padding: .5rem 0;
  }
  .button-container button{
    max-width: 150px;
  }
</style>
