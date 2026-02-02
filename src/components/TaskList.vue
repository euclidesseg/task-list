<script setup lang="ts">
    import type { Task } from '@/interfaces/task.interface';


    const props = defineProps<{ tasks: Task[] }>()

    const emits = defineEmits<{ toogleDone: [id: string], removeTask: [id: string] }>();

</script>

<template>
    <TransitionGroup name="task-list" tag="div">
        <article v-for="task in props.tasks" :key="task.id" class="task">
            <label>
                <input @input="emits('toogleDone', task.id)" type="checkbox" :checked="task.done">
                <span :class="{ done: task.done }">{{ task.title }}</span>
            </label>
            <button @click="emits('removeTask', task.id)">Eliminar</button>
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