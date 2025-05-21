<script setup>
import {onErrorCaptured} from "vue";
import {useAppToast} from "@/composables/useAppToast.js";
import {useAuthStore} from "@/stores/auth.js";
import {useRouter} from "vue-router";

const {showError} = useAppToast()
const store = useAuthStore()
const router = useRouter()
onErrorCaptured((err) => {
  // Handle the error
  // console.error('Error captured:', err);

  // Check if the error is related to authentication
  if (err.response && (err.response.status === 401 || err.response.status === 403)) {
    store.logOut()

    showError(err.response?.data?.message || 'Session expired. Please log in again.')

    // Redirect to the login page after a short delay
    setTimeout(() => {
      router.push({name: 'login'})
    }, 100)

    return;
  }

  showError(err.response?.data?.message || 'An unexpected error occurred')
  return false // Prevent the error from propagating further
});
</script>

<template>
  <!-- Placeholder ku contenti qe e shkruni mes tagjeve hapese edhe mbyllese te komponentes renderohet ne slot  -->
  <slot/>
</template>

<style scoped>

</style>