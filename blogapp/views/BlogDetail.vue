<template>
  <div v-if="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.content }}</p>
    <button @click="goBack">← Geri Dön</button>
  </div>
  <div v-else>
    <p>Blog bulunamadı.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null,
      allPosts: [
        { id: '1', title: 'Vue Router’a Giriş', content: 'Vue Router temel yapı taşlarını anlatır...' },
        { id: '2', title: 'Dinamik Rotalar', content: 'Parametreli URL yapıları burada açıklanır...' },
        { id: '3', title: 'Programatik Navigasyon', content: 'Kod ile yönlendirme teknikleri burada açıklanır...' }
      ]
    }
  },
  created() {
    const id = this.$route.params.id
    this.post = this.allPosts.find(p => p.id === id)
  },
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>
