<template>
  <div>

    <h2>5. select example</h2>
    <h6>Select Box</h6>
    <small>- datepicker + date foramt + control time</small><br>
    <small>- range / one date only</small><br>
    <small>- disabled before date/time</small><br>
    <small>- clearable</small><br>

    <h6>The reason why `yyyymmddhhmmss` doesn't exist its own v-model value:</h6>
    <code>yyyymmddhhmmss: { dateSelected: new Date() },</code><br>
    <small>- If you code change below, you can see the v-model value</small><br>
    <code>yyyymmddhhmmss: { dateSelected: '2023-07-07 12:00:00' },</code><br>
    <small>- It is different between date as `new Date()` and String Type dateSelected.</small><br>
    <small></small><br>

    <v-select
      style="width: 350px; display: inline-block;"
      v-model="optionSelected"
      :options="getDateOptions"
      label="text"
      :clearable="false"
    ></v-select><br>
    <date-picker 
      v-model="optionSelected.dateSelected"
      :placeholder="optionSelected.text"
      value-type="format"
      :type="optionSelected.type"
      :format="optionSelected.format"
      :lang="setDatepicker.lang"
      :range="optionSelected.range"
      :clearable="false"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', optionSelected.dateSelected)">
      Check
    </b-button><br>

    <div class="bg-info mt-3 p-3">
      <h6><b>Conclusion</b></h6>
      <small>- v-model: specific value | new Date()</small><br>
      <small>- value-type: matched v-model value</small><br>
      <small>&nbsp;ㄴ specific value: cannot changed its own format</small><br>
      <small>&nbsp;ㄴ new Date(): changed as its value-type</small><br>
      <small>- type: calendar type</small><br>
      <small>- format: visible input value</small><br>
    </div>

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
      getDateOptions: 'datepicker/getDateOptions',
    }),
    setDatepicker() {
      return this.getDatepicker('selectExample')
    },
  },
  data() {
    return {
      optionSelected: '',
    }
  },
  methods: {
    init() {
      this.optionSelected = this.getDateOptions[0]
    },
  },
  created() {
    this.init()
  }
}
</script>