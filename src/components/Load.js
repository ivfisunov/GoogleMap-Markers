import React from 'react';
import { AppContext } from './AppProvider';

const Load = () => {
  return (
    <AppContext.Consumer>
      {({ earthCoordinates, randomCoordinates, coordinates, maxNumber }) => (
        <div>
          <h1>Loading geo coordinates...</h1>
          <h2>Generate random coordinates: {randomCoordinates}</h2>
          {earthCoordinates !== '' ?
            <h2>Found Earth coordinates: {earthCoordinates} ({coordinates.length} points complete of {maxNumber})</h2>
            :
            null}          
        </div>
      )}
    </AppContext.Consumer>
  );

};

export default Load;