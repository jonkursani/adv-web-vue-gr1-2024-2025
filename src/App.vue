<!-- Single file component (SFC) -->

<!-- JavaScript (Logic) -->
<!-- Script setup composition api -->
<script setup>
import { computed, reactive, ref } from "vue";
import Detyra1 from "@/components/detyra/Detyra1.vue";

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

// computed properties
const author = reactive({
  name: "John Doe",
  books: [
    { title: "Book 1", year: 2020 },
    { title: "Book 2", year: 2021 },
  ],
});

const hasPublishedBooks = computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});

const randomTextComputed = computed(() => {
  return Math.random() > 0.5 ? "Drink coffe" : "Go to fitness";
});

const btnText = computed(() => {
  return isSeen.value ? "Hide" : "Show";
});

// Class and style binding
const isActive = ref(true);
const hasError = ref(false);
const classObject = reactive({
  // css: variabla ne vue (script)
  active: true,
  "text-danger": false,
});

const isCompleted = ref(false);
const classObjectComputed = computed(() => {
  return {
    completed: isCompleted.value,
    // completed: isCompleted.value === true
    "text-danger": !isCompleted.value, // && hasError.value,
    // 'text-danger': isCompleted.value === false
  };
});

const activeClass = ref("active");
const errorClass = ref("text-danger");

// style binding
const redColor = ref("red");
const uppercase = ref("uppercase");
const styleObject = reactive({
  color: "indigo",
  textTransform: "uppercase",
  fontSize: "20px",
});
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
  <!-- <button @click="isSeen = !isSeen">{{ isSeen ? "Hide" : "Show" }} paragraph</button> -->
  <button @click="isSeen = !isSeen">{{ btnText }} paragraph</button>

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

  <!-- Computed properties -->
  <!-- <p>Has published books: {{ author.books.length > 0 ? "Yes" : "No" }}</p> -->
  <p>Has published books: {{ hasPublishedBooks }}</p>
  <p>Random text computed: {{ randomTextComputed }}</p>

  <!-- Class and style binding -->
  <!-- 'active' klasa ne css, 'isActive' variabla ne scripte -->
  <p class="other-class" :class="{ active: isActive, 'text-danger': hasError }">Class binding</p>
  <p class="other-class" :class="classObject">Class object</p>
  <p :class="classObjectComputed" @click="isCompleted = !isCompleted">Class object computed (click to toggle)</p>
  <p :class="['active', 'text-danger']">Binding to array</p>
  <p :class="[activeClass, errorClass]">Binding to array</p>
  <p :class="[activeClass, isCompleted ? 'completed' : '']">Binding to array</p>
  <p :style="{ color: redColor, textTransform: 'uppercase' }">Style binding</p>
  <p :style="styleObject">Style object</p>

  <Detyra1 />
</template>

<!-- CSS (Style) -->
<!-- Scoped ky CSS aplikohet vetem ne kete file -->
<style scoped>
.active {
  font-weight: bold;
}

.text-danger {
  color: red;
}

.completed {
  text-decoration: line-through;
  color: green;
}
</style>
