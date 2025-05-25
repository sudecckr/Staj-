<template>
  <div class="card">
    <p>{{ comment.text }}</p>
    <button @click="$emit('delete-comment', comment.id)">Sil</button>
  </div>
</template>

<script>
export default {
  props: {
    comment: Object
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
}
button {
  margin-top: 6px;
  background: #e74c3c;
  color: white;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
