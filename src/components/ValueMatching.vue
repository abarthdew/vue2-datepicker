<template>
  <div>

    <h2>2. value matching</h2>

    <h6>new Date()</h6>
    <small>: as option added, cannot see v-model value.</small><br>
    <small>: If you delete date-picker `value-type` options,<br>You can see v-model value as format 'YYYY-MM-DD'.</small><br>
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
      value-type="format"
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
 
    <h6>date.toLocaleString().split(',')[0]
      <br><b>{{ setDatepicker.yyyymmdd }}</b>
    </h6>
    <small>: cannot see v-model value because of <b>format != new Date()</b>.</small><br>
    <date-picker 
      v-model="setDatepicker.yyyymmdd"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.yyyymmdd)">
      Check
    </b-button>

    <h6>date.toLocaleDateString()
      <br><b>{{ setDatepicker.ddmmyyyy }}</b>
    </h6>
    <small>: cannot see v-model value because of <b>format != new Date()</b>.</small><br>
    <date-picker 
      v-model="setDatepicker.ddmmyyyy"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.ddmmyyyy)">
      Check
    </b-button>

    <h6>get new Date() value as 'YYYY-MM'</h6>
    <small>- v-model: new Date()</small><br>
    <small>- first call `check` function(haven't got any value):<br><b>Thu Jul 06 2023 12:32:57 GMT+0900 (한국 표준시)</b></small><br>
    <small>- picking date and call `check` function result: <b>YYYY-MM</b></small><br>
    <small>: cannot see v-model value because of <b>format != new Date()</b>.</small><br>
    <date-picker 
      v-model="setDatepicker.yyyymm"
      value-type="format"
      type="month"
      format="YYYY-MM"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.yyyymm)">
      Check
    </b-button>

    <h6>get new Date() value as 'YYYY'</h6>
    <small>- v-model: ['2012', '2013']<br></small>
    <small>- first call `check` function(haven't got any value): <b>['2012', '2013']</b></small><br>
    <small>- picking date and call `check` function result: <b>['YYYY', 'YYYY']</b></small><br>
    <date-picker 
      v-model="setDatepicker.yyyyrange"
      value-type="format"
      type="year"
      format="YYYY"
      :range="true"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.yyyyrange)">
      Check
    </b-button>

    <h6>get new Date() value as 'YYYY-MM-DD hh:mm:ss'</h6>
    <small>- v-model: ['2023-07-27 12:00:00', '2023-07-27 12:00:00']<br></small>
    <small>- first call `check` function(haven't got any value):<br><b>['2023-07-27 12:00:00', '2023-07-27 12:00:00']</b></small><br>
    <small>- picking date and call `check` function result:<br><b>['YYYY-MM-DD hh:mm:ss', 'YYYY-MM-DD hh:mm:ss']</b></small><br>
    <date-picker 
      v-model="setDatepicker.yyyymmddhhmmssrange"
      value-type="format"
      type="datetime"
      format="YYYY-MM-DD hh:mm:ss"
      :range="true"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.yyyymmddhhmmssrange)">
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