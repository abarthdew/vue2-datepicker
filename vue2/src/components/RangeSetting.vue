<template>
  <div>

    <h2>4. Range Setting</h2>

    <h6>Date Range</h6>
    <date-picker 
      v-model="setDatepicker.dateRange"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.dateRange)">
      Check
    </b-button>
  
    <h6>Datetime Range</h6>
    <date-picker 
      v-model="setDatepicker.datetimeRange"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.datetimeRange)">
      Check
    </b-button>
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RangeSetting',
  computed: {
    ...mapGetters({
      getDatepicker: 'datepicker/getDatepicker',
    }),
    setDatepicker() {
      return this.getDatepicker('rangeSetting')
    }
  },
}
</script>