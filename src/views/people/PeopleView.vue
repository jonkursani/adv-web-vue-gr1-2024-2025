<script setup>
import {usePeopleStore} from "@/stores/people";
import {useRouter} from "vue-router";
import AppCard from "@/components/ui/AppCard.vue";

const peopleStore = usePeopleStore();
const router = useRouter();

const goToUpdatePerson = (id) => {
  router.push({name: "update-person", params: {id}});
};

const onDeletePerson = (id) => {
  if (confirm(`Are you sure you want to delete person with ID ${id}?`)) {
    // Call the delete method from the store
  }
};
</script>

<template>
  <app-card>
    <template #header>
      <div class="d-flex justify-content-between">
        <h5>People view</h5>
        <router-link class="btn btn-primary" :to="{ name: 'add-person' }">Add person</router-link>
      </div>
    </template>


    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="person in peopleStore.people" :key="person.id">
        <td>{{ person.id }}</td>
        <td>{{ person.firstName }}</td>
        <td>{{ person.lastName }}</td>
        <td>{{ person.age }}</td>
        <td>
          <button class="btn btn-outline-primary" @click="goToUpdatePerson(person.id)">🖋️</button>
          <button class="btn btn-outline-danger" @click="onDeletePerson(person.id)">❌</button>
        </td>
      </tr>
      </tbody>
    </table>
  </app-card>
</template>
