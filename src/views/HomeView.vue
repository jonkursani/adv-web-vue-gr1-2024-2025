<!-- Single file component (SFC) -->

<!-- JavaScript (Logic) -->
<!-- Script setup composition api -->
<script setup>
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useCounterStore } from "@/stores/counter";
import Detyra1 from "@/components/detyra/Detyra1.vue";
// importimi local i komponentes
import ChildComp from "@/components/ChildComp.vue";
import ListPeople from "@/components/ListPeople.vue";
import TodoList from "@/components/todos/TodoList.vue";

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

// Condtional rendering
const awesome = ref(true);
const type = ref("C");

// Two way data binding
const inp = ref("");
const onUserInput = (event) => {
  inp.value = event.target.value;
};

// // Todo list
// const newTodo = ref("");
// let todoId = 1;
// const todos = ref([
//   { id: todoId++, text: "Learn Vue", completed: true },
//   { id: todoId++, text: "Learn React", completed: false },
// ]);
// const addTodo = () => {
//   // alert(newTodo.value);
//   // if (newTodo.value.trim() === "") {
//   //   alert("Please enter a todo.");
//   //   return;
//   // }

//   // "" => false => !false => true
//   // newTodo === '' || newTodo === null || newTodo === undefined
//   if (!newTodo.value) {
//     // nese ska vlere
//     alert("Please enter a todo.");
//     return;
//   }

//   todos.value.push({
//     id: todoId++,
//     text: newTodo.value,
//     completed: false,
//   });

//   newTodo.value = ""; // clear the input
// };

// const removeTodo = (id) => {
//   // alert(id);

//   // kthemi te gjitha elementet qe nuk jane te barabarta me id qe e kemi ne parameter
//   todos.value = todos.value.filter((todo) => todo.id !== id);

//   // const index = todos.value.findIndex((todo) => todo.id === id);
//   // todos.value.splice(index, 1);
// };

// const hideCompleted = ref(false);
// const filteredTodos = computed(() => {
//   if (hideCompleted.value) {
//     return todos.value.filter((todo) => !todo.completed);
//   } else {
//     return todos.value;
//   }
// });

// Form input bindings
const text = ref("");
const txtArea = ref("");
const checked = ref(false);
const checkedNames = ref(["enis"]);
const picked = ref("two");
const selected = ref("");
const options = ref([
  // {id: 1, name: "Option 1"},
  { val: "a", text: "A" },
  { val: "b", text: "B" },
  { val: "c", text: "C" },
  { val: "d", text: "D" },
]);
const pickOptions = reactive({
  one: "one",
  two: "two",
});
const number = ref(null);

const person = reactive({
  firstName: "",
  lastName: "",
  age: null,
  hobies: [],
});

// Componets
// parametri i dyte ne emit, bohet bind ne parametrin e funksionit
const handleChildEvent = (msg) => {
  // alert(msg);
  alert(msg.name);
};

const removePerson = (id) => {
  alert("Remove person with id: " + id);
};

// Router
const router = useRouter();
const goToUser = (id) => {
  // router.push(`/user/${id}`); // navigimi me path
  router.push({ name: "user", params: { id } });
};

// Store
const counterStore = useCounterStore();
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

  <!-- Conditional rendering v-if="condition", v-else-if, v-else -->
  <!-- 
      if (true) {
      } else {
      }
  -->

  <h3>Conditional rendering</h3>
  <p v-if="awesome">
    Vue is awesome Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore natus rem vitae, harum esse quas
    beatae? Molestiae, neque, iure a impedit nostrum iusto debitis similique sequi maxime, consequuntur in maiores.
  </p>
  <!-- <span></span> error me vendos tag ne mes if dhe else-->
  <p v-else>Oh nooo.. 😒</p>
  <button @click="awesome = !awesome">Toggle</button>

  <p v-if="type === 'A'">A</p>
  <!-- <span></span> -->
  <p v-else-if="type === 'B'">B</p>
  <!-- <span></span> -->
  <p v-else>Not A/B</p>

  <template v-if="false">
    <h3>Template</h3>
    <p>Paragraph</p>
  </template>
  <template v-else>
    <h3>Other template</h3>
    <p>Paragraph</p>
  </template>

  <!-- V-show e shton ni display:none; te elementi nuk e largon prej DOM-it -->
  <p v-show="awesome">V-show</p>

  <h3>List rendering</h3>

  <h4>Author: {{ author.name }}</h4>
  <p>Books:</p>
  <ul v-if="author.books.length > 0">
    <!-- <li v-for="(book, i) in author.books">{{ i + 1 }} - {{ book.title }} ({{ book.year }})</li> -->
    <!-- <li v-for="{ title, year } in author.books">{{ title }} ({{ year }})</li> -->
    <!-- <li v-for="({ title, year }, index) in author.books">{{ index }} - {{ title }} ({{ year }})</li> -->
    <!-- :key duhet te jete unike -->
    <li v-for="(book, i) in author.books" :key="i">{{ i + 1 }} - {{ book.title }} ({{ book.year }})</li>
  </ul>
  <p v-else>No books</p>

  <ul>
    <li v-for="(u, k, i) in user">{{ i }} - {{ k }} - {{ u }}</li>
  </ul>

  <!-- Two way data binding -->
  <!-- v-model -->
  <!-- <input type="text" :value="inp" @input="onUserInput" /> -->
  <!-- let variabla = '' sbon -->
  <!-- let variabla = ref() ose reactive() -->
  <input type="text" v-model="inp" />
  {{ inp }}

  <!-- <h4>Todo List</h4>
  <input type="text" v-model.trim="newTodo" @keyup.enter="addTodo" />
  <button @click="addTodo">+ Add</button>

  <ul v-if="todos.length > 0">
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.completed" />
      <span :class="{ completed: todo.completed }">{{ todo.id }}: {{ todo.text }}</span>
      <button @click="removeTodo(todo.id)">X</button>
    </li>
  </ul>
  <p v-else>No todos, add one</p>

  <button @click="hideCompleted = !hideCompleted">{{ hideCompleted ? "Show all" : "Hide completed" }}</button> -->

  <h3>Form input bindings</h3>
  <h4>Text</h4>
  <input type="text" v-model="text" />
  <p>Text: {{ text }}</p>

  <h4>Text area</h4>
  <textarea v-model="txtArea"></textarea>
  <p>Text area: {{ txtArea }}</p>

  <h4>Checkbox</h4>
  <input type="checkbox" id="chk" v-model="checked" />
  <label for="chk">Is checked</label>
  <p>Checked: {{ checked }}</p>

  <h4>Multiple checkbox</h4>
  <!-- 
      Kur keni multiple (choices) checkbox ateher variabla qe vendoset te v-model duhet te jete array
      vlera qe ruhet ne array eshte vlera e atributit value
  -->
  <input type="checkbox" id="enis" value="enis" v-model="checkedNames" />
  <label for="enis">Enis</label>

  <input type="checkbox" id="partin" value="partin" v-model="checkedNames" />
  <label for="partin">Partin</label>

  <input type="checkbox" id="gresa" value="gresa" v-model="checkedNames" />
  <label for="gresa">Gresa</label>

  <p>Checked names: {{ checkedNames }}</p>

  <h4>Radio button</h4>
  <input type="radio" id="one" :value="pickOptions.one" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" :value="pickOptions.two" v-model="picked" />
  <label for="two">Two</label>

  <p>Picked: {{ picked }}</p>

  <h4>Select</h4>
  <select v-model="selected">
    <option value="" disabled>Please select one</option>
    <!-- <option value="a">A</option>
    <option value="b">B</option>
    <option value="c">C</option> -->
    <option v-for="opt in options" :key="opt.val" :value="opt.val">
      {{ opt.text }}
    </option>
  </select>
  <p>Selected: {{ selected }}</p>

  <!-- Trim, Number modifiers -->
  <h4>Trim/Number modifiers</h4>
  <input type="text" v-model.trim="text" />
  <p>Trimmed text: {{ text }}</p>
  <input type="number" v-model.number="number" />
  <p>Number: {{ number }}</p>

  <!-- 
      Detyre:
      Krijoni nje forme me inpute
      1. Emri (text)
      2. Mbiemri (text)
      3. Mosha (number)
      4. Gjinia (radio) - mashkull, femer
      5. Hoby (checkbox) - sport, muzike, art
      6. A eshte student (checkbox) - true/false
      7. Drejtimi (select) - informatike, arkitekture, dizajn
      8. Para se ti beni submit form, validoni te gjitha inputet
      
      Button submit formen edhe e shton qet person ne nje array
      @submit.prevent="onSubmit"

      Array shfaqeni ne nje tabele me v-for
   -->

  <h3>Components</h3>

  <!-- Menyra e thirrjes se komponentes -->
  <!-- <ChildComp name="Filan" /> -->
  <!-- <child-comp name="Enis" :age="20" /> -->
  <child-comp :user="{ name: 'Enis', age: 20 }" @child-event="handleChildEvent" />

  <!-- Detyren paraprake modifikojeni 
    Krijoni nje komponente qe ben shfaqjen e te dhenave (
      X butoni - delete ni person, id e beni emit te comp prind
    )
    Krijoni nje komponente qe ben insertimin e te dhenave (
      emit ni event submit dhe e dergoni te prindi per insertim
    )
   -->

  <list-people
    :people="[
      { id: 1, name: 'Enis', age: 20 },
      { id: 2, name: 'Filan', age: 25 },
      { id: 3, name: 'Gresa', age: 30 },
    ]"
    @remove-person="removePerson"
  />

  <!-- Todo List -->
  <todo-list />

  <h3>Router</h3>

  <router-link to="/about">About with to</router-link>
  <br />
  <!-- name eshte case sensive -->
  <router-link :to="{ name: 'about' }">About with name</router-link>
  <br />
  <router-link to="/user/1">User 1</router-link>
  <br />
  <router-link :to="{ name: 'user', params: { id: 2 } }">User 2</router-link>
  <br />
  <button @click="goToUser(3)">User 3</button>

  <h3>Store</h3>
  <p>Count: {{ counterStore.count }}</p>

  <!-- 
       Detyre

       PeopleView (buton qe bon delete personin prej array-it ne store)
       AddPersonView (shton pernonin e ri ne array)
       UpdatePersonView (kerko personin me id qe vjen prej url) 

       Definojeni nje store te ri usePeopleStore qe permban metodat per addPerson, updatePerson, deletePerson
       array-in e personave e ruani ne store
   -->
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
</style>
