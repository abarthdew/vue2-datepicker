<template>
  <div>

    <h2>1. simple date select</h2>

    <h6>YYYY-MM-DD</h6>
    <date-picker 
      v-model="dateSelected"
    />
    <b-button class="m-1" variant="primary" @click="check(dateSelected)">
      Check
    </b-button>
    
    <h6>YYYY-MM-DD HH:mm:SS</h6>
    <date-picker 
      v-model="dateSelected"
    />
    <b-button class="m-1" variant="primary" @click="check()">
      Check
    </b-button>
    
    <h6>YYYY-MM</h6>
    <date-picker 
      v-model="dateSelected"
    />
    <b-button class="m-1" variant="primary" @click="check()">
      Check
    </b-button>
    
    <h6>YYYY</h6>
    <date-picker 
      v-model="dateSelected"
    />
    <b-button class="m-1" variant="primary" @click="check()">
      Check
    </b-button>
    
    <h6>HH:mm:SS</h6>
    <date-picker 
      v-model="dateSelected"
    />
    <b-button class="m-1" variant="primary" @click="check()">
      Check
    </b-button>
    
    <h6>HH:mm [AM/PM]</h6>
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
  name: 'SimpleDateSelect',
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