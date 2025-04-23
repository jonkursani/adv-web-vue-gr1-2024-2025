<script setup>
defineProps({
  people: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["removePerson"]);

const onRemovePerson = (id) => {
  emit("removePerson", id);
};
</script>

<template>
  <table border="1">
    <thead>
      <tr>
        <th># Id</th>
        <th>Name</th>
        <th>Age</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="person in people" :key="person.id">
        <td>{{ person.id }}</td>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>
          <button @click="onRemovePerson(person.id)">X</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
