<template>
  <NuxtLink :to="`users/user-${user.id}`">
    {{ user.id }}. Name: {{ user.firstName }}
  </NuxtLink
  >
</template>

<script setup>
const { user } = defineProps(['user']);

</script>
