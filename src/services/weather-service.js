export const findWeatherByLocation = (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.VUE_APP_OPENWEATHER_API_KEY}`;

  return fetch(url).then((response) => response.json()).then((data) => data.main);
};

export default { findWeatherByLocation };
