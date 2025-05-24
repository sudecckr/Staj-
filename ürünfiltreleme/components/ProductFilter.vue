<template>
  <div>
    <h2>Ürün Arama</h2>
    <input v-model="searchQuery" placeholder="Ürün adı ara..." />

    <ul>
      <li v-for="item in filteredProducts" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      products: [
        { id: 1, name: 'Laptop' },
        { id: 2, name: 'Klavye' },
        { id: 3, name: 'Mouse' },
        { id: 4, name: 'Monitör' },
        { id: 5, name: 'Webcam' }
      ],
      filteredProducts: []
    };
  },
  created() {
    this.filteredProducts = this.products;
  },
  watch: {
    searchQuery(newQuery) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(newQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
input {
  padding: 8px;
  margin-top: 10px;
  width: 250px;
}
ul {
  margin-top: 15px;
}
</style>
