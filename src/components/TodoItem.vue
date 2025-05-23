<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('delete-todo', todo.id)">Sil</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
button {
  background-color: #ff5c5c;
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
}
</style>
