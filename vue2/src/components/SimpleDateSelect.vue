<template>
  <div>

    <h2>1. simple date select</h2>

    <h6>YYYY-MM-DD</h6>
    <date-picker 
      v-model="setDatepicker.yyyymmdd"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.yyyymmdd)">
      Check
    </b-button>
    
    <h6>YYYY-MM-DD HH:mm:SS</h6>
    <date-picker 
      v-model="setDatepicker.yyyymmddhhmmss"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.yyyymmddhhmmss)">
      Check
    </b-button>
    
    <h6>YYYY-MM</h6>
    <date-picker 
      v-model="setDatepicker.yyyymm"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.yyyymm)">
      Check
    </b-button>
    
    <h6>YYYY</h6>
    <date-picker 
      v-model="setDatepicker.yyyy"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.yyyy)">
      Check
    </b-button>
    
    <h6>HH:mm:SS</h6>
    <date-picker 
      v-model="setDatepicker.hhmmss"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.hhmmss)">
      Check
    </b-button>
    
    <h6>HH:mm [AM/PM]</h6>
    <date-picker 
      v-model="setDatepicker.hhmmampm"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.hhmmampm)">
      Check
    </b-button>
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SimpleDateSelect',
  computed: {
    ...mapGetters({
      getDatepicker: 'datepicker/getDatepicker',
    }),
    setDatepicker() {
      return this.getDatepicker('simpleDateSelect')
    }
  },
}
</script>