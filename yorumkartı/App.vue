<template>
  <div>
    <h2>Yorumlar</h2>

    <!-- Yorum ekleme alanı -->
    <input v-model="newCommentText" placeholder="Yorumunuzu yazın..." />
    <button @click="addComment">Ekle</button>

    <!-- Yorum kartları -->
    <CommentCard
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
      @delete-comment="deleteComment"
    />
  </div>
</template>

<script>
import CommentCard from './components/CommentCard.vue';

export default {
  components: { CommentCard },
  data() {
    return {
      newCommentText: '',
      comments: [
        { id: 1, text: 'Vue.js öğrenmek çok keyifli!' },
        { id: 2, text: 'Props ve Emit yapısı oldukça faydalı.' },
        { id: 3, text: 'Bileşenler arasında veri paylaşımı önemli.' }
      ]
    };
  },
  methods: {
    addComment() {
      const trimmed = this.newCommentText.trim();
      if (trimmed) {
        this.comments.push({
          id: Date.now(), // benzersiz ID
          text: trimmed
        });
        this.newCommentText = '';
      }
    },
    deleteComment(id) {
      this.comments = this.comments.filter(comment => comment.id !== id);
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  padding: 30px;
}
input {
  padding: 8px;
  width: 250px;
  margin-right: 10px;
}
button {
  padding: 8px 12px;
}
</style>
