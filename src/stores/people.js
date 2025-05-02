import { defineStore } from "pinia";
import { ref } from "vue";

export const usePeopleStore = defineStore("people", () => {
  // State variables
  let personId = 1;
  const people = ref([{ id: personId++, firstName: "John", lastName: "Doe", age: 30 }]);

  // actions
  const addPerson = (person) => {
    person.id = personId++;
    people.value.push(person);
  };

  const getPersonById = (id) => {
    return people.value.find((p) => p.id === id);
  };

  const updatePerson = (id, person) => {
    const index = people.value.findIndex((p) => p.id === id);
    const updatedPerson = { id, ...person }; // {id, firstName, lastName, age}
    people.value[index] = updatedPerson;
  };

  // getters (computed properties)

  return {
    people,
    addPerson,
    getPersonById,
    updatePerson,
  };
});
