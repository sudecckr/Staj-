<template>
  <div id="app">
    <ProductFilter />
  </div>
</template>

<script>
import ProductFilter from './components/ProductFilter.vue';

export default {
  name: 'App',
  components: {
    ProductFilter
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  padding: 30px;
}
</style>
