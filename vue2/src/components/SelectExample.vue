<template>
  <div>

    <h2>5. select example</h2>

    - select box <br/>
    - datepicker + date foramt + control time <br/>
    - range / one date only <br/>
    - disabled before date/time <br/>
    - clearable <br/>
    <select class="form-select" aria-label="Default select example">
      <option value="1" selected>YYYY-MM-DD</option>
      <option value="2">YYYY-MM</option>
      <option value="4">YYYY</option>
      <option value="5">YYYY-MM-DD HH:mm:SS</option>
      <option value="6">HH:mm:SS</option>
      <option value="7">HH:mm [AM/PM]</option>
      <option value="8">YYYY-MM-DD[Range]</option>
      <option value="9">YYYY-MM[Range]</option>
      <option value="10">YYYY[Range]</option>
      <option value="11">YYYY-MM-DD HH:mm:SS[Range]</option>
      <option value="12">HH:mm:SS[Range]</option>
      <option value="13">HH:mm [AM/PM][Range]</option>
    </select><br>
    <date-picker 
      v-model="setDatepicker.dateSelected"
      :placeholder="`YYYY-MM-DD`"
      :format="`YYYY-MM`"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', setDatepicker.dateSelected)">
      Check
    </b-button>
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SelectExample',
  computed: {
    ...mapGetters({
      getDatepicker: 'datepicker/getDatepicker',
    }),
    setDatepicker() {
      return this.getDatepicker('selectExample')
    }
  },
}
</script>

<style scoped>
select { width: 350px; display: inline; margin-right: 5px; }
</style>