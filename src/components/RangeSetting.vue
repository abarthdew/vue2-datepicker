<template>
  <div>

    <h2>4. range setting</h2>

    <h6>Date Range</h6>
    <date-picker 
      v-model="setDatepicker.dateRange"
      :range="true"
      type="date"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.dateRange)">
      Check
    </b-button>

    <h6>Month Range</h6>
    <date-picker 
      v-model="setDatepicker.dateRange"
      :range="true"
      type="month"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.dateRange)">
      Check
    </b-button>

    <h6>Year Range</h6>
    <date-picker 
      v-model="setDatepicker.dateRange"
      :range="true"
      type="year"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.dateRange)">
      Check
    </b-button>
  
    <h6>Datetime Range</h6>
    <date-picker 
      v-model="setDatepicker.datetimeRange"
      :range="true"
      type="datetime"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.datetimeRange)">
      Check
    </b-button>
  
    <h6>Not Before or After Range</h6>
    <small>1. start date: not before today.</small><br>
    <small>2. start time: not after 18:00.</small><br>
    <small>3. end date: start date ~ week.</small><br>
    <small>4. end time: not after 12:00.</small><br>
    <date-picker 
      v-model="setDatepicker.datetime1"
      type="datetime"
      :default-value="setDatepicker.datetime1"
      :disabled-date="notBeforeToday"
      :disabled-time="notBeforeTime1"
    />
    <date-picker 
      v-model="setDatepicker.datetime2"
      type="datetime"
      :default-value="setDatepicker.datetime2"
      :disabled-date="notBeforeTodayWeek"
      :disabled-time="notBeforeTime2"
    />
  
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
  methods: {
    notBeforeToday(date) {
      return date < new Date(new Date().setHours(0, 0, 0, 0))
    },
    notBeforeTime1(date) {
      return date < new Date(new Date().setHours(18, 0, 0, 0));
    },
    notBeforeTime2(date) {
      return date < new Date(new Date().setHours(12, 0, 0, 0));
    },
    notBeforeTodayWeek(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date < today || date > new Date(today.getTime() + 7 * 24 * 3600 * 1000);
    },
  }
}
</script>