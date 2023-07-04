<template>
  <div>

    <h2>2. value matching</h2>

    <h6>new Date()</h6>
    <small>: as option added, cannot see v-model value.</small><br>
    <small>: If you delete date-picker options, You can see v-model value as format 'YYYY-MM-DD'.</small><br>
    <date-picker 
      v-model="setDatepicker.basic"
      value-type="YYYY-MM-DD"
      type="date"
      format="YYYY-MM-DD"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.basic)">
      Check
    </b-button>

    <h6>get new Date() value as 'YYYY-MM-DD'</h6>
    <date-picker 
      v-model="setDatepicker.getValue"
      value-type="YYYY-MM-DD"
      type="date"
      format="YYYY-MM-DD"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.getValue)">
      Check
    </b-button>

    <h6>get new Date() value as 'YYYY-MM-DD' to String</h6>
    <date-picker 
      v-model="setDatepicker.getValueAsString"
      value-type="YYYY-MM-DD"
      format="YYYY-MM-DD"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.getValueAsString)">
      Check
    </b-button>
  
    <h6>new Date(YYYY, M, D)</h6>
    <date-picker 
      v-model="setDatepicker.setDate"
      value-type="date"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.setDate)">
      Check
    </b-button>
  
    <h6>new Date(YYYY, M, D).getTime()</h6>
    <date-picker 
      v-model="setDatepicker.getTime"
      value-type="timestamp"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.getTime)">
      Check
    </b-button>
 
    <h6>{{ setDatepicker.yyyymmdd }}</h6>
    <small>: cannot see v-model value because of format not supported.</small><br>
    <date-picker 
      v-model="setDatepicker.yyyymmdd"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.yyyymmdd)">
      Check
    </b-button>

    <h6>{{ setDatepicker.ddmmyyyy }}</h6>
    <small>: cannot see v-model value because of format not supported.</small><br>
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
    },
  },
}
</script>