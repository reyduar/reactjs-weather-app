import convert from 'convert-units';
import { SUN, WINDY } from './../constants/weathers';

// Pasamos los datos de los grados de Kelvin a Celcius
const getTemp = kelvin => {
  return Number(
    convert(kelvin)
      .from('K')
      .to('C')
      .toFixed(2)
  );
};

const getWeatherState = weather_data => {
  return SUN;
};

const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const temperature = getTemp(temp);
  const weatherState = getWeatherState(weather_data);

  const data = {
    temperature,
    weatherState,
    humidity,
    wind: `${speed} m/s`
  };

  return data;
};

export default transformWeather;
