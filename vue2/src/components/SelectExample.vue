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
    </select>
    <date-picker 
      v-model="dateSelected"
      :placeholder="`YYYY-MM`"
      :format="`YYYY-MM`"
      :range="`range`"
    />
    <b-button class="m-1" variant="primary" @click="check()">
      Check
    </b-button>
  
  </div>
</template>

<script>

export default {
  name: 'SelectExample',
  data() {
    return {
      dateSelected: new Date(),
    }
  },
  methods: {
    check(item) {
      console.log(item)
    }
  }
}
</script>

<style scoped>
select { width: 350px; display: inline; margin-right: 5px; }
</style>