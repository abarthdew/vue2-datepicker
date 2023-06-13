import Vue from 'vue'
import Vuex from 'vuex'

// modules
import datepicker from './datepicker'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        datepicker,
    }
})