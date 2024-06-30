<template>
  <div v-if="weatherData" class="card bg-light text-dark mt-4">
    <div class="card-body text-center">
      <h2>
        <template v-if="cityFromIP">Actuellement chez vous à : {{ weatherData.city }}</template>
        <template v-else>{{ weatherData.city }}</template>
      </h2>
      <p>Température : {{ weatherData.temperature }}°C</p>
      <p>Description : {{ weatherData.description }}</p>
      <img :src="weatherData.icon" alt="Icône météo récupérée depuis Weatherstack"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Weather } from '../models/Weather'

export default defineComponent ({
  props: {
    weatherData: {
      type: Object as PropType <Weather | null>,
      default: null
    },
    cityFromIP: Boolean
  }
})
</script>
