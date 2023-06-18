<template>
  <div>

    <h2>1. simple date select</h2>

    <h6>YYYY-MM-DD</h6>
    <date-picker 
      v-model="yyyymmdd"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', yyyymmdd)">
      Check
    </b-button>
    
    <h6>YYYY-MM-DD HH:mm:SS</h6>
    <date-picker 
      v-model="yyyymmddhhmmss"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', yyyymmddhhmmss)">
      Check
    </b-button>
    
    <h6>YYYY-MM</h6>
    <date-picker 
      v-model="yyyymm"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', yyyymm)">
      Check
    </b-button>
    
    <h6>YYYY</h6>
    <date-picker 
      v-model="yyyy"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', yyyy)">
      Check
    </b-button>
    
    <h6>HH:mm:SS</h6>
    <date-picker 
      v-model="hhmmss"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', hhmmss)">
      Check
    </b-button>
    
    <h6>HH:mm [AM/PM]</h6>
    <date-picker 
      v-model="hhmmampm"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', hhmmampm)">
      Check
    </b-button>
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SimpleDateSelect',
  data() {
    return {
      yyyymmdd: new Date(),
      yyyymmddhhmmss: '',
      yyyymm: '',
      yyyy: '',
      hhmmss: '',
      hhmmampm: '',
    }
  },
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