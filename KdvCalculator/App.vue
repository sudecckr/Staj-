<template>
  <div id="app">
    <KdvCalculator />
  </div>
</template>

<script>
import KdvCalculator from './components/KdvCalculator.vue';

export default {
  name: 'App',
  components: {
    KdvCalculator
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  padding: 30px;
}
</style>
