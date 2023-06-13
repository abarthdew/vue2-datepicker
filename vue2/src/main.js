import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// store
import store from './store'

// vue 영역 밖에서 vue 내장 api 사용하기 위해 export 처리
export default new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
