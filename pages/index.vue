<template>
  <div>
    <h1>Main</h1>
    <Alert color="primary">{{ data.mess }}</Alert>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/example', {
  method: 'post',
  body: { name:'Alex', id: 1 }
});

</script>

<style>
h1 {
  color: red;
}
</style>
