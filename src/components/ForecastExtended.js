import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

const api_key = '3b9b2b09e141e35ce4d6489982102b10';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {
  constructor(props) {
    super(props);
    this.state = { forecastData: null };
  }

  // Se ejecuta una sola vez en el primer render
  componentDidMount() {
    this.updateCity(this.props.city);
  }

  // Se utiliza cuando se quiere actualizar algo cuando se actulizar el componente
  // Se ejecuta siempre que se modifica las propiedades excepto la primera vez que se establece el componente
  // por eso ejecutamos el updateCity en componentDidMount
  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({ forecastData: null });
      this.updateCity(nextProps.city);
    }
  }

  updateCity = city => {
    // fetch
    const url_fetch = `${url}?q=${city}&appid=${api_key}`;

    fetch(url_fetch)
      .then(data => data.json())
      .then(weather_data => {
        console.log(JSON.stringify(weather_data));
        const forecastData = transformForecast(weather_data);
        this.setState({ forecastData: forecastData });
      });
  };

  renderForecastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      />
    ));
  }

  renderProgress = () => {
    return <h3>Cargando Pronóstico extendido...</h3>;
  };

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
        {forecastData
          ? this.renderForecastItemDays(forecastData)
          : this.renderProgress()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
  //  forecastData: PropTypes.array
};

export default ForecastExtended;
