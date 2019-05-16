/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const axios = require('axios');

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      coordinates: [],
      randomCoordinates: '',
      earthCoordinates: '',
      maxNumber: 15
    };
  };

  componentDidMount = () => {
    this.findCoordinates();

  };

  getRandom = (from, to, fixed) => {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  };

  findCoordinates = () => {
  
    const lat = this.getRandom(-90, 90, 3);
    const lng = this.getRandom(-180, 180, 3);
    this.setState({ randomCoordinates: `lat: ${lat} lng: ${lng}` });
    console.log(lat, lng);
    axios(`https://cors-anywhere.herokuapp.com/http://api.geonames.org/astergdem?lat=${lat}&lng=${lng}&username=ivfisunov`)
      .then((response) => {
        if (this.state.coordinates.length === this.state.maxNumber) {
          this.setState({ geoData: this.state.coordinates });
          return;
        }
        // console.log(response.data);
        if (response.data > 0) {
          this.state.coordinates.push({
            lat,
            lng
          });
          console.log('earth!');
          console.log(this.state.coordinates);
          this.setState({ earthCoordinates: `lat: ${lat} lng: ${lng}` });
          
        }
        this.findCoordinates();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}