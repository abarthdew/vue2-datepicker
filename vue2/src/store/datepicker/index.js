const date = new Date();

export default {
  namespaced: true,
  state: {
    indexEsmJs:
    `// props in [/assets/index.esm.js]<br>
    value: {},<br>
    valueType: {<br>
    - type: String,<br>
    - default: 'date' // date, format, timestamp, or token like 'YYYY-MM-DD'<br>
    },<br>
    type: {<br>
    - type: String, // ['date', 'datetime', 'time', 'year', 'month', 'week']<br>
    - default: 'date'<br>
    },<br>
    format: {<br>
    - type: String<br>
    },<br>
    formatter: {<br>
    - type: Object<br>
    },<br>
    range: {<br>
    - type: Boolean,<br>
    - default: false<br>
    },<br>
    multiple: {<br>
    - type: Boolean,<br>
    - default: false<br>
    },<br>
    rangeSeparator: {<br>
    - type: String<br>
    },<br>
    lang: {<br>
    - type: [String, Object]<br>
    },<br>
    placeholder: {<br>
    - type: String,<br>
    - default: ''<br>
    },<br>
    editable: {<br>
    - type: Boolean,<br>
    - default: true<br>
    },<br>
    disabled: {<br>
    - type: Boolean,<br>
    - default: false<br>
    },<br>
    clearable: {<br>
    - type: Boolean,<br>
    - default: true<br>
    },<br>
    prefixClass: {<br>
    - type: String,<br>
    - default: 'mx'<br>
    },<br>
    inputClass: {},<br>
    inputAttr: {<br>
    - type: Object,<br>
    - default: function _default() {<br>
    -   return {};<br>
    - }<br>
    },<br>
    appendToBody: {<br>
    - type: Boolean,<br>
    - default: true<br>
    },<br>
    open: {<br>
    - type: Boolean,<br>
    - default: undefined<br>
    },<br>
    popupClass: {},<br>
    popupStyle: {<br>
    - type: Object,<br>
    - default: function _default() {<br>
    -   return {};<br>
    - }<br>
    },<br>
    inline: {<br>
    - type: Boolean,<br>
    - default: false<br>
    },<br>
    confirm: {<br>
    - type: Boolean,<br>
    - default: false<br>
    },<br>
    confirmText: {<br>
    - type: String,<br>
    - default: 'OK'<br>
    },<br>
    renderInputText: {<br>
    - type: Function<br>
    },<br>
    shortcuts: {<br>
    - type: Array,<br>
    - validator: function validator(value) {<br>
    -   return Array.isArray(value) && value.every(function (v) {<br>
    -     return isObject(v) && typeof v.text === 'string' && typeof v.onClick === 'function';<br>
    -   });<br>
    - },<br>
    - default: function _default() {<br>
    -   return [];<br>
    - }<br>
    }`,
    simpleDateSelect: {
      yyyymmdd: date,
      yyyymmddhhmmss: date,
      yyyymm: date,
      yyyy: date,
      hhmmss: date,
      hhmmampm: date,
    },
    valueMatching: {
      basic: date,
      getValue: date,
      setDate: date,
      getTime: date,
      yyyymmdd: date,
      ddmmyyyy: date,
    },
    localSetting: {
      yyyymmdd: date,
      yyyymm: date,
    },
    rangeSetting: {
      dateRange: date,
      datetimeRange: date,
    },
    selectExample: {
      dateSelected: date,
    },
  },
  getters: {
    getIntexEsmJs: state => {
      const { indexEsmJs } = state
      return indexEsmJs
    },
    getDatepicker: state => componentName => {
      return state[componentName]
    }
  },
  mutations: {},
  actions: {},
}