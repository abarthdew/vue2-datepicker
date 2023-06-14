<template>
  <div>

    <h2>2. value matching</h2>

    <h6>new Date()</h6>
    <date-picker 
      v-model="dateSelected"
      :disabled="true"
    />
    <b-button class="m-1" variant="primary" @click="check(dateSelected)">
      Check
    </b-button>

    <h6>get new Date() value as 'YYYY-MM-DD'</h6>
    <date-picker 
      v-model="dateSelected2"
      value-type="YYYY-MM-DD"
      :disabled="true"
    />
    <b-button class="m-1" variant="primary" @click="check(dateSelected2)">
      Check
    </b-button>
  
    <h6>new Date(2019, 9, 9)</h6>
    <date-picker 
      v-model="dateSelected"
    />
    <b-button class="m-1" variant="primary" @click="check()">
      Check
    </b-button>
  
    <h6>new Date(2019, 9, 9).getTime()</h6>
    <date-picker 
      v-model="dateSelected"
    />
    <b-button class="m-1" variant="primary" @click="check()">
      Check
    </b-button>
  
    <h6>2019-10-09</h6>
    <date-picker 
      v-model="dateSelected"
    />
    <b-button class="m-1" variant="primary" @click="check()">
      Check
    </b-button>
  
    <h6>09/10/2019</h6>
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
  name: 'ValueMatching',
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