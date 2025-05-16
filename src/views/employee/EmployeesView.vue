<script setup>
import AppCard from "@/components/ui/AppCard.vue";
import {onMounted, ref} from "vue";
import AppSpinner from "@/components/ui/AppSpinner.vue";
import EmployeeService from "@/services/employeeService.js";
import AppDatatable from "@/components/ui/AppDatatable.vue";
import AppButton from "@/components/ui/AppButton.vue";

// import DataTable from 'datatables.net-vue3';
// import DataTablesCore from 'datatables.net';
// import DataTablesBS5 from 'datatables.net-bs5';
//
// // Initialize DataTables with Bootstrap 5 styles
// DataTable.use(DataTablesCore);
// DataTable.use(DataTablesBS5);


const isLoading = ref(false)
const employees = ref([])
const columns = ref([
  {key: 'id', label: '#'},
  {key: 'firstName', label: 'First name'},
  {key: 'lastName', label: 'Last name'},
  {key: 'department', label: 'Department'},
  {key: 'hireDate', label: 'Hire date'},
  {key: 'email', label: 'Email'},
])

const loadEmployees = async () => {
  try {
    isLoading.value = true
    const response = await EmployeeService.getAllEmployees()
    employees.value = response.map(emp => {
      return {
        id: emp.id,
        firstName: emp.firstName,
        lastName: emp.lastName,
        department: emp.department.name,
        hireDate: emp.hireDate,
        email: emp.email,
      }
    })
  } catch (e) {
    throw e;
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  await loadEmployees()
  // new DataTablesCore('#employees')
})
</script>

<template>
  <app-card>
    <template #header>
      <h5>Employees</h5>
    </template>

    <div class="text-center" v-if="isLoading">
      <app-spinner :is-loading="isLoading"/>
    </div>
    <!--    <table v-else class="table table-striped table-bordered" id="employees">-->
    <!--      <thead>-->
    <!--      <tr>-->
    <!--        <th>#</th>-->
    <!--        <th>First name</th>-->
    <!--        <th>Last name</th>-->
    <!--        <th>Department</th>-->
    <!--        <th>Hire date</th>-->
    <!--        <th>Email</th>-->
    <!--      </tr>-->
    <!--      </thead>-->
    <!--      <tbody>-->
    <!--      <tr v-for="employee in employees" :key="employee.id">-->
    <!--        <td>{{ employee.id }}</td>-->
    <!--        <td>{{ employee.firstName }}</td>-->
    <!--        <td>{{ employee.lastName }}</td>-->
    <!--        <td>{{ employee.department.name }}</td>-->
    <!--        <td>{{ employee.hireDate }}</td>-->
    <!--        <td>{{ employee.email }}</td>-->
    <!--      </tr>-->
    <!--      </tbody>-->
    <!--    </table>-->
    <app-datatable v-else id="employees"
                   :rows="employees"
                   :columns="columns"
                   has-actions>
      <!--      <template #actions="varibla">-->
      <template #actions="{rreshti}">
        <router-link to="" class="btn btn-secondary">
          <i class="bi bi-pencil-fill"></i>
        </router-link>
        <!--        <app-button class="btn btn-danger ms-2" @click="() => console.log(varibla.rreshti)">-->
        <app-button class="btn btn-danger ms-2" @click="() => console.log(rreshti)">
          <i class="bi bi-trash-fill"></i>
        </app-button>
      </template>
    </app-datatable>
  </app-card>
</template>

<style scoped></style>