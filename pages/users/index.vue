<template>
  <div>
    <Head>
      <Title>All users from website</Title>
      <Meta name="description" content="All users"/>
    </Head>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
         <UserLink :user="user"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "users",
});

const { data } = await useFetch('https://dummyjson.com/users');
const users = await ref(data.value.users);
</script>

<style>
h1 {
  color: red;
}
</style>
