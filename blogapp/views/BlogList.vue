<template>
  <div>
    <h3>Blog Başlıkları</h3>
    <ul>
      <li v-for="post in blogPosts" :key="post.id">
        <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogPosts: [
        { id: 1, title: 'Vue Router’a Giriş' },
        { id: 2, title: 'Dinamik Rotalar ve Parametreler' },
        { id: 3, title: 'Programatik Yönlendirme' }
      ]
    }
  }
}
</script>
