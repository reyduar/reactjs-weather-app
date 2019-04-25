import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    
    handleSelectionLocation = city => {
        this.props.setCityProp(city);
      };

    render() {
        return (
            <LocationList
            cities={this.props.cities}
            onSelectedLocation={this.handleSelectionLocation}
          />
        );
    }
}

LocationListContainer.propTypes = {
    setCityProp : PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
  }
  const mapDispatchToProps = dispatch => ({
    setCityProp: value => dispatch(setCity(value))
  });

export default connect(null,mapDispatchToProps)(LocationListContainer);