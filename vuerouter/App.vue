<template>
  <div>
    <nav>
      <router-link to="/">Anasayfa</router-link> |
      <router-link to="/about">Hakkında</router-link> |
      <router-link to="/contact">İletişim</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  margin-bottom: 20px;
  font-size: 18px;
}
router-link {
  margin-right: 12px;
}
</style>
