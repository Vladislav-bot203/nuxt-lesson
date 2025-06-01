<template>
    <div v-if="users">
        <div v-for="user in users" :key="user.id" class="container__test">
            <span>Username: {{ user?.username }}</span><br>
            <span>Email: {{ user?.email }}</span>
        </div>
        <span>Status: {{ status }}</span>
    </div>
</template>

<script lang="ts" setup>
const { data: users, status } = await useFetch("/api/users", {
    method: "GET"
})
</script>

<style lang="scss" scoped>
.container__test {
    border: 1px solid $primary;
    width: 50%;
    margin: auto;
}
</style>