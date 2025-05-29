<template>
  <div>
    <header>
      <Navbar>
        <Container>
          <nuxt-link to="/">Main page</nuxt-link>
          <nuxt-link to="/contact">Contact page</nuxt-link>
          <nuxt-link to="/users">Users page</nuxt-link>
        </Container>
      </Navbar>
    </header>
    <slot />
  </div>
</template>

<script setup>
</script>

<style>
</style>
