<template>
    <div>
        <ul>
            <li v-for="todo in todos" :key="todo.text">
                <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)">{{ todo.text }}
            </li>
        </ul>
        <input placeholder="add a task here" @keyup.enter="addTodo" >
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        computed: {
            todos() {
                return this.$store.state.todos.list;
            }
        },
        methods: {
            addTodo(event) {
                this.$store.commit('todos/add', event.target.value);
            },
            ...mapMutations({
                toggleTodo: 'todos/toggle'
            })
        }
    }
</script>