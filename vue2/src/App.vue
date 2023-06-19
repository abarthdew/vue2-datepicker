<template>
  <div id="app">
    <div class="row">
    <div class="col">
      <simple-date-select @check="check" />
      <value-matching @check="check" />
      <local-setting @check="check" />
      <range-setting @check="check" />
    </div>
    <div class="col mt-5 pt-5">
      <vue-terminal 
        :intro="getIntexEsmJs"
        console-sign=""
        height="1610px"
        @command="false"
      />
    </div>
  </div>
  <select-example @check="check" />
  </div>
</template>

<script>
import SimpleDateSelect from './components/SimpleDateSelect.vue';
import ValueMatching from './components/ValueMatching.vue';
import LocalSetting from './components/LocalSetting.vue';
import RangeSetting from './components/RangeSetting.vue';
import SelectExample from './components/SelectExample.vue';
import VueTerminal from 'vue-terminal-ui'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    SimpleDateSelect,
    ValueMatching,
    LocalSetting,
    RangeSetting,
    SelectExample,
    VueTerminal,
  },
  computed: {
    ...mapGetters({
      getIntexEsmJs: 'datepicker/getIntexEsmJs',
    }),
  },
  methods: {
    check(item) {
      console.log(item)
    }
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
