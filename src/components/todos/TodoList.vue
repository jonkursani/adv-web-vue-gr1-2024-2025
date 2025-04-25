<script setup>
import { ref, computed } from "vue";
import TodoItem from "./TodoItem.vue";
import AddTodoItem from "./AddTodoItem.vue";

// Todo list
const newTodo = ref("");
let todoId = 1;
const todos = ref([
  { id: todoId++, text: "Learn Vue", completed: true },
  { id: todoId++, text: "Learn React", completed: false },
]);
const addTodo = () => {
  // alert(newTodo.value);
  // if (newTodo.value.trim() === "") {
  //   alert("Please enter a todo.");
  //   return;
  // }

  // "" => false => !false => true
  // newTodo === '' || newTodo === null || newTodo === undefined
  if (!newTodo.value) {
    // nese ska vlere
    alert("Please enter a todo.");
    return;
  }

  todos.value.push({
    id: todoId++,
    text: newTodo.value,
    completed: false,
  });

  newTodo.value = ""; // clear the input
};

const removeTodo = (id) => {
  // alert(id);

  if (confirm("Are you sure you want to delete this todo?")) {
    // kthemi te gjitha elementet qe nuk jane te barabarta me id qe e kemi ne parameter
    todos.value = todos.value.filter((todo) => todo.id !== id);

    // const index = todos.value.findIndex((todo) => todo.id === id);
    // todos.value.splice(index, 1);
  }
};

const hideCompleted = ref(false);
const filteredTodos = computed(() => {
  if (hideCompleted.value) {
    return todos.value.filter((todo) => !todo.completed);
  } else {
    return todos.value;
  }
});
</script>

<template>
  <h4>Todo List</h4>

  <!-- <AddTodoItem /> -->
  <!-- defineModel na mundeson me perdor v-model -->
  <add-todo-item v-model="newTodo" @add-todo="addTodo" />

  <!-- {{ newTodo }} -->

  <ul v-if="todos.length > 0">
    <todo-item v-for="todo in filteredTodos" :key="todo.id" :todo="todo" @remove-todo="removeTodo" />
  </ul>
  <p v-else>No todos, add one</p>

  <button @click="hideCompleted = !hideCompleted">{{ hideCompleted ? "Show all" : "Hide completed" }}</button>
</template>

<style scoped></style>
