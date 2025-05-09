<script setup>
import {reactive, ref} from "vue";
import {useAuthStore} from "@/stores/auth.js";
import {useRoute, useRouter} from "vue-router";
import {useAppToast} from "@/composables/useAppToast.js";
import AppButton from "@/components/ui/AppButton.vue";
import {useLoading} from "@/composables/useLoading.js";

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
// const isLoading = ref(false)

const user = reactive({
  email: '',
  password: ''
})

const toast = useAppToast()
// toast.showError()
// const {showSuccess} = useAppToast()

// const loadingHelper = useLoading()
const {isLoading, withLoading} = useLoading()

const handleSubmit = async () => {
  if (!user.email || !user.password) {
    // alert('Please fill in all fields')
    toast.showWarning('Please fill in all fields')
    return;
  }

  // try {
  //   isLoading.value = true
  //   await authStore.logIn(user)
  //   const redirectUrl = `${route.query.redirect || '/'}`
  //   await router.push(redirectUrl)
  //   // isLoading.value = false
  // } catch (e) {
  //   // console.log(e.response?.data?.message)
  //   // alert('Invalid email or password')
  //   // error i axios
  //   // toast.showError(e.response?.data?.message || 'Something went wrong')
  //   // isLoading.value = false
  //   throw e;
  // } finally {
  //   isLoading.value = false
  // }

  await withLoading(async () => {
      await authStore.logIn(user)
      const redirectUrl = `${route.query.redirect || '/'}`
      await router.push(redirectUrl)
  })
}
</script>

<template>
  <div id="auth">
    <div class="row h-100">
      <div class="col-lg-5 col-12">
        <div id="auth-left">
          <div class="auth-logo">
            <!--            <a href="index.html"><img src="assets/images/logo/logo.svg" alt="Logo"></a>-->
          </div>
          <h1 class="auth-title">Log in.</h1>
          <p class="auth-subtitle mb-5">Log in with your data that you entered during registration.</p>

          <form @submit.prevent="handleSubmit">
            <div class="form-group position-relative has-icon-left mb-4">
              <input type="text"
                     class="form-control form-control-xl"
                     placeholder="Email"
                     v-model.trim="user.email"
              >
              <div class="form-control-icon">
                <i class="bi bi-person"></i>
              </div>
            </div>
            <div class="form-group position-relative has-icon-left mb-4">
              <input type="password"
                     class="form-control form-control-xl"
                     placeholder="Password"
                     v-model.trim="user.password">
              <div class="form-control-icon">
                <i class="bi bi-shield-lock"></i>
              </div>
            </div>

            <app-button :is-loading="isLoading"
                        class="btn btn-primary btn-block btn-lg shadow-lg mt-5"
            >
              Log in
            </app-button>
            <!--            <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5"-->
            <!--                    type="button"-->
            <!--                    disabled-->
            <!--                    v-if="isLoading">-->
            <!--              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>-->
            <!--              Log in-->
            <!--            </button>-->
            <!--            <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5" v-else>Log in</button>-->
          </form>
          <div class="text-center mt-5 text-lg fs-4">
            <p class="text-gray-600">Don't have an account? <a href="auth-register.html" class="font-bold">Sign
              up</a>.</p>
            <p><a class="font-bold" href="auth-forgot-password.html">Forgot password?</a>.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-7 d-none d-lg-block">
        <div id="auth-right">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #fff
}

#auth {
  height: 100vh;
  overflow-x: hidden
}

#auth #auth-right {
  background: url(../../assets/images/bg/4853433.png), linear-gradient(90deg, #2d499d, #3f5491);
  height: 100%
}

#auth #auth-left {
  padding: 5rem 8rem
}

#auth #auth-left .auth-title {
  font-size: 4rem;
  margin-bottom: 1rem
}

#auth #auth-left .auth-subtitle {
  color: #a8aebb;
  font-size: 1.7rem;
  line-height: 2.5rem
}

#auth #auth-left .auth-logo {
  margin-bottom: 7rem
}

#auth #auth-left .auth-logo img {
  height: 2rem
}

@media screen and (max-width: 767px) {
  #auth #auth-left {
    padding: 5rem
  }
}

@media screen and (max-width: 576px) {
  #auth #auth-left {
    padding: 5rem 3rem
  }
}
</style>