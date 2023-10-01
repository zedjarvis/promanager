<script setup lang="ts">

interface Props {
  name: string
  image?: string
  size?: string
  color?: string
}
const props = withDefaults(defineProps<Props>(), {
  size: '35',
  name: 'New User'
})

const { name, image, size, color } = toRefs(props)

const userInitials = computed(() => {
  return name.value.match(/(^\S\S?|\b\S)?/g)!.join("").match(/(^\S|\S$)?/g)?.join("").toUpperCase()
})

const userColor = computed(() => {
  const hsl = generateHSL(name.value)
  return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`
})

function getHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  hash = Math.abs(hash)
  return hash
}

function normalizeHash(hash: number, min: number, max: number): number {
  return Math.floor((hash % (max - min)) + min)
}

function generateHSL(uname: string): number[] {
  const hash = getHash(uname)
  const h = normalizeHash(hash, 0, 360)
  const s = normalizeHash(hash, 50, 75)
  const l = normalizeHash(hash, 25, 60)

  return [h, s, l]
}

</script>

<template>
  <VAvatar v-if="image" v-tippy="{ content: name, theme: 'light' }" :size="size" :image="image" />

  <VAvatar v-else v-tippy="{ content: name, theme: 'light' }" :size="size" :color="color ? color : userColor">
    {{ userInitials }}
  </VAvatar>
</template>
