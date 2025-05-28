<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <NuxtLink :to="`users/user-${user.id}`">{{ user.id }}. Name: {{ user.firstName }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "users",
});

// const users = ref([
//   { id: 1, name: "Alex" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Igor" },
// ]);
const { data } = await useFetch('https://dummyjson.com/users');
const users = ref(data.value.users);
</script>

<style>
h1 {
  color: red;
}
</style>
