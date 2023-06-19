<template>
  <div>

    <h2>2. value matching</h2>

    <h6>new Date()</h6>
    <date-picker 
      v-model="setDatepicker.basic"
      :disabled="true"
    />
    <b-button class="m-1" variant="primary" @click="check(setDatepicker.basic)">
      Check
    </b-button>

    <h6>get new Date() value as 'YYYY-MM-DD'</h6>
    <date-picker 
      v-model="setDatepicker.getValue"
      value-type="YYYY-MM-DD"
      :disabled="true"
    />
    <b-button class="m-1" variant="primary" @click="check(setDatepicker.getValue)">
      Check
    </b-button>
  
    <h6>new Date(2019, 9, 9)</h6>
    <date-picker 
      v-model="setDatepicker.setDate"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.setDate)">
      Check
    </b-button>
  
    <h6>new Date(2019, 9, 9).getTime()</h6>
    <date-picker 
      v-model="setDatepicker.getTime"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.getTime)">
      Check
    </b-button>
  
    <h6>2019-10-09</h6>
    <date-picker 
      v-model="setDatepicker.yyyymmdd"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.yyyymmdd)">
      Check
    </b-button>
  
    <h6>09/10/2019</h6>
    <date-picker 
      v-model="setDatepicker.ddmmyyyy"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.ddmmyyyy)">
      Check
    </b-button>
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ValueMatching',
  computed: {
    ...mapGetters({
      getDatepicker: 'datepicker/getDatepicker',
    }),
    setDatepicker() {
      return this.getDatepicker('valueMatching')
    }
  },
}
</script>