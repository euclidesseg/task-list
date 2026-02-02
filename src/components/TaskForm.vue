
<!-- Srcript component -->

<script setup lang="ts">
    import { ref} from 'vue';

    
    const emit = defineEmits<{addTask:[newTask:string]}>(); // macro del compilador 
    const newTask = ref('') // ref crea una referencia reactiva en vue js newTask:{value: ''}
    const error = ref('')

    const formSubmitted = () => {
        if(newTask.value.trim()) {
            emit("addTask", newTask.value); //emitimos el valor hasta el componente padre
            newTask.value = '';
        }else{
            error.value = "la tarea no puede estar bacía"
            return
        }
    }       
</script>
<!-- Srcript component -->


<template>
    <form @submit.prevent="formSubmitted">
        <label for="">
            New Task
            <input v-model="newTask" type="text" name="new Task" :aria-invalid="!!error || undefined" @input="error = ''"> 
            <!--los dos puntos se hace para realizar referencias a variables -->
            <!-- v-model crea una referencia con el javascript cada que escribamos aquí se actualizara la variable en segundo plano -->
            <small v-if="error" id="invalid-helper">
             {{ error }}
            </small>
        </label>
        <div class="button-container">
            <button type="submit">Add</button>
        </div>
    </form>
</template>