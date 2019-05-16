/* eslint-disable no-unused-expressions */
import React from 'react';
import { AppContext } from './AppProvider';
import Map from './Map';
import Load from './Load';

const Logic = () => {
  return (
    <AppContext.Consumer>
      {({ geoData, coordinates }) => {
        if (!geoData) {
          return <Load />;
        }
        return <Map 
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />;
      }}
    </AppContext.Consumer>
  );
};

export default Logic;