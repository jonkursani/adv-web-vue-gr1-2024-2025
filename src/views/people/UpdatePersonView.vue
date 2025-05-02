<script setup>
import { usePeopleStore } from "@/stores/people";
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const person = reactive({
  firstName: "",
  lastName: "",
  age: null,
});

const store = usePeopleStore();
const router = useRouter();
const route = useRoute();

const personId = parseInt(route.params.id);

// lifecycle method
onMounted(() => {
  const personData = store.getPersonById(personId);

  if (!personData) {
    alert("Person not found.");
    router.push({ name: "people" });
    return;
  }

  person.firstName = personData.firstName;
  person.lastName = personData.lastName;
  person.age = personData.age;
});

const handleSubmit = () => {
  // Validate the form data
  if (!person.firstName || !person.lastName || person.age === null) {
    alert("Please fill in all fields.");
    return;
  }

  store.updatePerson(personId, person);

  router.push({ name: "people" });
};

const goBack = () => {
  router.push({ name: "people" });
};
</script>

<template>
  <h1>Update person</h1>

  <form @submit.prevent="handleSubmit">
    <div>
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" v-model.trim="person.firstName" />
    </div>
    <div>
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" v-model.trim="person.lastName" />
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" v-model.number="person.age" />
    </div>
    <div>
      <button type="submit">Submit</button>
      <button @click="goBack">Cancel</button>
    </div>
  </form>
</template>
