export default {
  namespace: true,
  state: {
    simpeDateSelect: {
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
    test: state => {
      console.log(state)
      return state
    }
  }
}