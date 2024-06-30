<template>
  <div id="app">
    <WeatherView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WeatherView from './views/WeatherView.vue'

export default defineComponent({
  name: 'App',
  components: {
    WeatherView,
  },
})
</script>
