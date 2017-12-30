<template>
	<div id='todoApp'>
        <h1 class='ui centered header'>My Todo App!</h1>
        
        <div class='ui three column centered grid'>
            <div class='column'>
                <todo-list v-bind:todos="todos"></todo-list>
                <create-todo v-on:create-todo="createTodo"></create-todo>
            </div>
        </div>
	</div>
</template>

<script type='text/javascript'>

import sweetalert from 'sweetalert';
import TodoList from './Todo/TodoList.vue'
import CreateTodo from './Todo/CreateTodo.vue';

export default {
    name: 'todoApp',
	components: {
        TodoList,
        CreateTodo
    },
    data() {
        return {
            todos: []
        }
    },
    methods: {
        createTodo(newTodo) {
            this.$http.post('http://localhost:8080/api/v1/todos', {title: newTodo.title, completed: false}).then(response => {
                this.todos.push(newTodo);
                sweetalert('Success!', 'To-Do created!', 'success');
            }, response => {

            })
        },
    },
    created() {
        this.$http.get('http://localhost:8080/api/v1/todos').then(response => {

            this.todos = response.body.data;
            
        }, response => {

            sweetalert("Failure!", "Unable to retrieve Todos list.\nPlease check your auth token.", "error")
        });
    }
}
</script>

<style>

/* *, *::before, *::after {
	box-sizing: border-box;
}

#app {
	max-width: 400px;
	margin: 0 auto;
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: blue;
}

h1 {
	text-align: center;
} */
</style>