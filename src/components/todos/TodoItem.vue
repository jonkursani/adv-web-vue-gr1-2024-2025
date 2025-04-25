<script setup>
defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["removeTodo"]);
</script>

<template>
  <li>
    <input type="checkbox" v-model="todo.completed" />
    <span :class="{ completed: todo.completed }">{{ todo.id }}: {{ todo.text }}</span>
    <button @click="emit('removeTodo', todo.id)">X</button>
  </li>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  color: green;
}
</style>
