<template>
    <div>
        <h1>Contacts</h1>

        <form class="d-flex flex-column align-items-center" @submit.prevent="submitForm">
            <input id="name" v-model="name" type="text" class="form-control" placeholder="Enter name"><br>
            <input id="email"  v-model="email" type="email" class="form-control" placeholder="Enter email"><br>
            <textarea id="message" v-model="message" class="form-control" placeholder="Enter message"></textarea><br>
            <button type="submit" class="btn btn-primary" :disabled="isSub">{{ isSub ?  "...Submitting" : "Submit"}}</button>
        </form>

        <p v-if="resMessage">
            {{ resMessage }}
        </p>
    </div>
</template>

<script setup>
useHead({
    title: "Contacts",
    meta: [
        { name: 'description', content: 'Contact page' }
    ]
})

const name = ref('');
const email = ref('');
const message = ref('');
const isSub = ref(false);
const resMessage = ref('');

async function submitForm() {
    isSub.value = true;
    resMessage.value = '';

    const { error } = await useFetch('/api/contacts', {
        method: 'post',
        body: {
            name: name.value,
            email: email.value,
            message: message.value
        }
    });

    if (error.value) {
        resMessage.value = 'Error: ' + error.value;
    } else {
        resMessage.value = 'All is success';
        name.value = '';
        email.value = '';
        message.value = '';
    }
    isSub.value = false;
}
</script>

<style>
</style>