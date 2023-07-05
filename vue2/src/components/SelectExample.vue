<template>
  <div>

    <h2>5. select example</h2>
    <h6>select box</h6>
    <small>- datepicker + date foramt + control time</small><br>
    <small>- range / one date only</small><br>
    <small>- disabled before date/time</small><br>
    <small>- clearable</small><br>
    <v-select
    ></v-select><br>
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
import vSelect from 'vue-select'
import "vue-select/dist/vue-select.css"

export default {
  name: 'SelectExample',
  components: {
    vSelect
  },
  computed: {
    ...mapGetters({
      getDatepicker: 'datepicker/getDatepicker',
    }),
    setDatepicker() {
      return this.getDatepicker('selectExample')
    },
  },
}
</script>

<style scoped>
select { width: 350px; display: inline; margin-right: 5px; }
</style>