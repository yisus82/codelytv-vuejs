const Vue = require('vue/dist/vue');
const { findWeatherByLocation } = require('./weather-service');

const DEFAULT_QUERY = 'A Coruña';

module.exports = new Vue({
  el: '#widget',
  data: {
    query: DEFAULT_QUERY,
    temp: 0,
    tempMax: 0,
    tempMin: 0,
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
});
