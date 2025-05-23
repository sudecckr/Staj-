<template>
  <ul>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete-todo="$emit('delete-todo', todo.id)"
    />
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  components: {
    TodoItem
  }
}
</script>
