import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherCity from './../../services/getUrlWeatherCity';
import './styles.css';

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null
    };
    console.log('constructor');
  }

  // Este método solo se ejecuta justo después de que el componente haya sido montado en el DOM.
  // Es el método perfecto para integrar librerias de terceros (plugins jquery), realizar alguna petición ajax
  // ó establecer algún timer de tipo setTimeout ó setInterval.
  componentDidMount() {
    console.log('componentDidMount');
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  handleUpdateClick = () => {
    const apiUrl = getUrlWeatherCity(this.state.city);
    fetch(apiUrl)
      .then(resolve => {
        return resolve.json();
      })
      .then(response => {
        const newWeather = transformWeather(response);
        // console.log('====================================');
        // console.log('Actulizar el state siempre con setState({})');
        // console.log('====================================');
        this.setState({
          data: newWeather
        });
      });
  };
  render() {
    // Por destructring
    const { city, data } = this.state;
    const { onWeatherLocationClick } = this.props;
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city} />
        {/*Aqui usamos un operador ternario para mostar un label de actualizando mientras carga*/}
        {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
        {/* <button onClick={this.handleUpdateClick}>Refresh</button> */}
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func
};

export default WeatherLocation;
