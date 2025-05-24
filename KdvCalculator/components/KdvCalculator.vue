<template>
  <div>
    <h2>KDV Hesaplama</h2>
    <input v-model.number="price" type="number" placeholder="Fiyat giriniz" />
    <p>KDV (%18): {{ kdv.toFixed(2) }} ₺</p>
    <p>Toplam: {{ total.toFixed(2) }} ₺</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0
    };
  },
  computed: {
    kdv() {
      return this.price * 0.18;
    },
    total() {
      return this.price + this.kdv;
    }
  }
};
</script>

<style scoped>
input {
  padding: 8px;
  margin-top: 10px;
}
</style>
