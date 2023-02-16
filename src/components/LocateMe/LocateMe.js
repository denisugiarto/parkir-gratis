import React, { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import Map from '../Map';

const LocateMe = () => {
  let DEFAULT_CENTER = [0, 0];
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      }
    });
    DEFAULT_CENTER = position;
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <>
      <h1>Locate Me</h1>
      <Map width='800' height='400' center={DEFAULT_CENTER} zoom={12}>
        {({ Marker, Popup }) => <LocationMarker />}
      </Map>
      <button onClick={LocationMarker}>My Location</button>
    </>
  );
};

export default LocateMe;
