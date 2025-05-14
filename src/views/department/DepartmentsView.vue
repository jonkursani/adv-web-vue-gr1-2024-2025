<script setup>
import AppCard from "@/components/ui/AppCard.vue";
import {useLoading} from "@/composables/useLoading.js";
import DepartmentService from "@/services/departmentService.js";
import {onMounted, ref} from "vue";
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import DataTablesBS5 from 'datatables.net-bs5';
import AppSpinner from "@/components/ui/AppSpinner.vue";
import AppButton from "@/components/ui/AppButton.vue";
import {useAppToast} from "@/composables/useAppToast.js";

// Initialize DataTables with Bootstrap 5 styles
DataTable.use(DataTablesCore);
DataTable.use(DataTablesBS5);

const {isLoading, withLoading} = useLoading()
const departments = ref([]);
const loadDepartments = async () => {
  await withLoading(async () => {
    // const response = DepartmentService.getAllDepartments()
    // departments.value = response
    departments.value = await DepartmentService.getAllDepartments()
  })
}

const {showSuccess} = useAppToast()
const onDelete = async (id) => {
  if (confirm('Are you sure you want to delete this department?')) {
    try {
      isLoading.value = true
      const response = await DepartmentService.deleteDepartment(id)
      if (response) {
        showSuccess('Department deleted successfully')
        location.reload()
        // await loadDepartments()
      }
    } catch (e) {
      throw e;
    } finally {
      isLoading.value = false
    }
  }
}

onMounted(async () => {
  await loadDepartments()
  new DataTablesCore('#departments')
})
</script>

<template>
  <app-card>
    <template #header>
      <div class="d-flex justify-content-between">
        <h5>Departments</h5>
        <router-link :to="{name: 'create-department'}" class="btn btn-primary">Add</router-link>
      </div>
    </template>

    <!--    <p v-if="isLoading">Loading...</p>-->
    <div class="text-center" v-if="isLoading">
      <app-spinner :is-loading="isLoading"/>
    </div>
    <table v-else id="departments" class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Location</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="department in departments" :key="department.id">
        <td>{{ department.id }}</td>
        <td>{{ department.name }}</td>
        <td>{{ department.location }}</td>
        <td>
          <router-link :to="{name: 'update-department', params: { id: department.id }}"
                       class="btn btn-secondary me-2">
            <i class="bi bi-pencil-fill"></i>
          </router-link>

          <app-button class="btn btn-danger" @click="onDelete(department.id)">
            <i class="bi bi-trash-fill"></i>
          </app-button>
        </td>
      </tr>
      </tbody>
    </table>
  </app-card>
</template>

<style scoped></style>