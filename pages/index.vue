<template>
  <div>
    <h1>{{ header }}</h1>
    <Alert color="primary"> A simple primary alert—check it out! </Alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "Hello World",
    };
  },
};
</script>

<style>
h1 {
  color: red;
}
</style>
