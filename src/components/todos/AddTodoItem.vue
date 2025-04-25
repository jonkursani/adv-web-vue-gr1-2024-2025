<script setup>
// per me perdor v-model ne komponenten e krijuar na duhet me perdor defineModel
const newTodo = defineModel({ type: String });

const emit = defineEmits(["addTodo"]);

const onAddTodo = () => {
  emit("addTodo");
};
</script>

<template>
  <input type="text" v-model.trim="newTodo" @keyup.enter="onAddTodo" />
  <button @click="onAddTodo">+ Add</button>
</template>

<style scoped></style>
