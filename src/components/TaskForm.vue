
<!-- Srcript component -->

<script setup lang="ts">
    import { Ref, ref } from 'vue';

    
    const newTask: Ref<string> = ref('') // ref crea una referencia reactiva en vue js newTask:{value: ''}

    const formSubmitted = () => {
        console.log(newTask.value);
    }       
</script>
<!-- Srcript component -->


<template>
    <form @submit.prevent="formSubmitted">
        <label for="">
            New Task
            <input v-model="newTask" type="text" name="new Task">
            <!-- n-model crea una referencia con el javascript cada que escribamos aquí se actualizara la variable en segundo plano -->
        </label>
        <div class="button-container">
            <button type="submit">Add</button>
        </div>
    </form>
</template>