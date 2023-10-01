<script setup lang="ts">
import { HOME_CURRENT_PATH, HOME_DEFAULT_PATH } from '@/constants';
const router = useRouter()

const toPath = useLocalStorage(HOME_CURRENT_PATH, HOME_DEFAULT_PATH)

router.push(toPath.value)
</script>

<template>
  <h1>TESTING</h1>
  <div>
    <RouterView />
  </div>
</template>
