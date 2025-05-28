<template>
  <div>
    <header>
      <Navbar>
        <Container>
          <NavbarBrand><nuxt-link to="/">Main page</nuxt-link></NavbarBrand>
          <NavbarBrand><nuxt-link to="/contact">Contact page</nuxt-link></NavbarBrand>
          <NavbarBrand><nuxt-link to="/users">Users page</nuxt-link></NavbarBrand>
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
