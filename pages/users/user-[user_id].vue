<template>
  <div>
    <h1>Id of user {{ user_id }}</h1>
  </div>
</template>

<script setup>
const { user_id } = useRoute().params;
definePageMeta({
  layout: 'users'
});
</script>

<style>
h1 {
  color: red;
}
</style>
