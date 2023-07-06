<template>
  <div>

    <h2>3. local setting</h2>
    
    <h6>YYYY-MM-DD</h6>
    <date-picker 
      v-model="setDatepicker.yyyymmdd"
      :lang="lang"
      type="date"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.yyyymmdd)">
      Check
    </b-button>
    
    <h6>YYYY-MM</h6>
    <date-picker 
      v-model="setDatepicker.yyyymm"
      :lang="lang"
      type="month"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.yyyymm)">
      Check
    </b-button>
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LocalSetting',
  computed: {
    ...mapGetters({
      getDatepicker: 'datepicker/getDatepicker',
    }),
    setDatepicker() {
      return this.getDatepicker('localSetting')
    }
  },
  data() {
    return {
      lang: {
        days: ['일', '월', '화', '수', '목', '금', '토'],
        months: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        yearFormat: 'YYYY년',
        monthFormat: 'MM월',
        monthBeforeYear: false,
      },
    }
  }
}
</script>