<!-- SFC -->
<script setup>
// defineProps(["name", "age"]);
// defineProps({
//   name: String,
//   age: Number,
// });
// defineProps({
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     default: 25,
//   },
// });
// nese doni me iu referu mrena skriptes propsave i referoheni me props.
// ne template nuk keni nevoj me i referu propsave me props. vetem emrin e propsit
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  //   {
  //     name: 'Enis',
  //     age: 25
  //   }
});

const emit = defineEmits(["childEvent"]);

const onClick = () => {
  // logjike
  //   emit("childEvent", "Hello from child component");
  //   emit("childEvent", 20);
  //   emit("childEvent", {
  //     name: "Enis",
  //     age: 25,
  //   });
  emit("childEvent", {
    name: props.user.name,
    age: props.user.age,
  });
};
</script>

<template>
  <!-- <h2>Hello from child component</h2> -->
  <!-- <h2>Hello {{ name }}, i am {{ age }} years old</h2> -->
  <h2>Hello {{ user?.name }}, i am {{ user?.age }} years old</h2>

  <!-- 
        parametri i pare emri i eventit
        parametri i dyte jane te dhenat qe i dergojme te komponenta prind
  -->
  <!-- <button @click="emit('childEvent', 'Hello from child component')">Click</button> -->
  <button @click="onClick">Click</button>
</template>

<style scoped></style>
