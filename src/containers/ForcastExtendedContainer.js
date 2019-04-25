import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended';

class ForcastExtendedContainer extends Component {
   
    render() {
        return (
            this.props.city &&
            <ForecastExtended city={this.props.city} />  
        );
    }
}

ForcastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
}

// MapStateToProps no es nada mas que una funcion, internamente hace una Subscripción y un Get State
// por lo que constantemente en caso de un cambio en el STATE se actualiza o se ejecuta nuevamente.
const mapStateToProps = ({city}) => ({city});

export default connect(mapStateToProps, null)(ForcastExtendedContainer);