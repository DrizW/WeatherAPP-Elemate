<template>
  <main class="container d-flex align-items-center justify-content-center min-vh-100">
    <section>
      <h1 class="text-center mb-4">Météo du jour</h1>
      <div class="row justify-content-center">
        <article class="col-12">
          <form @submit.prevent="getWeather" class="mb-4">
            <div class="input-group">
              <input v-model="city" placeholder="Entrez une ville" class="form-control me-3" />
              <button class="btn btn-success" type="submit">Rechercher</button>
            </div>
          </form>
          <WeatherDetails :weatherData="weatherData" :cityFromIP="cityFromIP" />
        </article>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { fetchLocation, fetchWeather } from '../services/weatherApi'
import WeatherDetails from '../components/WeatherDetails.vue'
import { Weather } from '../models/Weather'

export default defineComponent({
  components: {
    WeatherDetails
  },
  data() {
    return {
      city: '',
      weatherData: null as Weather | null,
      cityFromIP: false
    }
  },
  async created() {
    const location = await fetchLocation()
    if (location && location.city) {
      this.cityFromIP = true
      this.weatherData = await fetchWeather(location.city)
    }
  },
  methods: {
    async getWeather() {
      if (this.city) {
        this.cityFromIP = false
        this.weatherData = await fetchWeather(this.city)
      }
    }
  }
})
</script>
