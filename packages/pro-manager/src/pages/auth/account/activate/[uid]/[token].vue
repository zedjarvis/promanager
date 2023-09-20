<script setup lang="ts">

// assets

// SEO
useHead({
  title: 'Activate Account'
})

const isLoading = ref(false)


const handleSubmit = (): void => {
  // @ts-ignore
  isLoading.value = true
}
</script>

<template>
  <h1 class="main-text mb-4 mt-6">Activate Your Account</h1>
  <div class="text-center">
    <p class="info-text mb-6">To start using you account on Pro-Manager, activate and proceed.
    </p>
  </div>

  <VBtn height="52" @click="handleSubmit" :loading="isLoading" type="submit" block class="text-capitalize my-3"
    style="font-size: 1rem; font-weight: 400;">Activate
  </VBtn>
  <RouterLink to="/">
    <p class="info-text link-text text-primary">Back to Pro-Manager.com</p>
  </RouterLink>
</template>

<route lang="json">
{
  "name": "ActivateAccount"
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
