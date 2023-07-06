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
    `
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
      yyyymm: date,
      yyyyrange: ['2012', '2013'],
      yyyymmddhhmmssrange: ['2023-07-27 12:00:00', '2023-07-27 12:00:00'],
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
      lang: {
        days: ['일', '월', '화', '수', '목', '금', '토'],
        months: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        yearFormat: 'YYYY년',
        monthFormat: 'MM월',
        monthBeforeYear: false,
      },
      item: {
        yyyymmdd: {
          text: 'YYYY-MM-DD',
          dateSelected: dateSelected,
          format: 'YYYY-MM-DD',
          valueType: 'YYYY-MM-DD',
          type: 'date',
          range: false,
        },
        yyyymm: {
          text: 'YYYY-MM',
          dateSelected: dateSelected,
          format: 'YYYY-MM',
          valueType: 'YYYY-MM',
          type: 'month',
          range: false,
        },
        yyyy: {
          text: 'YYYY',
          dateSelected: dateSelected,
          format: 'YYYY',
          valueType: 'YYYY',
          type: 'year',
          range: false,
        },
        yyyymmddhhmmss: {
          text: 'YYYY-MM-DD HH:mm:SS',
          dateSelected: date,
          format: 'YYYY-MM-DD hh:mm:ss',
          valueType: 'YYYY-MM-DD hh:mm:ss',
          type: 'datetime',
          range: false,
        },
        hhmmss: {
          text: 'HH:mm:SS',
          dateSelected: date,
          format: 'hh:mm:ss',
          valueType: 'hh:mm:ss',
          type: 'time',
          range: false,
        },
        hhmmampm: {
          text: 'HH:mm [AM/PM]',
          dateSelected: date,
          format: 'hh:mm a',
          valueType: 'hh:mm a',
          type: 'time',
          range: false,
        },
        yyyymmddrange: {
          text: 'YYYY-MM-DD[Range]',
          dateSelected: [dateSelected, dateSelected],
          format: 'YYYY-MM-DD',
          valueType: 'YYYY-MM-DD',
          type: 'date',
          range: true,
        },
        yyyymmddrangeslot: {
          text: 'YYYY-MM-DD[Range/Slot]',
          dateSelected: [dateSelected, dateSelected],
          format: 'YYYY-MM-DD',
          valueType: 'YYYY-MM-DD',
          type: 'date',
          range: true,
        },
        yyyymmrange: {
          text: 'YYYY-MM[Range]',
          dateSelected: [dateSelected, dateSelected],
          format: 'YYYY-MM',
          valueType: 'YYYY-MM',
          type: 'month',
          range: true,
        },
        yyyyrange: {
          text: 'YYYY[Range]',
          dateSelected: [dateSelected, dateSelected],
          format: 'YYYY',
          valueType: 'YYYY',
          type: 'year',
          range: true,
        },
        yyyymmddhhmmssrange: {
          text: 'YYYY-MM-DD HH:mm:SS[Range]',
          dateSelected: [date, date],
          format: 'YYYY-MM-DD hh:mm:ss',
          valueType: 'YYYY-MM-DD hh:mm:ss',
          type: 'datetime',
          range: true,
        },
        hhmmssrange: {
          text: 'HH:mm:SS[Range]',
          dateSelected: [date, date],
          format: 'hh:mm:ss',
          valueType: 'hh:mm:ss',
          type: 'time',
          range: true,
        },
        hhmmampmrange: {
          text: 'HH:mm [AM/PM][Range]',
          dateSelected: [date, date],
          format: 'hh:mm a',
          valueType: 'hh:mm a',
          type: 'time',
          range: true,
        },
      }
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
    getDateOptions: state => {
      const { selectExample } = state
      const keyList = Object.keys(selectExample.item)
      const itemArray = [];
      for (let i=0; i<keyList.length; i++) {
        itemArray.push(selectExample.item[keyList[i]])
      }
      return itemArray;
    }
  },
  mutations: {},
  actions: {},
}