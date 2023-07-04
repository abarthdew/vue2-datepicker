<template>
  <div id="app">
    <div class="row">
    <div class="col-6">
      <simple-date-select @check="check" />
      <value-matching @check="check" />
      <local-setting @check="check" />
      <range-setting @check="check" />
      <select-example @check="check" />
    </div>
    <div class="col-6 mt-5 pt-5">
      <markdown-it-vue class="md-body" :content="getIntexEsmJs" :options="options" />
    </div>
  </div>
  </div>
</template>

<script>
import SimpleDateSelect from './components/SimpleDateSelect.vue';
import ValueMatching from './components/ValueMatching.vue';
import LocalSetting from './components/LocalSetting.vue';
import RangeSetting from './components/RangeSetting.vue';
import SelectExample from './components/SelectExample.vue';
import { mapGetters } from 'vuex'
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: 'App',
  components: {
    SimpleDateSelect,
    ValueMatching,
    LocalSetting,
    RangeSetting,
    SelectExample,
    MarkdownItVue,
  },
  computed: {
    ...mapGetters({
      getIntexEsmJs: 'datepicker/getIntexEsmJs',
    }),
  },
  data() {
    return {
      options: {
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        }
      },
    }
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
