export default {
  namespaced: true,
  state: {
    simpleDateSelect: {
      yyyymmdd: new Date(),
      yyyymmddhhmmss: '',
      yyyymm: '',
      yyyy: '',
      hhmmss: '',
      hhmmampm: '',
    },
    valueMatching: {
      basic: '',
      getValue: '',
      setDate: '',
      getTime: '',
      yyyymmdd: '',
      ddmmyyyy: '',
    },
    localSetting: {
      yyyymmdd: '',
      yyyymm: '',
    },
    rangeSetting: {
      dateRange: '',
      datetimeRange: '',
    },
    selectExample: {
      dateSelected: new Date(),
    },
  },
  getters: {
    getDatepicker: state => componentName => {
      return state[componentName]
    }
  },
  mutations: {},
  actions: {},
}