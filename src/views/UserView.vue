<script setup>
import { useRoute, useRouter } from "vue-router";
import { useCounterStore } from "@/stores/counter";

// menyra programatike per me e marr id-ne e userit
const route = useRoute(); // per me marr vlera prej routes
const userId = route.params.id;

// per me navigu prej nje view ne view tjeter na duhet useRouter()
// const router = useRouter(); // per me navigu prej nje view ne view tjeter
const { push } = useRouter(); // per me navigu prej nje view ne view tjeter

const goToHome = () => {
  // router.push('/') // navigimi me path
  //   router.push({ name: "home" }); // navigimi me name
  push({ name: "home" }); // navigimi me name
};

// Store
const store = useCounterStore();
</script>

<template>
  <h1>User View</h1>
  <!-- $route - variabel globale qe mundeni me iu qas vetem ne template -->
  <p>User: {{ $route.params.id }}</p>
  <p>User: {{ userId }}</p>

  <button @click="goToHome">Go to home</button>

  <h2>Store</h2>
  <p>{{ store.welcomeMessage }}</p>
  <p>Count: {{ store.count }}</p>
  <p>Double count: {{ store.doubleCount }}</p>
  <button @click="store.increment">Increment</button>
</template>
