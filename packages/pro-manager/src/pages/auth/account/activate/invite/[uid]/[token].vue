<script setup lang="ts">
import { useParams, type RouteParams } from '@/composables';
// assets

// SEO
useHead({
  title: 'Accept Invite'
})

const params = useParams<RouteParams<'AcceptInvite'>>()

const activateData = reactive({
  new_password: '',
  re_new_password: '',
  uid: params.value.uid,
  token: params.value.token
})

const form = ref(false)
const emailInput = ref(null)
const isLoading = ref(false)

const requiredRule = (value: string) => !!value || 'Password is required.'
const lengthRule = (value: string) => value.length >= 8 || 'Password must be atleast 8 characters.'
const equalRule = (value: string) => value == activateData.new_password || 'Passwords don\'t match.'


const handleSubmit = (): void => {
  if (form.value) {
    alert('submitted...')
  }
  else return
}
</script>

<template>
  <h1 class="main-text mb-4 mt-6">Activate Account</h1>
  <div class="text-center">
    <p class="info-text mb-6">To access your account, create password and proceed to Activate.
    </p>
  </div>
  <VForm v-model="form" @submit.prevent="handleSubmit" validate-on="lazy input">
    <VTextField ref="emailInput" class="my-4 text-left" density="comfortable" variant="outlined" label="Your Password"
      rounded="0" type="password" id="password1" name="password1" v-model="activateData.new_password"
      :rules="[requiredRule, lengthRule]" required>
    </VTextField>

    <VTextField ref="emailInput" class="my-4 text-left" density="comfortable" variant="outlined" label="Retype Password"
      rounded="0" type="password" id="password2" name="password2" v-model="activateData.re_new_password"
      :rules="[requiredRule, equalRule]" required>
    </VTextField>

    <VBtn height="52" :loading="isLoading" type="submit" block class="text-capitalize my-3"
      style="font-size: 1rem; font-weight: 400;">Activate
    </VBtn>
    <RouterLink to="/">
      <p class="info-text link-text text-primary">Back to Pro-Manager.com</p>
    </RouterLink>
  </VForm>
</template>

<route lang="json">
{
  "name": "AcceptInvite"
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
