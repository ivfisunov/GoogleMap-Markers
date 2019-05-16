/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { AppContext } from './AppProvider';


const renderMarkers = (geoData) => {
  return geoData.map((point, id) => {
    return <Marker
      key={id}
      position={point}
    />;
  }); 
};

const Map = withGoogleMap(props =>
  <AppContext.Consumer>
    {({ geoData }) => (
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: 30.0, lng: 0.0 }}
      >
        {renderMarkers(geoData)}
      </GoogleMap>
    )}
  </AppContext.Consumer>
);

export default Map;