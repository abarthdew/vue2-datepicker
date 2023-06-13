<template>
  <div>
    <h5>YYYY-MM-DD</h5>
    <date-picker 
      v-model="dateSelected"
      :placeholder="`YYYY-MM`"
      :format="`YYYY-MM`"
      :range="`range`"
    />
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css';

export default {
  name: 'DatePickerFilter',
  components: {
    DatePicker,
  },
  data() {
    return {
      dateSelected: new Date(),
    }
  }
}
</script>