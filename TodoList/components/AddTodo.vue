<template>
  <form @submit.prevent="submitTodo">
    <input v-model="newTodo" placeholder="Yeni görev ekle..." />
    <button type="submit">Ekle</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    submitTodo() {
      this.$emit('add-todo', this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
input {
  flex: 1;
  padding: 8px;
}
button {
  padding: 8px 12px;
}
</style>
