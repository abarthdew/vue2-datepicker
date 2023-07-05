const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const getdate = date.getDate();
const dateSelected = date.toISOString().split('T')[0];

export default {
  namespaced: true,
  state: {
    indexEsmJs:
    "```javascript\n" +
    `// props in [/assets/index.esm.js]
    value: {},  
    valueType: { // Data output type
      type: String,  
      default: 'date' // date, format, timestamp, or token like 'YYYY-MM-DD'  
    },  
    type: { // Calendar UI type
      type: String, // ['date', 'datetime', 'time', 'year', 'month', 'week']  
      default: 'date'  
    },  
    format: { // Data show type
      type: String  
    },  
    formatter: {  
      type: Object  
    },  
    range: {
      type: Boolean,  
      default: false  
    },  
    multiple: {  
      type: Boolean,  
      default: false  
    },  
    rangeSeparator: {  
      type: String  
    },  
    lang: {  
      type: [String, Object]  
    },  
    placeholder: {  
      type: String,  
      default: ''  
    },  
    editable: {  
      type: Boolean,  
      default: true  
    },  
    disabled: {  
      type: Boolean,  
      default: false  
    },  
    clearable: {  
      type: Boolean,  
      default: true  
    },  
    prefixClass: {  
      type: String,  
      default: 'mx'  
    },  
    inputClass: {},  
    inputAttr: {  
      type: Object,  
      default: function _default() {  
        return {};  
      }  
    },  
    appendToBody: {  
      type: Boolean,  
      default: true  
    },  
    open: {  
      type: Boolean,  
      default: undefined  
    },  
    popupClass: {},  
    popupStyle: {  
      type: Object,  
      default: function _default() {  
        return {};  
      }  
    },  
    inline: {  
      type: Boolean,  
      default: false  
    },  
    confirm: {  
      type: Boolean,  
      default: false  
    },  
    confirmText: {  
      type: String,  
      default: 'OK'  
    },  
    renderInputText: {  
      type: Function  
    },  
    shortcuts: {  
      type: Array,  
      validator: function validator(value) {  
        return Array.isArray(value) && value.every(function (v) {  
          return isObject(v) && typeof v.text === 'string' && typeof v.onClick === 'function';  
        });  
      },  
      default: function _default() {  
        return [];  
      }  
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
      getValue: date.toISOString().split('T')[0],
      getValueAsString: `${year}-${month >= 10 ? month : '0' + month}-${getdate >= 10 ? getdate : '0' + getdate}`, // 'YYYY-MM-DD' to Stirng
      setDate: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
      getTime: new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime(),
      yyyymmdd: date.toLocaleString().split(',')[0],
      ddmmyyyy: date.toLocaleDateString(),
    },
    localSetting: {
      yyyymmdd: date,
      yyyymm: date,
    },
    rangeSetting: {
      dateRange: [date, date],
      datetimeRange: [date, date],
      datetime1: date,
      datetime2: date,
    },
    selectExample: {
      dateSelected: date,
      item: [
        {
          option: 'YYYY-MM-DD',
          dateSelected: dateSelected,
          format: 'YYYY-MM-DD',
          valueType: 'YYYY-MM-DD',
          type: 'date',
          range: false,
        },
        {
          option: 'YYYY-MM',
          dateSelected: dateSelected,
          format: 'YYYY-MM',
          valueType: 'YYYY-MM',
          type: 'month',
          range: false,
        },
        {
          option: 'YYYY',
          dateSelected: dateSelected,
          format: 'YYYY',
          valueType: 'YYYY',
          type: 'year',
          range: false,
        },
        {
          option: 'YYYY-MM-DD HH:mm:SS',
          dateSelected: dateSelected,
          format: 'YYYY-MM hh:mm:ss',
          valueType: 'YYYY-MM hh:mm:ss',
          type: 'datetime',
          range: false,
        },
        {
          option: 'HH:mm:SS',
          dateSelected: dateSelected,
          format: 'hh:mm:ss',
          valueType: 'hh:mm:ss',
          type: 'time',
          range: false,
        },
        {
          option: 'HH:mm [AM/PM]',
          dateSelected: dateSelected,
          format: 'hh:mm a',
          valueType: 'hh:mm a',
          type: 'time',
          range: false,
        },
        {
          option: 'YYYY-MM-DD[Range]',
          dateSelected: [dateSelected, dateSelected],
          format: 'YYYY-MM-DD',
          valueType: 'YYYY-MM-DD',
          type: 'date',
          range: true,
        },
        {
          option: 'YYYY-MM-DD[Range/Slot]',
          dateSelected: [dateSelected, dateSelected],
          format: 'YYYY-MM-DD',
          valueType: 'YYYY-MM-DD',
          type: 'date',
          range: true,
        },
        {
          option: 'YYYY-MM[Range]',
          dateSelected: [dateSelected, dateSelected],
          format: 'YYYY-MM',
          valueType: 'YYYY-MM',
          type: 'month',
          range: true,
        },
        {
          option: 'YYYY[Range]',
          dateSelected: [dateSelected, dateSelected],
          format: 'YYYY',
          valueType: 'YYYY',
          type: 'year',
          range: true,
        },
        {
          option: 'YYYY-MM-DD HH:mm:SS[Range]',
          dateSelected: [dateSelected, dateSelected],
          format: 'YYYY-MM-DD hh:mm:ss',
          valueType: 'YYYY-MM-DD hh:mm:ss',
          type: 'datetime',
          range: true,
        },
        {
          option: 'HH:mm:SS[Range]',
          dateSelected: [dateSelected, dateSelected],
          format: 'hh:mm:ss',
          valueType: 'hh:mm:ss',
          type: 'time',
          range: true,
        },
        {
          option: 'HH:mm [AM/PM][Range]',
          dateSelected: [dateSelected, dateSelected],
          format: 'hh:mm a',
          valueType: 'hh:mm a',
          type: 'time',
          range: true,
        }
      ],
    },
  },
  getters: {
    getIntexEsmJs: state => {
      const { indexEsmJs } = state
      return indexEsmJs
    },
    getDatepicker: state => componentName => {
      return state[componentName]
    },
  },
  mutations: {},
  actions: {},
}