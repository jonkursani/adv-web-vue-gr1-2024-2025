import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  // state variablat ref dhe reactive
  const count = ref(0); // { value: 0 }
  const message = ref("Pinia!");

  // actions - functions that modify the state
  const increment = () => {
    count.value++;
  };

  // getters (computed properties) - functions that return a computed value based on the state
  const doubleCount = computed(() => count.value * 2);
  const welcomeMessage = computed(() => "Welcome to " + message.value);

  // per me iu qas jasht ketyre variablave
  return {
    count,
    welcomeMessage,
    increment,
    doubleCount,
  };
});
