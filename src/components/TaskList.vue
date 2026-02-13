<script setup lang="ts">
    import type { Task } from '@/interfaces/task.interface';


    const props = defineProps<{ tasks: Task[] }>()

    const emits = defineEmits<{ toogleDone: [id: string], removeTask: [id: string] }>();
    //toogleDone: [id: string] indica que toogleDone recibe un parametro que se llama id y es de tipo string
    //removeTask: [id: string] indica que removeTask recibe un parametro que se llama id y es de tipo string
    /* si quiero emitir un evento sin informacion lo hago de la siguiente manera, {seria toogle: []} */
</script>

<template>
    <TransitionGroup name="task-list" tag="div">
        <article v-for="task in props.tasks" :key="task.id" class="task">
            <label>
                <input @input="emits('toogleDone', task.id)" type="checkbox" :checked="task.done">
                <span :class="{ done: task.done }">{{ task.title }}</span>
            </label>
            <button @click="emits('removeTask', task.id)">Eliminar</button>
            <!-- Emite el evento 'removeTask' con el parametro id que es de tipo string -->
        </article>
    </TransitionGroup>
</template>

<style>
.task-list {
    margin-top: 1rem;
}

.task {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.done {
    text-decoration: line-through;
}

.task-list-enter-active,
.task-list-leave-active {
    transition: all 0.5s ease;
}

.task-list-enter-from,
.task-list-leave-to {
    opacity: 0;
    transform: translateX(300px);
}
</style>