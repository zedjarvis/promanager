<script setup lang="ts">
import { useAuthStore } from '@/store';

// assets
import GoogleIcon from '@images/google-icon.svg';
import MsIcon from '@images/microsoft-icon.svg';


// SEO
useHead({
  title: 'Login'
})

definePage({
  name: 'Login',
})

const authStore = useAuthStore()
const { isLoading, Msg, hasError } = storeToRefs(authStore)
const windowStep = ref(1)
const loginData = ref({ email: '', password: '' })
const form = ref(false)

const emailRules = [
  (value: string) => !!value || 'E-mail is required.',
  (value: string) => (/.+@.+\..+/.test(value)) || 'E-mail must be valid!'
]

const passRules = [
  (value: string) => !!value || 'Password is required.',
  (value: string) => value.length >= 8 || 'Password must be atleast 8 characters.'
]

const mainText = computed(() => windowStep.value == 1 ? 'Welcome' : 'Enter your password')
// const nextUrl = computed(() => returnUrl ? returnUrl.value : '/')

const handleSubmit = async () => {
  if (form.value && windowStep.value == 1) windowStep.value = 2
  else if (form.value && windowStep.value == 2) await authStore.login(loginData.value)
  else return
}

function handleEdit(): void {
  windowStep.value = 1
  loginData.value.password = ""
}

</script>

<template>
  <h1 class="main-text mb-4 mt-6">{{ mainText }}</h1>
  <div class="text-center">
    <p class="info-text mb-6">Login to your account below to get started. For more info visit
      pro-manager.com</p>
  </div>

  <VForm v-model="form" @submit.prevent="handleSubmit" validate-on="input">
    <VWindow v-model="windowStep">
      <VWindowItem :value="1">
        <div class="oauth-group">
          <button class="oauth-btn mb-2 w-100 d-flex align-center position-relative text-center">
            <span class="icon"><img :src="GoogleIcon" width="20"></span>
            <span>Continue with Google</span>
          </button>
          <button class="oauth-btn w-100 d-flex align-center position-relative text-center">
            <span class="icon"><img :src="MsIcon" width="20"></span>
            <span>Continue with Microsoft Account</span>
          </button>
        </div>
        <div class="or-divider d-flex text-uppercase pt-6 mb-6 text-center">
          <span>Or</span>
        </div>
        <VTextField v-if="windowStep == 1" ref="emailInput" class="my-4 text-left" density="comfortable" variant="outlined"
          label="Email address" rounded="0" type="email" id="email" name="email" v-model="loginData.email"
          :rules="emailRules" autofocus required>
        </VTextField>
      </VWindowItem>
      <VWindowItem :value="2">
        <VTextField v-if="windowStep == 2" ref="emailInput" class="my-4 text-left" density="comfortable" variant="outlined"
          rounded="0" v-model="loginData.email" readonly>
          <template v-slot:append-inner>
            <VBtn @click="handleEdit" class="text-capitalize" :ripple="false" variant="plain">
              <span class="text-primary font-weight-bold" style="font-size: 14px;">Edit</span>
            </VBtn>
          </template>
        </VTextField>
        <VTextField v-if="windowStep == 2" class="my-3 text-left" density="comfortable" variant="outlined" label="Password"
          rounded="0" type="Password" v-model="loginData.password" :rules="passRules" required autofocus>
        </VTextField>
        <RouterLink to="/auth/password/reset">
          <p class="info-text link-text mt-4 text-left text-primary">Forgot your password?</p>
        </RouterLink>
      </VWindowItem>
    </VWindow>
    <VBtn height="52" :loading="isLoading" type="submit" block class="text-capitalize my-3"
      style="font-size: 1rem; font-weight: 400;">Continue
    </VBtn>
    <p class="info-text text-left">Don't have an Account?
      <RouterLink to="/auth/register">
        <span class="link-text text-primary">Sign Up</span>
      </RouterLink>
    </p>
  </VForm>
  <VSnackbar color="error" v-model="hasError" timeout="-1" elevation="16">
    {{ Msg }}
    <template v-slot:actions>
      <VIcon icon="i-carbon-close" @click="hasError = false" />
    </template>
  </VSnackbar>
</template>

<style lang="scss" scoped>
.main-text {
  color: rgb(var(--v-theme-on-background));
  font-size: 1.5em;
  font-weight: 400;
  letter-spacing: 0;
  font-family: 'Space Grotesk';
}

.info-text {
  font-size: 0.875rem;
  color: rgb(var(--v-theme-on-background));
}

.link-text {
  font-weight: 700;
  text-decoration: none;
}

.oauth-btn {
  height: 52px;
  padding-left: 52px;
  padding-right: 8px;
  font-size: 16px;
  border: 1px solid;
  transition: box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out;

  .icon {
    position: absolute;
    left: 26px;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 20px;
    height: 20px;
  }
}

.or-divider {
  width: 100%;
  order: 2;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  border: none;
  margin: 0;

  span {
    text-align: center;
    flex: 0.2 0 auto;
  }
}

.or-divider::after,
.or-divider::before {
  content: "";
  border-bottom: 1px solid;
  flex: 1 0 auto;
  height: 0.5em;
  margin: 0;
}
</style>
