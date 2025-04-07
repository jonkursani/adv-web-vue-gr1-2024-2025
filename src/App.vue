<!-- Single file component (SFC) -->

<!-- JavaScript (Logic) -->
<!-- Script setup composition api -->
<script setup>
import { reactive, ref } from "vue";

const msg = ref("Hello from Vue.");
const vueLink = ref("https://vuejs.org/");
const id = ref(1);
const isBtnDisabled = ref(false);

const toggleButton = () => {
  console.log(isBtnDisabled); // { value: false }
  // isBtnDisabled = false
  // isBtnDisabled: { value: false }
  console.log(isBtnDisabled.value); // false

  // sa here qe jeni ne pjesen e skriptes duheni me perdor .value
  isBtnDisabled.value = !isBtnDisabled.value;
};

function randomText() {
  return Math.random() > 0.5 ? "Drink coffe" : "Go to fitness";
}

const isSeen = ref(true);

const onSubmit = (event) => {
  // event.preventDefault(); // Prevent the default form submission

  alert("Form submitted!");
};

const name = ref("");
const confirmedName = ref("");
const confirmName = (e) => {
  // e.target.key
  // target eshte elementi qe e ka shkaktu eventin
  confirmedName.value = e.target.value;
};

const counter = ref(0); // { value: 0 }

const decrement = (num) => {
  // counter.value = counter.value - 1;
  // counter.value = counter.value - num;
  counter.value -= num;
};

const increment = (num) => {
  // counter.value++;
  counter.value = counter.value + num;
};

// reactive dallon prej ref sepse reactive pranon vetem objekte jo vlera primitive
// ne script skeni nevoj me perdor .value
const store = reactive({
  counter: 0,
}); // { counter: 0 }

const userId = ref(1); // { value: 1 }
const userName = ref("Filan"); // { value: "Filan" }
const userAge = ref(20); // { value: 20 }
const userRef = ref({
  id: 1,
  name: "Test",
}); // { value: { id: 1, name: "Test" } }

// userRef.value.id;

const user = reactive({
  id: 1,
  name: "Filan",
  age: 20,
}); // { id: 1, name: "Filan", age: 20 }

// user.id;
</script>

<!-- HTML (Structure) -->
<template>
  <h1>{{ msg }}</h1>

  <!-- Attribute Bindings -->
  <!-- <h1>Check vue <a v-bind:href="vueLink">docs</a></h1> -->
  <h1>Check vue <a :href="vueLink">docs</a></h1>
  <h1 :id="`emp-${id}`">Emp: {{ id }}</h1>
  <button :disabled="isBtnDisabled">Disabled button</button>
  <!-- Directives (v-on, v-bind, v-if) -->
  <!-- <button v-on:click="isBtnDisabled = !isBtnDisabled">Toggle disabled</button> -->
  <!-- <button @click="isBtnDisabled = !isBtnDisabled">Toggle button</button> -->
  <button @click="toggleButton">Toggle button</button>
  <!-- {{ Math.random() > 0.5 ? "Drink coffe" : "Go to fitness" }} -->
  {{ randomText() }}
  <p v-if="isSeen">Now paragraph is seen</p>
  <button @click="isSeen = !isSeen">{{ isSeen ? "Hide" : "Show" }} paragraph</button>

  <!-- .prevent => modifier -->
  <form @submit.prevent="onSubmit">
    <input type="text" />
    <button type="submit">Submit</button>
  </form>

  <br />

  <input type="text" placeholder="Enter your name" :value="name" @keyup.enter="confirmName" />
  <input type="text" placeholder="Confirmed name" :value="confirmedName" disabled />

  <!-- Reactivity -->
  <!-- <button @click="counter--">-</button> -->
  <p>Ref counter</p>
  <button @click="decrement(1)">-</button>
  <button @click="decrement(5)">-5</button>
  {{ counter }}
  <!-- <button @click="counter++">+</button> -->
  <button @click="increment(1)">+</button>
  <button @click="increment(10)">+10</button>

  <p>Reactive counter</p>
  <button @click="store.counter--">-</button>
  {{ store.counter }}
  <button @click="store.counter++">+</button>

  <p>UserId: {{ user.id }}</p>
  <p>Name: {{ user.name }}</p>
  <p>Age: {{ user.age }}</p>
</template>

<!-- CSS (Style) -->
<!-- Scoped ky CSS aplikohet vetem ne kete file -->
<style scoped></style>
