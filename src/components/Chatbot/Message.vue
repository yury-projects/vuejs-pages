<template>
    <div class="message">
        {{ message.text }}
    </div>
</template>

<script type='text/javascript'>

export default {
    name: 'Message',

    props: {
        message: {
            type: Object,
            required: true
        }
    },

    computed: {
        getPosition () {
            
        }
    }
}
</script>

<style scoped>

</style>
