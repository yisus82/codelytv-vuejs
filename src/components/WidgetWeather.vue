<template>
  <div>
    <select v-model="query" v-on:change="findWeather">
      <option selected="selected">A Coruña</option>
      <option>Madrid</option>
      <option>Barcelona</option>
    </select>
    <p>Temp: {{ temp }} | Max: {{ tempMax }} | Min: {{ tempMin }}</p>
  </div>
</template>

<script>
import { findWeatherByLocation } from '../services/weather-service';

const DEFAULT_QUERY = 'A Coruña';

export default {
  name: 'WidgetWeather',
  data() {
    return {
      query: DEFAULT_QUERY,
      temp: 0,
      tempMax: 0,
      tempMin: 0,
    };
  },
  created() {
    findWeatherByLocation(DEFAULT_QUERY)
      .then(this.setWeatherData);
  },
  methods: {
    findWeather() {
      findWeatherByLocation(this.query)
        .then(this.setWeatherData);
    },
    setWeatherData(weatherData) {
      this.temp = weatherData.temp;
      this.tempMax = weatherData.temp_max;
      this.tempMin = weatherData.temp_min;
    },
  },
};
</script>
