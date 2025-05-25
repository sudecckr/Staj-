<template>
  <div class="container">
    <h2>Yorum Ekle</h2>

    <form @submit.prevent="submitComment">
      <input v-model="name" placeholder="Adınız" />
      <textarea v-model="comment" placeholder="Yorumunuz"></textarea>
      <button type="submit">Gönder</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <div class="comment" v-for="(item, index) in comments" :key="index">
      <h4>{{ item.name }}</h4>
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      comment: '',
      comments: [],
      errorMessage: ''
    }
  },
  methods: {
    submitComment() {
      if (!this.name || !this.comment) {
        this.errorMessage = 'Lütfen ad ve yorum alanlarını doldurunuz.'
        return
      }

      this.comments.push({
        name: this.name,
        text: this.comment
      })

      this.name = ''
      this.comment = ''
      this.errorMessage = ''
    }
  }
}
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
input, textarea {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}
button {
  padding: 10px 20px;
}
.error {
  color: red;
  font-weight: bold;
}
.comment {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
}
</style>

