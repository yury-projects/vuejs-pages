<template>
    <div>
        <p>Completed Tasks: {{todos.filter(todo => {return todo.completed === true}).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => {return todo.completed === false}).length}}</p>
        <!-- we are now passing the data to the todo component to render the todo list -->
        <!-- <todo v-for="todo in todos" v-bind:todo="todo" :key="todo.id"></todo> -->
        <todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" v-bind:todo="todo" :key="todo.id"></todo>
    </div>
</template>

<script type='text/javascript'>

import sweetalert from 'sweetalert';
import Todo from './Todo';

export default {
    components: {
        Todo
    },
    props: ['todos'],
    methods: {
        deleteTodo(todo) {
            sweetalert({
                title: 'Are you sure?',
                text: 'This To-Do will be permanently deleted!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Yes, delete it!',
                closeOnConfirm: false,
            },
            () => {
                this.$http.delete('http://localhost:8080/api/v1/todos/' + todo.id).then(response => {
                    const todoIndex = this.todos.indexOf(todo);
                    this.todos.splice(todoIndex, 1);
                    sweetalert('Deleted!', 'Your To-Do has been deleted.', 'success');
                }, response => {
                    console.log(response)
                })
            });
        },
        completeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos[todoIndex].completed = true;
            sweetalert('Success!', 'To-Do completed!', 'success');
        },
    }
};

</script>

<style scoped>
p.tasks {
  text-align: center;
}
</style>