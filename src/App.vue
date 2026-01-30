
<script setup lang="ts">
    import { Ref, ref } from 'vue';
    import TaskForm from './components/TaskForm.vue';

    const message: Ref<string> = ref('Task App');

</script>

<template>
  <main>
    <h1>{{ message }}</h1>
    <TaskForm />
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
  }
  .button-container button{
    max-width: 150px;
  }
</style>
