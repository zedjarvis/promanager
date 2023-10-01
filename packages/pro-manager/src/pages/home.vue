<script setup lang="ts">
import { HOME_CURRENT_PATH, HOME_DEFAULT_PATH } from '@/constants';

definePage({
  meta: {
    layout: 'layoutSideNav',
    requiresAuth: true,
    home: true // used to change tab links
  }
})

const router = useRouter()
const to_path = useLocalStorage(HOME_CURRENT_PATH, HOME_DEFAULT_PATH)

router.push(to_path.value)
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
