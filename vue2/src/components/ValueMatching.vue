<template>
  <div>

    <h2>2. value matching</h2>

    <h6>new Date()</h6>
    <date-picker 
      v-model="newDate.basic"
      :disabled="true"
    />
    <b-button class="m-1" variant="primary" @click="check(newDate.basic)">
      Check
    </b-button>

    <h6>get new Date() value as 'YYYY-MM-DD'</h6>
    <date-picker 
      v-model="newDate.getValue"
      value-type="YYYY-MM-DD"
      :disabled="true"
    />
    <b-button class="m-1" variant="primary" @click="check(newDate.getValue)">
      Check
    </b-button>
  
    <h6>new Date(2019, 9, 9)</h6>
    <date-picker 
      v-model="newDate.setDate"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', newDate.setDate)">
      Check
    </b-button>
  
    <h6>new Date(2019, 9, 9).getTime()</h6>
    <date-picker 
      v-model="newDate.getTime"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', newDate.getTime)">
      Check
    </b-button>
  
    <h6>2019-10-09</h6>
    <date-picker 
      v-model="newDate.yyyymmdd"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', newDate.yyyymmdd)">
      Check
    </b-button>
  
    <h6>09/10/2019</h6>
    <date-picker 
      v-model="newDate.ddmmyyyy"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', newDate.ddmmyyyy)">
      Check
    </b-button>
  
  </div>
</template>

<script>

export default {
  name: 'ValueMatching',
  data() {
    return {
      newDate: {
        basic: '',
        getValue: '',
        setDate: '',
        getTime: '',
        yyyymmdd: '',
        ddmmyyyy: '',
      }
    }
  }
}
</script>