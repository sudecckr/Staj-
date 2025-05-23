<template>
  <div class="app">
    <h1>📝 Yapılacaklar Listesi</h1>
    <AddTodo @add-todo="addTodo" />
    <TodoList :todos="todos" @delete-todo="deleteTodo" />
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: { AddTodo, TodoList },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    addTodo(newTodo) {
      if (newTodo.trim()) {
        this.todos.push({ id: Date.now(), text: newTodo })
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: 	#000000;
  margin: 0;
}
.app {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
