<template>
  <div id="app">
    <div class="row">
    <div class="col">
      <simple-date-select @check="check" />
      <value-matching @check="check" />
      <local-setting @check="check" />
      <range-setting @check="check" />
    </div>
    <div class="col">
      <code>
        // D:\admin\vue-datepicker\vue2\src\assets\index.esm.js <br>
        value: {},<br>
        valueType: {<br>
          type: String,<br>
          default: 'date' // date, format, timestamp, or token like 'YYYY-MM-DD'<br>
        },<br>
        type: {<br>
          type: String,<br>
          // ['date', 'datetime', 'time', 'year', 'month', 'week']<br>
          default: 'date'<br>
        },<br>
        format: {<br>
          type: String<br>
        },<br>
        formatter: {<br>
          type: Object<br>
        },<br>
        range: {<br>
          type: Boolean,<br>
          default: false<br>
        },<br>
        multiple: {<br>
          type: Boolean,<br>
          default: false<br>
        },<br>
        rangeSeparator: {<br>
          type: String<br>
        },<br>
        lang: {<br>
          type: [String, Object]<br>
        },<br>
        placeholder: {<br>
          type: String,<br>
          default: ''<br>
        },<br>
        editable: {<br>
          type: Boolean,<br>
          default: true<br>
        },<br>
        disabled: {<br>
          type: Boolean,<br>
          default: false<br>
        },<br>
        clearable: {<br>
          type: Boolean,<br>
          default: true<br>
        },<br>
        prefixClass: {<br>
          type: String,<br>
          default: 'mx'<br>
        },<br>
        inputClass: {},<br>
        inputAttr: {<br>
          type: Object,<br>
          default: function _default() {<br>
            return {};<br>
          }<br>
        },<br>
        appendToBody: {<br>
          type: Boolean,<br>
          default: true<br>
        },<br>
        open: {<br>
          type: Boolean,<br>
          default: undefined<br>
        },<br>
        popupClass: {},<br>
        popupStyle: {<br>
          type: Object,<br>
          default: function _default() {<br>
            return {};<br>
          }<br>
        },<br>
        inline: {<br>
          type: Boolean,<br>
          default: false<br>
        },<br>
        confirm: {<br>
          type: Boolean,<br>
          default: false<br>
        },<br>
        confirmText: {<br>
          type: String,<br>
          default: 'OK'<br>
        },<br>
        renderInputText: {<br>
          type: Function<br>
        },<br>
        shortcuts: {<br>
          type: Array,<br>
          validator: function validator(value) {<br>
            return Array.isArray(value) && value.every(function (v) {<br>
              return isObject(v) && typeof v.text === 'string' && typeof v.onClick === 'function';<br>
            });<br>
          },<br>
          default: function _default() {<br>
            return [];<br>
          }<br>
        }<br>
      </code>
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

export default {
  name: 'App',
  components: {
    SimpleDateSelect,
    ValueMatching,
    LocalSetting,
    RangeSetting,
    SelectExample,
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
