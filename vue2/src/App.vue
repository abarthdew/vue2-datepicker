<template>
  <div id="app">
    <date-picker-filter />
  </div>
</template>

<script>
import DatePickerFilter from './store/datepicker/DatePickerFilter.vue';

export default {
  name: 'App',
  components: {
    DatePickerFilter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 50px;
}
</style>
