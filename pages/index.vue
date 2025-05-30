<template>
  <div>
    <h1>Home page</h1>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Home",
  ogTitle: "Home",
  description: "This is the main page",
  ogDescription: "This is the main page"
})
</script>

<style lang="scss" scoped>
h1 {
  @include Title;
  color: $primary;
}
</style>
