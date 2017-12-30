<template>
    <div>
        <h3>Chat with Slack Bot</h3>
        
        <div class="actions">
            <message v-for="message in messages" :message="message" :key="message.id"/>
        </div>
    </div>
</template>

<script type='text/javascript'>

import Message from './Message.vue'

export default {
    name: 'chat',
    components: {
        Message
    },
    props: {
        messages: {
            type: Array,
            required: true
        }
    },

    created () {
      // todo: LOAD MESSAGES
    },
  }
</script>

<style scoped>
</style>
