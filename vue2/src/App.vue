<template>
  <div id="app">
    <simple-date-select />
    <value-matching />
    <local-setting />
    <range-setting />
    <select-example />
  </div>
</template>

<script>
import SimpleDateSelect from './components/SimpleDateSelect.vue';
import ValueMatching from './components/ValueMatching.vue';
import LocalSetting from './components/LocalSetting.vue';
import RangeSetting from './components/RangeSetting.vue';
import SelectExample from './components/SelectExample.vue';

export default {
  name: 'App',
  components: {
    SimpleDateSelect,
    ValueMatching,
    LocalSetting,
    RangeSetting,
    SelectExample,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 5px 50px 50px;
}
h2 { padding-top: 30px; }
h6 { padding-top: 15px; }
</style>
