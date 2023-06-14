<template>
  <div>

    <h2>4. Range Setting</h2>

    <h6>Date Range</h6>
    <date-picker 
      v-model="dateSelected"
    />
    <b-button class="m-1" variant="primary" @click="check()">
      Check
    </b-button>
  
    <h6>Datetime Range</h6>
    <date-picker 
      v-model="dateSelected"
    />
    <b-button class="m-1" variant="primary" @click="check()">
      Check
    </b-button>
  
  </div>
</template>

<script>

export default {
  name: 'RangeSetting',
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