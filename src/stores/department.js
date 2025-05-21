import {defineStore} from "pinia";
import {computed, ref} from "vue";
import DepartmentService from "@/services/departmentService.js";

export const useDepartmentStore = defineStore(
    'department', () => {
        // state
        const departments = ref([])

        // actions
        const getDepartments = async () => {
            const response = await DepartmentService.getAllDepartments()
            if (response) {
                departments.value = response
            }
        }

        // getters (computed)
        const departmentsForDropdown = computed(() => {
            return departments.value.map(dep => {
                return {
                    value: dep.id,
                    label: dep.name
                }
            })
        })

        return {getDepartments, departmentsForDropdown}
    }
)