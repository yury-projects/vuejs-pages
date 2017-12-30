<template>
	<div id='chatbotApp'>
        <h1 class="ui centered header">My ChatBot App!</h1>
        
        <div class="ui four column centered grid">
            <div class="column">
                <div class="ui chatroom">
                    <chat v-bind:messages="messages"></chat>
                    <div class="talk">
                        <input type="text" maxlength="200" v-model="text" @keyup.enter="submitMessage">
                        <div class="ui send button">
                            <i class="ui icon comment"></i>
                            Send
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        
	</div>
</template>

<script type='text/javascript'>

import sweetalert from 'sweetalert';
import Chat from './Chatbot/Chat.vue'
// import Message from './Chatbot/Message.vue';

export default {
    name: 'chatbotApp',
	components: {
        Chat,
        // Message
    },
    data() {
        return {
            text: "",
            id: 2,
            messages: [{'text': 'Tell me something', 'created': new Date(), 'id': 1}]
        }
    },
    methods: {
        submitMessage() {
            // console.log("Submitted")
            // console.log(this.text)
            this.messages.push({'text': this.text, 'created': new Date(), 'id': this.id})
            this.text = ''
            this.id++
        }
        // createTodo(newTodo) {
        //     this.$http.post('http://localhost:8080/api/v1/todos', {title: newTodo.title, completed: false}).then(response => {
        //         this.todos.push(newTodo);
        //         sweetalert('Success!', 'To-Do created!', 'success');
        //     }, response => {

        //     })
        // },
    },
    created() {
        // this.$http.get('http://localhost:8080/api/v1/todos').then(response => {

        //     this.todos = response.body.data;
            
        // }, response => {

        //     sweetalert("Failure!", "Unable to retrieve Todos list.\nPlease check your auth token.", "error")
        // });
    }
}
</script>

<style>

</style>