import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationListContainer from './containers/LocationListContainer';
import ForcastExtendedContainer from './containers/ForcastExtendedContainer';
import WeatherFooter from './components/WeatherFooter';
import './App.css';

const cities = [
  'Resistencia,ar',
  'Asuncion,py',
  'Buenos Aires,ar',
  'Florianopolis,br'
];

class App extends Component {
 
  render() {
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
              <LocationListContainer cities={cities} />
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                <ForcastExtendedContainer />
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


