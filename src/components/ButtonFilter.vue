
<script setup lang="ts">
import type { FilterTypeTask } from '@/interfaces/task.interface';

    const props = defineProps<{filter:FilterTypeTask, currentFilter:FilterTypeTask}>()

    const emits = defineEmits<{setFilter:[filter:FilterTypeTask]}>()

</script>
<template>
      <button class="secondary"
      @click="emits('setFilter', props.filter)" 
      :class="{contrast : props.currentFilter === props.filter}"

      >{{ props.filter }}</button>
</template>

<style>
    button{
        text-transform: capitalize;
    }
</style>
<!-- 
/* ============================================================
   🧩 <script setup>
   ------------------------------------------------------------
   Sintaxis especial de Vue 3 (Composition API simplificada).
   Todo lo que declares aquí queda disponible automáticamente
   en el template, sin necesidad de "return".

   Es una forma más directa y moderna de crear componentes.
   ============================================================ */


/* ============================================================
   📥 defineProps()
   ------------------------------------------------------------
   Macro de Vue que declara las PROPS del componente.
   Indica qué datos puede recibir desde el componente padre.

   Vue usa esto para:
   ✔ validar
   ✔ tipar (con TypeScript)
   ✔ hacer las props reactivas
   ============================================================ */


/* ============================================================
   📤 defineEmits()
   ------------------------------------------------------------
   Macro de Vue que define los EVENTOS personalizados que este
   componente puede emitir hacia su padre.

   Vue usa esto para:
   ✔ validar nombres de eventos
   ✔ tipar los parámetros
   ✔ integrar el sistema de eventos entre componentes
   ============================================================ */
-->
