import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import WeatherFooter from './components/WeatherFooter';
import './App.css';

const cities = [
  'Resistencia,ar',
  'Asuncion,py',
  'Buenos Aires,ar',
  'Florianopolis,br'
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null
    };
  }

  handleSelectionLocation = city => {
    this.setState({ city });
  };

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title="Weather App" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectionLocation}
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  {city ? (
                    <ForecastExtended city={city} />
                  ) : (
                    <h1>Seleccione una ciudad</h1>
                  )}
                </div>
              </Paper>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <WeatherFooter />
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
