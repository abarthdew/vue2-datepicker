<template>
  <div>

    <h2>4. Range Setting</h2>

    <h6>Date Range</h6>
    <date-picker 
      v-model="dateRange"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', dateRange)">
      Check
    </b-button>
  
    <h6>Datetime Range</h6>
    <date-picker 
      v-model="datetimeRange"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', datetimeRange)">
      Check
    </b-button>
  
  </div>
</template>

<script>

export default {
  name: 'RangeSetting',
  data() {
    return {
      dateRange: '',
      datetimeRange: '',
    }
  }
}
</script>