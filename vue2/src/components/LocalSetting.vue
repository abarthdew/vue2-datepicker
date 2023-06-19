<template>
  <div>

    <h2>3. local setting</h2>
    
    <h6>YYYY-MM-DD</h6>
    <date-picker 
      v-model="setDatepicker.yyyymmdd"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.yyyymmdd)">
      Check
    </b-button>
    
    <h6>YYYY-MM</h6>
    <date-picker 
      v-model="setDatepicker.yyyymm"
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
}
</script>