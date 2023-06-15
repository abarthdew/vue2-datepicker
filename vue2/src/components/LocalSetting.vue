<template>
  <div>

    <h2>3. local setting</h2>
    
    <h6>YYYY-MM-DD</h6>
    <date-picker 
      v-model="yyyymmdd"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', yyyymmdd)">
      Check
    </b-button>
    
    <h6>YYYY-MM</h6>
    <date-picker 
      v-model="yyyymm"
    />
    <b-button class="m-1" variant="primary" @click="$emit('check', yyyymm)">
      Check
    </b-button>
  
  </div>
</template>

<script>

export default {
  name: 'LocalSetting',
  data() {
    return {
      yyyymmdd: '',
      yyyymm: '',
    }
  }
}
</script>