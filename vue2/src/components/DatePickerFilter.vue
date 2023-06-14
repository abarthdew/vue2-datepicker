<template>
  <div>
    <h5>YYYY-MM-DD</h5>
    <select class="form-select width-50" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <date-picker 
      v-model="dateSelected"
      :placeholder="`YYYY-MM`"
      :format="`YYYY-MM`"
      :range="`range`"
    />
    <b-button class="m-1" variant="primary">Button</b-button>
  </div>
</template>

<script>

export default {
  name: 'DatePickerFilter',
  data() {
    return {
      dateSelected: new Date(),
    }
  }
}
</script>