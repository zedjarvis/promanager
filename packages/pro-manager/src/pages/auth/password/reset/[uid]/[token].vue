<script setup lang="ts">

// assets

// SEO
useHead({
  title: 'Reset Password'
})

const password1 = ref("")
const password2 = ref("")
const form = ref(false)
const emailInput = ref(null)
const isLoading = ref(false)

const passRules = [
  (value: string) => {
    if (value) return true
    return 'Enter your Password!'
  },
  (value: string) => {
    if (value?.length >= 8) return true

    return 'Password must be atleast 8 characters.'
  }
]


const handleSubmit = (): void => {
  // @ts-ignore
  emailInput.value!.validate()
  if (form.value) alert("submitting")
  else return
}
</script>

<template>
  <h1 class="main-text mb-4 mt-6">Reset Password</h1>
  <div class="text-center">
    <p class="info-text mb-6">Enter your new login credentials to access your Account.
    </p>
  </div>
  <VForm v-model="form" @submit.prevent="handleSubmit" validate-on="input">
    <VTextField ref="emailInput" class="my-4" density="comfortable" variant="outlined" label="New Password" rounded="0"
      type="password" id="password1" name="password1" v-model="password1" :rules="passRules" autofocus required>
    </VTextField>

    <VTextField ref="emailInput" class="my-4" density="comfortable" variant="outlined" label="Retype Password" rounded="0"
      type="password" id="password2" name="password2" v-model="password2" :rules="passRules" autofocus required>
    </VTextField>

    <VBtn height="52" :loading="isLoading" type="submit" block class="text-capitalize my-3"
      style="font-size: 1rem; font-weight: 400;">Continue
    </VBtn>
    <RouterLink to="/">
      <p class="info-text link-text text-primary">Back to Pro-Manager.com</p>
    </RouterLink>
  </VForm>
</template>

<route lang="json">
{
  "name": "ResetPassword"
}
</route>

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
