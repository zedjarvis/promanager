<template>
  <a href="#content" class="content">Skip
    to Main Content</a>
</template>

<style lang="scss" scoped>
.content {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  border-radius: 0.25rem;
  padding: 12px 8px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: white;
  transform: translate(-150%, 0);
  background-image: linear-gradient(to bottom right, #2dd4bf, #3b82f6, #9333ea);

  &:focus-visible {
    transform: translate(-40px);
  }
}
</style>
