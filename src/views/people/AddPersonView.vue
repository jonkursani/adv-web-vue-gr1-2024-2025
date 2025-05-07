<script setup>
import {usePeopleStore} from "@/stores/people";
import {reactive} from "vue";
import {useRouter} from "vue-router";
import AppCard from "@/components/ui/AppCard.vue";
import AppButton from "@/components/ui/AppButton.vue";

const person = reactive({
  firstName: "",
  lastName: "",
  age: null,
});

const store = usePeopleStore();
const router = useRouter();

const handleSubmit = () => {
  // Validate the form data
  if (!person.firstName || !person.lastName || person.age === null) {
    alert("Please fill in all fields.");
    return;
  }

  store.addPerson(person);

  router.push({name: "people"});
};

// const goBack = () => {
//   router.push({name: "people"});
// };
</script>

<template>

  <app-card>
    <template #header>
      <h5>Add person</h5>
    </template>

    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="firstName" v-model.trim="person.firstName"/>
      </div>
      <div class="mb-3">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" v-model.trim="person.lastName"/>
      </div>
      <div class="mb-3">
        <label for="age">Age</label>
        <input type="number" class="form-control" id="age" v-model.number="person.age"/>
      </div>
      <div class="text-center">
        <app-button type="submit" class="btn btn-primary">Submit</app-button>
        <!--        <button @click="goBack">Cancel</button>-->
        <router-link :to="{ name: 'people' }" class="btn btn-secondary ms-2">Cancel</router-link>
      </div>
    </form>
  </app-card>
</template>
