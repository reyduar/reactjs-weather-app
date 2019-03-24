const location = 'Resistencia,ar';
const api_key = '3b9b2b09e141e35ce4d6489982102b10';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';

export const apiUrl = `${url_base_weather}?q=${location}&appid=${api_key}`;
